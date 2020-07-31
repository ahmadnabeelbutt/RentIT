import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Alert,View,TextInput,Text,StyleSheet,TouchableOpacity,Image,ActivityIndicator,ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Add_Ads} from '../actions/adsAction';
import {connect} from 'react-redux';
//var ImagePicker =require('react-native-image-picker');
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Upload Image',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  };

class UploadAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          rent: '',
          Description: '',
          Category: '',
          date: '',
          dateto: '',
          privacyPolicyy : '',
          UserID: '',
          AdsID: '',
          fileList: [],
          avatarSource: null,
          pic: null,
          image: false,
          Name:'user',
        Email:'User',
        Number:'User',
        };
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
              image:true,
              avatarSource: source,
              pic: response.data,
            });
          }
        });
      };

      prev = () => {
          this.props.navigation.goBack()
      }

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
               console.log(ls.Number,"Number")
               console.log(ls.Name,"Name")
               this.setState({Email:ls.Email,Name:ls.Name,Number:ls.Number})
             }
           });
        });
        this.setState({AdsID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)});
        const {
          Title,
          description,
          Rent,
          catergory,
          userid,
          dateeto,
          Datefrom,
          Policy
        } = this.props.route.params;
        this.setState({
          title: Title,
          Description: description,
          rent: Rent,
          Category: catergory,
          UserID: userid,
          date:dateeto,
          dateto:Datefrom,
          privacyPolicyy : Policy,
        });
      }
  submitDatatoAction = () => {
    console.log('Category', this.state.Category);
    console.log('title', this.state.title);
    console.log('avatarSource', this.state.avatarSource);
    console.log('Description', this.state.Description);
    console.log('rent', this.state.rent);
    console.log('date', this.state.date);
    console.log('dateto', this.state.dateto);
    console.log('UserID', this.state.UserID);
    console.log('AdsID', this.state.AdsID);
    console.log('Name', this.state.Name);
    console.log('Number', this.state.Number);
    this.props.Add_Ads(
    this.state.Category,
    this.state.title,
    this.state.avatarSource,
    this.state.Description,
    this.state.rent,
    this.state.date,
    this.state.dateto,
    this.state.privacyPolicyy,
    this.state.UserID,
    this.state.AdsID,
    this.state.Name,
    this.state.Number,
  );

    Alert.alert("Ads Successfully Added")
     this.props.navigation.navigate('Category');
    }
  render(){
    return(
        <View style = {styles.container}>
            <View style = {{flexDirection  : 'row', justifyContent : 'space-evenly', marginBottom : 40}}>
                <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
                <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
                <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
                <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View> 
            </View>
          {
            this.state.image===false?
            <Text style = {{justifyContent : 'center', alignItems : 'center', marginLeft : 115, marginBottom : 300}}>Please Upload the image</Text>
          :
          <Image
          source={this.state.avatarSource}
          style={{width: '90%', height: 220, margin: 10}}
        />
          }
             
            <TouchableOpacity style={styles.submit} onPress = {this.myfun}>
                <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
            <View style = {{flexDirection : 'row',marginTop : 20, marginBottom : 22}}>
          <TouchableOpacity
            style = {styles.submitBtn}
            onPress = {this.prev}
          >
            <Text style = {styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.submitBtn1}
            onPress={this.submitDatatoAction}
          >
            <Text style = {styles.buttonText}>Upload My Ad</Text>
          </TouchableOpacity>
        </View>
        </View> 
         
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 10,
    backgroundColor: '#fff',
    //alignItems : 'center',
    //justifyContent : 'center'
  },
  icon: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    bottom: 0,
    width : 35,
    height : 35,
    borderRadius : 35/2,
    borderWidth : 1,
    alignItems : 'center',
    justifyContent : 'center'
   },
   userText : {
     fontSize : 18,
     marginTop : 10
   },
   submitBtn: {
    backgroundColor: 'green',
    padding: 15,
    //borderRadius: 8,
    marginTop: 10,
    width : '50%',
    borderRightWidth : 0.5,
    borderColor : '#fff',
    borderTopLeftRadius : 8,
    borderBottomLeftRadius : 8
  },
  submitBtn1: {
    backgroundColor: 'green',
    padding: 15,
    //borderRadius: 8,
    marginTop: 10,
    width : '50%',
    borderLeftWidth : 0.5,
    borderColor : '#fff',
    borderTopRightRadius : 8,
    borderBottomRightRadius : 8
  },
  submit: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    marginTop: 40,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default connect(
    null,
    {Add_Ads},
  )(UploadAd);