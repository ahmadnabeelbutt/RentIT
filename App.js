//import liraries
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginForm from './components/LoginForm';
import Articles from './components/Articles';
import BG from './images/bgk.png'
import Loading from './components/Loading'
import Home from './screens/Home';
import SignupScreen from './screens/SignupScreen';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers'
import LogNav from './Login/LogNav';
import store from './Store/store';
// import * as firebase from 'firebase';
// import 'firebase/firestore';

// const db = firebase.firestore();
// create a component
// var firebaseConfig = {
//   apiKey: "AIzaSyDDCAZe40QRxoPVXvKNMDUw7wBDOMvy-2U",
//   authDomain: "rentit-6060c.firebaseapp.com",
//   databaseURL: "https://rentit-6060c.firebaseio.com",
//   projectId: "rentit-6060c",
//   storageBucket: "rentit-6060c.appspot.com",
//   messagingSenderId: "495672359697",
//   appId: "1:495672359697:web:5146c5f8ea6b6633a6eab0",
//   measurementId: "G-L673V4FK4K"
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

class App extends Component{
 
  state={
    loggedIn:null
  }
  
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBJjbhTdFrieUDT93ISVuaDCaAxuj_3AlA",
      authDomain: "rentit-8bdb5.firebaseapp.com",
      databaseURL: "https://rentit-8bdb5.firebaseio.com",
      projectId: "rentit-8bdb5",
      storageBucket: "rentit-8bdb5.appspot.com",
      messagingSenderId: "874771960007",
      appId: "1:874771960007:web:62754ec042c980c2172ee2",
      measurementId: "G-83NBSDKSX9"
    };
    if(!firebase.app.length){
      firebase.initializeApp(firebaseConfig)
      // let firestore = firebase.firestore();
    }
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return  <LoginForm/>
                
      case true:
        return  <Home/>
                
           default:
             return <Loading/>


    }
  }

  render(){

    // const rstate =  createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <NavigationContainer>
          <View style={styles.container}>
            {this.renderContent()}
          </View>
        </NavigationContainer> 
      </Provider>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ImageBackground } from 'react-native';
// import AdsMenu from './screens/AdsMenu';
// class App extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <View>
//           <AdsMenu/>
//       </View>
//      );
//   }
// }
 
// export default App;
