import React, {Component} from 'react';
import { Text,TextInput, View,ScrollView, Image, Button, StyleSheet,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AdsMenu from './AdsMenu';
import Inbox from './Inbox';
import firebase from 'firebase';
import Test from './test';
//import Articles from '../components/Articles';
import PostAdScreen from './PostAd';
import ChooseDate from './chooseDate';
const logo = require('../images/car1.jpg');
import MyAds from './myAds';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Edit from '../components/EditAd';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostDetaile from './Explore';
import EditAds from './EditAds'
import UploadAd from './UploadAd'
import myAdDetails from './myAdDetails'
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class SettingsScreen extends Component{
render(){
  return (
    <Stack4.Navigator
    initialRouteName="MyAds"
    screenOptions={{ gestureEnabled: false }}
    >
      <Stack4.Screen
      name="MyAds"
      component={MyAds}
      options={{ title: 'My Ads' }}
      />
      <Stack4.Screen
      name="myAdDetails"
      component={myAdDetails}
      options={{ title: 'Ad Details' }}
      />
      <Stack4.Screen
      name="EditAds"
      component={EditAds}
      options={{ title: 'EditAds' }}
      />
      </Stack4.Navigator>
  );
}
}
class Category extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View  style={{ flex: 1, backgroundColor : '#fff', padding : 10 }}>
        <View style = {{flexDirection  : 'row', justifyContent : 'space-evenly', marginBottom : 40}}>
          <View style = {{backgroundColor : 'green', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View>
          <View style = {{backgroundColor : '#ccc', width : 95,height : 7}}></View>
        </View>
        <View style = {{marginBottom : 60, alignItems : 'center'}}>
          <Text style = {{fontSize : 22}}> Select Category</Text>
        </View>
        <View style = {{flexDirection : 'row',marginBottom : 35, justifyContent : 'space-around'}}>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Electronics',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/electronics.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Electronics</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Vehicle / AutoMobile',
                }); 
                }}
                >
              <View style = {{alignItems : 'center',}}>
                <Image source={require('../images/vehicle.png')} style = {{width: 60, height: 50, }} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Vehicle/AutoMobile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Furniture',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/furniture.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Furniture</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View style = {{flexDirection : 'row',marginBottom : 35, justifyContent : 'space-around', alignItems : 'center'}}>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Dresses',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/dress.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Dresses</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Camera/Studio',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/cam.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Camera/Studio</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Jewellery',
                }); 
                }}
                >
              <View style = {{alignItems : 'center',}}>
                <Image source={require('../images/jewellery.jpg')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Jewellery</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View style = {{flexDirection : 'row', marginLeft : 5, justifyContent : 'space-around'}}>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Property',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/property.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Property</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Books/Games',
                });      
                
                }}
                style = {{marginLeft : 17,}}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/books.jpg')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Books / Games</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('PostAdScreen', {
                    catergory : 'Decorations',
                }); 
                }}
                >
              <View style = {{alignItems : 'center'}}>
                <Image source={require('../images/decor.png')} style = {{width: 60, height: 50}} />
                <Text style = {{marginTop : 5, fontSize : 16}}>Decorations</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }  
}

function TestScreen(){
  return(
      <Stack.Navigator
      initialRouteName="Test"
      screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown : false }}
        />
        <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
        />
    </Stack.Navigator>

    )
}
function HomeScreen() {
  return (
    <Stack3.Navigator
      initialRouteName="AdsMenu"
      screenOptions={{ gestureEnabled: false }}
      >
        <Stack3.Screen
        name="AdsMenu"
        component={AdsMenu}
        options={{ headerShown : false }}
        />
        <Stack3.Screen
        name="PostDetaile"
        component={PostDetaile}
        options={{ title: 'Ad Details' }}
        />
      </Stack3.Navigator>
  )
}

