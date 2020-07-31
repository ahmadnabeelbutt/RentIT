import React, {Component} from 'react';
import { Platform,Button, StatusBar,Text, StyleSheet, View,ScrollView,FlatList,Image, TouchableOpacity, Linking } from 'react-native';

import Communications from 'react-native-communications';

const logo = require('../images/car1.jpg');
class Explore extends Component {
  state={
    phone : '',
  }
  // makeCall = (number) =>{
  //   console.log("Phone number is",this.state.phone);
  //   // let phone = number;
  //   Linking.openURL('tel:${',this.state.phone, '}')
  // }
  componentDidMount() {
    const {Title,Catagoray,Description,Rent,Dateto,Datefrom,PP,number,Name,pic} = this.props.route.params; 
    this.setState({phone:number})
      }
  render () {
    const {Title,Catagoray,Description,Rent,Dateto,Datefrom,PP,number,Name,pic} = this.props.route.params; 
    return (
        <ScrollView>
          <View style = {styles.container}>
            <View style = {{padding : 1, alignItems : 'center', justifyContent : 'center'}}>
              <Image style = {{flex : 1, width : '100%', height : 320}} source = {pic}></Image>
            </View>
            <View style = {{padding : 20, borderBottomColor : 'grey', borderBottomWidth : 0.8}}>
              <Text>{Catagoray}</Text>
              <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop : 10}}>
                <Text style = {{fontWeight : 'bold', fontSize : 20}}>{Title}</Text>
                <Text style = {{fontSize : 20}}>PKR {Rent} per day</Text>
              </View>
              <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop : 10}}>
                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                  <Image source = {require('../images/loc.png')} style = {{width : 25, height : 25}}></Image>
                  <Text style = {{fontSize : 15}}>Lahore</Text>
                </View>
                <Text style = {{fontSize : 15}}>Posted 1 day ago</Text>
              </View>
            </View>
            <View style = {{padding : 20, borderBottomColor : 'grey', borderBottomWidth : 0.8, justifyContent : 'center', alignItems : 'center'}}>
              <Text style = {{fontSize : 22, fontWeight : '650'}}>Availability</Text>
              <View style = {{flexDirection : 'row', marginTop : 10}}>
                <Text style = {{fontSize : 16}}>{Dateto}</Text>
                <Text style = {{fontWeight : 'bold', fontSize : 17, marginLeft : 5, marginRight : 5}}> To </Text>
                <Text style = {{fontSize : 16}}>{Datefrom}</Text>
              </View>
              
            </View>
            <View style = {{padding : 20, borderBottomColor : 'grey', borderBottomWidth : 0.8,}}>
              <Text style = {{fontSize : 20, fontWeight : 'bold'}}>Description</Text>
                <Text style  = {{marginTop : 15, fontSize : 16}}>{Description}</Text>
            </View>
            <View style = {{padding : 20, borderBottomColor : 'grey', borderBottomWidth : 0.8,}}>
              <Text style = {{fontSize : 20, fontWeight : 'bold'}}>Privacy Policy</Text>
              <Text style  = {{marginTop : 15, fontSize : 16}}>{PP}</Text>
            </View>
            <View style = {{padding : 20, borderBottomColor : 'grey', borderBottomWidth : 0.8,}}>
              <Text style = {{fontSize : 20, fontWeight : 'bold'}}>Owner Profile</Text>
              <Text style  = {{marginTop : 15, fontSize : 16}}>{Name}</Text> 
              {/* <Text style  = {{marginTop : 15, fontSize : 16}}>{number}</Text> */}
              <View style = {{flexDirection : 'row', marginTop : 20}}>
                <TouchableOpacity onPress = {() => Communications.text(number, 'Test Text Here')} style = {{borderTopLeftRadius : 8,borderBottomLeftRadius : 8, width : '50%', padding : 10, backgroundColor : 'green'}}>
                  <View style = {{flexDirection : 'row',alignItems : 'center',justifyContent : 'space-around'}}>
                    <Image style = {{width : 26, height : 26}}  source = {require('../images/sms.png')}></Image>
                    <Text style = {{fontSize : 16, color : '#fff'}}>SMS</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => Communications.phonecall(number, true)} style = {{borderTopRightRadius : 8,borderBottomRightRadius : 8, width : '50%', padding : 10, backgroundColor : 'green'}}>
                  <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around'}}>
                    <Text style = {{fontSize : 16, color : '#fff'}}>Call</Text>
                    <Image style = {{width : 30, height : 30}} source = {require('../images/call1.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
        );
        }
        }
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },
});
export default Explore