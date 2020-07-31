import React, {Component, Children} from 'react';
import {Alert, Platform,Button,TouchableOpacity, TextInput, StatusBar,Text, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import Articles from '../components/Articles';
import AdsMenu from './AdsMenu';
import {Add_Ads} from '../actions/adsAction';
import {connect} from 'react-redux';
class EditValue extends Component {
  state = {
    title : "",
    description: "",
    rent : "",
    category : "",
    userID:'',
    Dateto:'',
    Datefrom:'',
    PostID:'',
    avatarSource:null,
    filterData:[],
    userNumber:'',
    userName:'',
  }
  componentDidMount(){
    const {ID,Catagoray,pic,Name,number} = this.props.route.params;
    console.log("name",Name,"Number",Name)
    this.setState({postID:ID,category:Catagoray,avatarSource:pic,userName:Name,userNumber:number,});
    const user = firebase.auth().currentUser;
      if (user) {
        console.log('User email: ', user.uid)
        this.setState({userID:user.uid})
      };
  }
  submit = () => {
    console.log("ads id befote adding",this.state.postID);
    console.log("userName",this.state.userName);
    console.log("number",this.state.userNumber)
    firebase.database().ref('ads').child(this.state.postID).update(
      {
        catergory:this.state.category,
        title:this.state.title,
        // avatarSource:this.state.avatarSource,
        description:this.state.description,
        rent:this.state.rent,
        dateto:this.state.Dateto,
        datefrom:this.state.Datefrom,
        userid:this.state.userID,
        // Number:this.state.userNumber,
        // Name:this.state.userName,
          }).then(()=>{
            console.log("insert");
          }).catch((error)=>{
            console.log(error);
        })
        this.state.filterData=this.state.filterData.filter(ls=>ls.ads_Id!==id);
        Alert.alert("Item is Edited");
        this.props.navigation.navigate('MyAds'); 
      }
  seeAds = () => {
    this.props.navigation.navigate('AdsMenu')
  }
  render(){
    // const { catergory } = route.params; 
    return(
      <View style = {styles.container}>
        <View>
          <TextInput
            placeholder = "Title"
            onChangeText = {title => this.setState({title})}
            style = {styles.title}
            value = {this.state.title}
          />
          <TextInput
            placeholder = "Ad Description"
            onChangeText = {description => this.setState({description})}
            value = {this.state.description}
            style = {styles.description}
          />
          <TextInput
            placeholder = "Rent"
            onChangeText = {rent => this.setState({rent})}
            style = {styles.title}
            value = {this.state.rent}
          />
          <TextInput
            placeholder = "Date to"
            onChangeText = {Dateto => this.setState({Dateto})}
            style = {styles.title}
            value = {this.state.Dateto}
          />
          <TextInput
            placeholder = "Date from"
            onChangeText = {Datefrom => this.setState({Datefrom})}
            style = {styles.title}
            value = {this.state.Datefrom}
          />
          
        </View>
        <TouchableOpacity
          style = {styles.submitBtn}
          onPress = {this.submit}
        >
          <Text style = {styles.buttonText}>Update value</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems : 'center',
    justifyContent : 'center',
    padding : 20,
   
  },
  title : {
    borderColor : '#000',
    borderWidth : 2,
    marginTop : 20,
    height : 50,
    borderRadius : 8
  },
  description : {
    borderColor : '#000',
    borderWidth : 2,
    padding : 10,
    marginTop : 20,
    height : 100,
    borderRadius : 8
  },
  submitBtn : {
    backgroundColor:'green',
    padding:15,
    borderRadius:8,
    marginTop : 20
  },
  topText :{
    textAlign:'center',
    color:'#000',
    fontWeight:'bold',
    fontSize:15
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:15
  },
});
export default connect(null, {Add_Ads})(EditValue);