// function HomeScreen(){
//   return(
//     <Stack3.Screen
//     name="PostDetaile"
//     component={PostDetaile}
//     options={{ title: 'PostDetaile' }}
//   />
//   )
// }
function Rent(){
  return(
      <Stack2.Navigator
      initialRouteName="Category"
      //screenOptions={{ gestureEnabled: false }}
      screenOptions={{
            headerShown: false
        }}
      >
        <Stack2.Screen
        name="Category"
        component={Category}
        //options={{ title: 'Choose Category' }}
        
        />
        <Stack2.Screen
        name="PostAdScreen"
        component={PostAdScreen}
        options={{ title: 'Product Details' }}
        />
        <Stack2.Screen
        name="ChooseDate"
        component={ChooseDate}
        options={{ title: 'Available Dates' }}
        />
        <Stack2.Screen
        name="UploadAd"
        component={UploadAd}
        options={{ title: 'upload ad' }}
        />
        <Stack2.Screen
        name="AdsMenu"
        component={AdsMenu}
        options={{ title: 'AdsMenu' }}
        />
        {/* <Stack2.Screen
        name="PostDetail"
        component={PostDetaile}
        options={{title:'PostDetaile'}}
        /> */}
        <Stack2.Screen
        name="Edit"
        component={Edit}
        options={{ title: 'Edit Ad' }}
        />
    </Stack2.Navigator>

    )
}

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="green"
        inactiveColor="green"
        barStyle={{ 
          backgroundColor: '#D0D0D0',
          padding : 2        
        }}
        tabBarOptions={{
          //activeColor="green",
          activeTintColor: 'green',
        }}
      
      >
        <Tab.Screen name="Home"
            component={HomeScreen}
            options={{
            tabBarLabel:"Home Page",
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../images/home.png')} style = {{width: 25, height: 25}} />
            )
            // tabBarIcon: ({focused}) => (
            //   <MaterialCommunityIcons name="home" color={'blue'} size={25} />
            // ),
          }}
        />
        <Tab.Screen name="Inbox" component={Inbox}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../images/chat.png')} style = {{width: 25, height: 25}} />
            )
          }}
        />
        <Tab.Screen name="Rent" component={Rent}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../images/gcamera.png')} style = {{width: 29, height: 29}} />
            )

          }}
      
        />
        <Tab.Screen name="My Ads" component={SettingsScreen}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/ads.png')} style = {{width: 26, height: 26}} />
              )
            }}
        />
        <Tab.Screen name="Profile" component={TestScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../images/profile.png')} style = {{width: 25, height: 25}} />
            )
          }}
      />
        
      </Tab.Navigator>
  );
      }

      const styles=StyleSheet.create({

        container : {
            //flex : 1,
            backgroundColor : '#fff',
            padding : 5,
          },
  
        field:{
          padding:4,
          alignContent:'center',
          borderRadius: 6,
          padding: 10,
          shadowColor: '#000000',
          shadowOffset: {
            width: 2,
            height: 2
          },
          //shadowRadius: 5,
          shadowOpacity: 2.0,
          elevation: 5,
          marginBottom : 6
        },
        search : {
          borderBottomWidth : 2,
          borderBottomColor : "#000",
        },
  })
  
  //       text:{
  //       alignItems:'center',
  //       padding:10,
        
        
  //       },
  //       Image:{
  //         padding:14,
  //         width:400,
  //         borderRadius:54,
  //         alignItems:'flex-end',
  
  //       },
        
  //       logo:{
  //         width: 100,
  //         height: 100,
  // },
  // input: {
  //   width: 350,
  //   height: 55,
  //   margin: 10,
  //   padding: 8,
  //   borderRadius: 14,
  //   fontSize: 18,
  //   fontWeight: '500',
  //   borderBottomWidth: 1,
  // },  
  // contain: {
  //   flex: 1,
  // }, 
  // MainContainer :{
  //   flex:1,
  //   justifyContent: 'center',
  //   margin:5
      
  //   },
  //   TextInputStyleClass:{
  
  //     textAlign: 'center',
  //     height: 50,
  //     borderWidth: 2,
  //     borderColor: '#9E9E9E',
  //     borderRadius: 20 ,
  //     backgroundColor : "#FFFFFF",
  //     height: 150
       
  //     },
  //     lastBtn:{
  //       flex:1,
  //       flexDirection:'row',
  //       width:440,
  //       borderRadius:54,
  //      justifyContent:'space-around'
  //            },
             
  //            lastBt:{
  //             flex:1,
  //             flexDirection:'row',
  //             width:440,
  //             borderRadius:54,
  //            justifyContent:'space-around',
  //            padding:30
  //                  }, 
  //                  profileImgContainer: {
  //                   marginLeft: 8,
  //                   height: 80,
  //                   width: 80,
  //                   borderRadius: 40,
  //                 },
  //                 profileImg: {
  //                   height: 80,
  //                   width: 80,
  //                   borderRadius: 40,
  //                 alignItems:'flex-end'
  //                 },
      //  })
// }


// class HomeScreen extends Component {

//   render(){
  
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Button
//             color="#841584"
//             title="Show inbox"
//             //style={styles.loginButton}
//             onPress={() => {
//               //this.loginUser(this.state.email, this.state.password)
//               this.props.navigation.navigate('Inbox')
//             //this.login(this.state.emailId, this.state.password);
//             }}
//         />  
//     </View>
//   );
// }
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!!!!!!!!!!!!!!!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="AdsMenu" component={AdsMenu} />
//       <Tab.Screen name="Inbox" component={Inbox} />
//     </Tab.Navigator>
//   );
// }

// export default function Home() {
//   return (
//       <MyTabs />
//   );
// }

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createAppContainer} from '@react-navigation/native';

