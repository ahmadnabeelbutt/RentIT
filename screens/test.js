import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Platform,Button, StatusBar,Text, StyleSheet,ScrollView, View,TouchableOpacity,Image } from 'react-native';
//import LoginScreen from './LoginScreen';
import Inbox from './Inbox';
import Articles from '../components/Articles';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'My Pic App',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
};


class Test extends Component {
  state={  
    items:[],
    filterData:[],
    Name:'user',
    Email:'User',
    Number:'User',
    avatarSource: null,
    pic: null,
    image:false,
    userid:''
  }
  myfun = () => {
        
    console.log("my fun is called")
  ImagePicker.showImagePicker( options, response => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image Picker Error: ', response.error);
    } else {
      let source = {uri: response.uri};
      this.setState({
        image:false,
        avatarSource: source,
        pic: response.data,
      });
      firebase.database().ref('user/loginuserdata').child(this.state.userid).set(
        {
          UserID:this.state.userid,
          Name:this.state.Name,
          Email:this.state.Email,  
          Number:this.state.Number,
          Pic:source,
            }).then(()=>{
              console.log("insert"); 
            }).catch((error)=>{
              console.log(error);
          })
    } 
  });
};

  componentDidMount() {
   
    const user = firebase.auth().currentUser;
    if (user) {
     console.log('User email: ',user.email)
    };
    firebase.database().ref('/user/loginuserdata').on('value', (snapshot) => {
      let data = snapshot.val();
      let Items = Object.values(data);
      console.log(data,"This Is The State Value")
      Items.forEach(ls=>{
        if(ls.Email ===user.email){
          console.log(user.email,"User email")
          console.log(ls.Email,"Email")
          console.log(ls.UserID,"Userid")
          console.log(ls.Number,"Number")
          console.log(ls.Name,"Name")
          console.log("pic is",ls.Pic)
          this.setState({Email:ls.Email,Name:ls.Name,Number:ls.Number,userid:ls.UserID,avatarSource:ls.Pic, image : true})
        }
      });
      // console.log(Items,"This Items From The DataBase")
   });
  }
  render(){
    return(
      <ScrollView style = {styles.container}>
        <View 
          style = {{
            justifyContent : 'center', margin : 10, alignItems : 'center',padding : 20,
            borderRadius : 10,shadowColor: "green",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                    borderColor : 'green'
            
            }}>
          <View style = {{ width : 155, height : 155, borderRadius  : 155/2}}>
            {/* <Image
              source={require('../images/std1.jpg')}
              style={{
                  width: 155, height: 155, borderRadius: 155/2
              }}
            /> */}
            {
              this.state.image===false?
              <Image
              source={require('../images/std1.jpg')}
              style={{
                  width: 155, height: 155, borderRadius: 155/2
              }}
             />
             
            :
            <Image
            source={this.state.avatarSource}
            style={{
                width: 155, height: 155, borderRadius: 155/2
            }}
           />
            }
            <View style = {styles.icon}>
              <TouchableOpacity
                onPress = {this.myfun}
              >
                <Image style = {{height : 15, width : 15}} 
                source={require('../images/edit.png')}
                
                />
              </TouchableOpacity>
            </View>
          </View>
          {
            console.log(this.state.Email)
          }    
            <Text style = {styles.userText}>{this.state.Name}</Text>
            <Text style = {styles.userText}>{this.state.Email}</Text>
            <Text style = {styles.userText}>{this.state.Number}</Text>
        </View>
          <TouchableOpacity>
            <View style = {{flexDirection : 'row',alignItems : 'center',height : 70,borderTopWidth : 1,justifyContent : 'space-between', padding : 10}}>
              <Text style = {{fontSize : 17}}>Rate our App</Text>
              <Image style = {{width : 25, height : 25}} source = {require('../images/star.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style = {{flexDirection : 'row',alignItems : 'center',height : 70,borderTopWidth : 1,justifyContent : 'space-between', padding : 10}}>
              <Text style = {{fontSize : 17}}>Share our App</Text>
              <Image style = {{width : 25, height : 25}} source = {require('../images/share.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style = {{flexDirection : 'row',alignItems : 'center',height : 70,borderTopWidth : 1,justifyContent : 'space-between', padding : 10}}>
              <Text style = {{fontSize : 17}}>About</Text>
              <Image style = {{width : 25, height : 25}} source = {require('../images/about.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style = {{flexDirection : 'row',alignItems : 'center',height : 70,borderTopWidth : 1,justifyContent : 'space-between', padding : 10}}>
              <Text style = {{fontSize : 17}}>What is Privacy Policy?</Text>
              <Image style = {{width : 25, height : 25}} source = {require('../images/pp.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> firebase.auth().signOut()}  
          >
            <View style = {{flexDirection : 'row',alignItems : 'center',height : 70,borderTopWidth : 1,justifyContent : 'space-between', padding : 10, borderBottomWidth : 1}}>
              <Text style = {{fontSize : 17}}>Logout</Text>
              <Image style = {{width : 25, height : 25}} source = {require('../images/logout.png')}></Image>
            </View>
          </TouchableOpacity>
        
        {/* <Button
          title = 'go to articles'
          onPress={() => {
              this.props.navigation.navigate('Articles')
            }}

        /> */}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems : 'center',
    //justifyContent : 'center'
  },
  icon: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 8,
    bottom: 8,
    width : 35,
    height : 35,
    borderRadius : 35/2,
    borderWidth : 2,
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : 'green'
   },
   userText : {
     fontSize : 18,
     marginTop : 10
   }

});

export default Test;