import React, {Component} from 'react';
import { Platform,Button,TouchableOpacity, TextInput,Image, StatusBar,Text, StyleSheet, View } from 'react-native';
//import LoginScreen from './LoginScreen';
//import Inbox from './Inbox';
import * as firebase from 'firebase';
import Articles from '../components/Articles';
import AdsMenu from './AdsMenu';
// import {postAdss} from '../actions';
import {Add_Ads} from '../actions/adsAction';
import {connect} from 'react-redux';
//import { NavigationContext } from '@react-navigation/native';
class PostAdScreen extends Component {
  state = {
    title : "",
    description: "",
    rent : "",
    category : "",
    userID:'',
    textLength : 0
  }
  componentDidMount(){
    const user = firebase.auth().currentUser;
if (user) {
 console.log('User email: ', user.uid)
 this.setState({userID:user.uid})
};
    const {catergory} = this.props.route.params;
    this.setState({category:catergory})
  }
  submit = () => {
    //alert=("submilte data")
  //  if(this.state.title != ''){
    this.props.navigation.navigate('ChooseDate',{
      Title:this.state.title,
      description:this.state.description,
      Rent:this.state.rent,
      catergory:this.state.category,
      userid:this.state.userID,
    });
  
  
    console.log("Data is",this.state.title,this.state.description,this.state.rent);
  }
  back = () => {
    this.props.navigation.goBack()
  }
  seeAds = () => {
    this.props.navigation.navigate('AdsMenu')
  }

  render(){
    // const { catergory } = route.params;
    
    return(
      <View style = {styles.container}>
        <View style = {{flexDirection  : 'row', justifyContent : 'space-evenly', marginBottom : 40}}>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View> 
        </View>
        {/* <Text style = {{fontSize : 18}}>{this.state.category}</Text> */}
        <Text style ={styles.topText}>Listing Details</Text>
        <View>
          <TextInput
            placeholder = "Title"
            onChangeText = {title => this.setState({title})
                                     
          }
            style = {styles.title}
            value = {this.state.title}
          />
          <View style = {{justifyContent : 'flex-end', marginTop : 5, alignItems : 'flex-end'}}>
            <Text>{this.state.textLength} / 150</Text>
          </View>
          <TextInput
            placeholder = "Description"
            onChangeText = {description => this.setState({description})}
            value = {this.state.description}
            style = {styles.description}
          />
          <View style = {{justifyContent : 'flex-end', marginTop : 5, alignItems : 'flex-end'}}>
            <Text>0 / 500</Text>
          </View>
          <TextInput
            placeholder = "Rent"
            onChangeText = {rent => this.setState({rent})}
            style = {styles.title}
            value = {this.state.rent}
            keyboardType = 'numeric'
          />
        </View>
        <View style = {{flexDirection : 'row',marginTop : 70}}>
        <TouchableOpacity
          style = {styles.submitBtn}
          onPress = {this.back}
        >
            {/* <Image source = {require('../images/backk.png')} style = {{backgroundColor : 'green', width : 28, height : 28}}></Image> */}
              <Text style = {styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.submitBtn1}
          onPress = {this.submit}
        > 
          {/* <Image source = {require('../images/next.png')} style = {{backgroundColor : 'green', width : 28, height : 28}}></Image>
            */}
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style = {styles.submitBtn}
          onPress = {this.seeAds}
        >r
          <Text style = {styles.buttonText}>Go to Ads</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems : 'center',
    //justifyContent : 'center',
    padding : 10
  },
  title : {
    borderColor : '#000',
    borderWidth : 2,
    marginTop : 20,
    height : 60,
    borderRadius : 8
  },
  description : {
    borderColor : '#000',
    borderWidth : 2,
    padding : 10,
    marginTop : 20,
    height : 120,
    borderRadius : 8
  },
  submitBtn : {
    backgroundColor:'green',
    padding:15,
    //borderRadius:8,
    marginTop : 20,
    width : '50%',
    borderRightWidth : 0.5,
    borderColor : '#fff',
    borderTopLeftRadius : 8,
    borderBottomLeftRadius : 8
  },
  submitBtn1 : {
    backgroundColor:'green',
    padding:15,
    //borderRadius:8,
    marginTop : 20,
    width : '50%',
    //justifyContent : 'flex-end'
    borderLeftWidth : 0.5,
    borderColor : '#fff',
    borderTopRightRadius : 8,
    borderBottomRightRadius : 8
  },
  topText :{
    textAlign:'center',
        color:'#000',
        fontWeight:'600',
        fontSize:22
  },
   buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    },
});

export default connect(null, {Add_Ads})(PostAdScreen);