// function HomeScreen() {
//     return (
//       <ScrollView style = {styles.container}>
            
//         <View style={styles.field}>
//             <TextInput style = {styles.search} placeholder="What are you looking for.."/>
//         </View>
             
//      </ScrollView>
//     );
//   }
  
//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }


// const BottomTab = createBottomTabNavigator({
//   Home : {
//     screen : HomeScreen
//   },
//   Settings : {
//     screen : SettingsScreen
//   }

// })

// export default Home = createAppContainer(BottomTab)


// import * as React from 'react';
// import { View, TextInput,Modal,StyleSheet,Image,Text,} from 'react-native';
// import { CheckBox,Button } from 'react-native-elements'
// import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
// import { NavigationContext } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import ImagePicker from 'react-native-image-picker';
// import Inbox from './Inbox';
// import AdsMenu from './AdsMenu';

// const options={
// title:'my pic app',
// takePhotoButtonTitle:'Take photo With your Camra',
// chooseFromLibraryButtonTitle:'Choose photo from Gallary ', 

// }



// const logo = require('../images/logo.jpg');

// function HomeScreen() {
//   return (
//     <ScrollView style = {styles.container}>
          
//       <View style={styles.field}>
//           <TextInput style = {styles.search} placeholder="What are you looking for.."/>
//       </View>
           
//    </ScrollView>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createMaterialBottomTabNavigator();

// export default function Home() {
//   return (
//       <Tab.Navigator
//         initialRouteName="Home"
//         activeColor="#000"
//         inactiveColor="#000"
//         barStyle={{ 
//           backgroundColor: '#D0D0D0',
//           padding : 2        
//         }}
      
//       >
//         <Tab.Screen name="Home"
//             component={HomeScreen}
//             options={{
//               tabBarLabel: 'Home',
//               tabBarIcon: ({ color }) => (
//                 <Ionicon name="md-home" color={color} size={26} />
//               ),
//             }}    
//         />
//         <Tab.Screen name="Settings" component={SettingsScreen}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color }) => (
//               <Ionicon name="md-home" color={color} size={26} />
//             ),
//           }}
//         />
        
//       </Tab.Navigator>
//   );
// }
// // class Home extends React.Component{
    
// //   static contextType = NavigationContext; 

// //   render(){  

// //     const navigation = this.context;
    
// //     return(
      
// //         <ScrollView style = {styles.container}>
          
// //             <View style={styles.field}>
// //               <TextInput style = {styles.search} placeholder="What are you looking for.."/>
// //             </View>
           
// //         </ScrollView>
// //     )
// //   }
// // }

// const styles=StyleSheet.create({

//       container : {
//           //flex : 1,
//           backgroundColor : '#fff',
//           padding : 5,
//         },

//       field:{
//         padding:4,
//         alignContent:'center',
//         borderRadius: 6,
//         padding: 10,
//         shadowColor: '#000000',
//         shadowOffset: {
//           width: 2,
//           height: 2
//         },
//         //shadowRadius: 5,
//         shadowOpacity: 2.0,
//         elevation: 5,
//         marginBottom : 6
//       },
//       search : {
//         borderBottomWidth : 2,
//         borderBottomColor : "#000",
//       },
// })

//       text:{
//       alignItems:'center',
//       padding:10,
      
      
//       },
//       Image:{
//         padding:14,
//         width:400,
//         borderRadius:54,
//         alignItems:'flex-end',

//       },
      
//       logo:{
//         width: 100,
//         height: 100,
// },
// input: {
//   width: 350,
//   height: 55,
//   margin: 10,
//   padding: 8,
//   borderRadius: 14,
//   fontSize: 18,
//   fontWeight: '500',
//   borderBottomWidth: 1,
// },  
// contain: {
//   flex: 1,
// }, 
// MainContainer :{
//   flex:1,
//   justifyContent: 'center',
//   margin:5
    
//   },
//   TextInputStyleClass:{

//     textAlign: 'center',
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#9E9E9E',
//     borderRadius: 20 ,
//     backgroundColor : "#FFFFFF",
//     height: 150
     
//     },
//     lastBtn:{
//       flex:1,
//       flexDirection:'row',
//       width:440,
//       borderRadius:54,
//      justifyContent:'space-around'
//            },
           
//            lastBt:{
//             flex:1,
//             flexDirection:'row',
//             width:440,
//             borderRadius:54,
//            justifyContent:'space-around',
//            padding:30
//                  }, 
//                  profileImgContainer: {
//                   marginLeft: 8,
//                   height: 80,
//                   width: 80,
//                   borderRadius: 40,
//                 },
//                 profileImg: {
//                   height: 80,
//                   width: 80,
//                   borderRadius: 40,
//                 alignItems:'flex-end'
//                 },
    //  })
//  //export default Home;