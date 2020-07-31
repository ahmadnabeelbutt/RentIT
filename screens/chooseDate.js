import React, {Component} from 'react';
import firebase from 'firebase';
import {Alert,View,TextInput,Text,StyleSheet,TouchableOpacity,Image,ActivityIndicator,ScrollView,
} from 'react-native';
import {Button, Input} from 'native-base';
import {addAdsdfunction} from '../actions/adsAction';
import {FlatList} from 'react-native-gesture-handler';
import {Add_Ads} from '../actions/adsAction';
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker'
//import ImagePicker from 'react-native-image-picker';
// const options = {
//   title: 'My Pic App',
//   takePhotoButtonTitle: 'Take photo with your camera',
//   chooseFromLibraryButtonTitle: 'Choose photo from library',
// };


class ChooseDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rent: '',
      Description: '',
      Category: '',
      date: '',
      dateto: '',
      privacyPolicy : '',
      UserID: '',
      AdsID: '',
      
      Name:'user',
    Email:'User',
    Number:'User',
    };
  }
  myfun = () => {
    // ImagePicker.showImagePicker(options, response => {
    //   console.log('Response = ', response);
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('Image Picker Error: ', response.error);
    //   } else {
    //     let source = {uri: response.uri};
    //     this.setState({
    //       avatarSource: source,
    //       pic: response.data,
    //     });
    //   }
    // });
  };
  prev = () => {
    this.props.navigation.goBack()
  }
  next = () => {
    this.props.navigation.navigate('UploadAd',{
      Title:this.state.title,
      description:this.state.Description,
      Rent:this.state.rent,
      catergory:this.state.Category,
      userid:this.state.UserID,
      dateeto:this.state.date,
      Datefrom:this.state.dateto,
      Policy : this.state.privacyPolicy
    })
  }
  SelectImage = () => {
    // ImagePicker.openPicker({
    //   width: 200,
    //   height: 100,
    // }).then(image => {
    //   console.log(image);
    //   let imgSource = {
    //     uri: image.path,
    //     type: image.mime,
    //     name: image.path.replace(/^.*[\\\/]/, ''),
    //   };
    //   this.setState({image: imgSource});
    // });
  };
  componentDidMount() {
    // const user = firebase.auth().currentUser;
    // if (user) {
    //   console.log('User email: ',user.email)
    //  };
    //  firebase.database().ref('/user').on('value', (snapshot) => {
    //    let data = snapshot.val();
    //    let Items = Object.values(data);
    //    console.log(data,"This Is The State Value")
    //    Items.forEach(ls=>{
    //      if(ls.Email ===user.email){
    //        console.log(user.email,"User email")
    //        console.log(ls.Email,"Email")
    //        console.log(ls.Number,"Number")
    //        console.log(ls.Name,"Name")
    //        this.setState({Email:ls.Email,Name:ls.Name,Number:ls.Number})
    //      }
    //    });
    // });
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hour = new Date().getHours();
    var mint = new Date().getMinutes();
    var Sec = new Date().getSeconds();
    that.setState({
      //Setting the value of the date time
      date:
        date +
        '-' +
        month +
        '-' +
        year 
        // +
        // '  Time' 
    });
    this.setState({AdsID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)});
    const {
      Title,
      description,
      Rent,
      catergory,
      userid,
    } = this.props.route.params;
    this.setState({
      title: Title,
      Description: description,
      rent: Rent,
      Category: catergory,
      UserID: userid,
    });
  }
  takePhotofromCamera = () => {};
  chosePhotofromLibary = () => {};
  // submitDatatoAction = () => {
  //   console.log('date', this.state.AdsID);
  //   console.log('dateto', this.state.dateto);
  //   this.props.Add_Ads(
  //   this.state.Category,
  //   this.state.title,
  //   this.state.avatarSource,
  //   this.state.Description,
  //   this.state.rent,
  //   this.state.date,
  //   this.state.dateto,
  //   this.state.UserID,
  //   this.state.AdsID,
  //   this.state.Name,
  //   this.state.Number,
  // );
  //   this.setState({
  //     date: '',
  //     dateto: '',
  //   });
  //   Alert.alert("Ads Successfully Added")
  //    this.props.navigation.navigate('Category');
  // };
  renderItem = ({Item, index}) => {
    return (
      <View>
        <Image
          source={item.url}
          style={{
            backgroundColor: '#2F455',
            height: 150,
            width: 60,
            borderRadius: 8,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };
  render() {
    let {fileList} = this.state;
    const {photo} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style = {{flexDirection  : 'row', justifyContent : 'space-evenly', marginBottom : 30}}>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View> 
        </View>
        <View style = {{alignItems :'center', marginBottom : 30}}>
          <Text style = {{fontSize :22, alignItems : 'center'}}>Availability and Privacy Policy</Text>
        </View>
        <View style = {{padding : 10}}>
          <Text style = {{fontSize : 20, fontFamily : 'robato', marginBottom : 20}}>From</Text>
          <DatePicker
              style={{width: 370}}
              //date={this.state.dateto}
              mode="date"
              //placeholder="select date"
              format="DD-MM-YYYY"
              editable={false}
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              value={this.state.date}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  height : 34
                },
                dateInput: {
                  marginLeft: 37,
                  borderColor : '#000',
                  borderRadius : 8,
                  borderWidth  : 1.5,
                  height : 45
                }
                // ... You can check the source to find the other keys.
              }}
            
            />
            {/* <TextInput
              style={styles.input}
              value={this.state.date}
              editable={false}
            /> */}
            <Text  style = {{fontSize : 20, fontFamily : 'robato', marginTop : 20, marginBottom : 20}}>To</Text>
            <DatePicker
              style={{width: 370}}
              date={this.state.dateto}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  height : 34
                },
                dateInput: {
                  marginLeft: 37,
                  borderColor : '#000',
                  borderRadius : 8,
                  borderWidth : 1.5,
                  height : 45
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(dateto) => {this.setState({dateto})}}
        />
          <Text style = {{fontSize : 20, fontFamily : 'robato', marginTop : 20}}>Privacy Policy</Text>
          <TextInput
            placeholder = "Privacy Policy"
            onChangeText = {privacyPolicy => {this.setState({privacyPolicy})}}
            value = {this.state.description}
            style = {styles.description}
          />
        </View>
        
          
          {/* <TextInput
            placeholder="Date To"
            style={styles.input}
            value={this.state.dateto}
            onChangeText={dateto => this.setState({dateto})}
          /> */}
  
          {/* <Image
            source={this.state.avatarSource}
            style={{width: '100%', height: 300, margin: 10}}
          /> */}
         <View style = {{flexDirection : 'row',marginTop : 20, marginBottom : 22}}>
          <TouchableOpacity
            style = {styles.submitBtn}
            onPress = {this.prev}
          >
            <Text style = {styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.submitBtn1}
            onPress = {this.next}
          >
            <Text style = {styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
          {/* <TouchableOpacity
            style={styles.submit}
            onPress={this.submitDatatoAction}>
            <Text style={styles.buttonText}>Upload Post</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}
export default connect(
  null,
  {Add_Ads},
)(ChooseDate);
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 20,
    height: 50,
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
  description : {
    borderColor : '#000',
    borderWidth : 1.8,
    padding : 10,
    marginTop : 10,
    height : 120,
    borderRadius : 8
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});