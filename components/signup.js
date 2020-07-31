//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import FBSDKimport, { LoginManager } from 'react-native-fbsdk';
// create a component
class Signup extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    signUpUser = () => {

        try {
  
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          alert('User Created!');
        }
        catch(error) {
          console.log(error.toString());
        }
  
      }


    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })

    
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

_fbAuth(){
    // LoginManager.logInWithPermissions(['Public_profile']).then(function(result){
    //     if(result.isCancelled){
    //         console.log("login was canceled");
    //     }else{
    //         console.log("loginw was suceesfully"+result.grantedPermissions.toString());
    //     }
    // },function(error){
    //     console.log("An error is occcure"+error); 
    // }
    // )
}
    render() {
        return (
            <View style={styles.container}>
                 <TextInput
                    placeholder="email" 
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                     />

                 <TextInput 
                    placeholder="password" 
                    style={styles.input}
                    secureTextEntry
                     value={this.state.password}
                     onChangeText={password => this.setState({password})}
                     />

                

                 <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress} >
                     <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
                 <Text style = {{justifyContent : 'center',alignItems : 'center', marginBottom : 5, marginTop : 50}}>Don't Have an Account?</Text>
                 <View style={{flex: 1, flexDirection: 'column'}}>
        {/* <View style={{width: "80%", height: 50, backgroundColor: 'skyblue',marginLeft:"10%",marginRight:"10%",borderRadius:10}}>
            <TouchableOpacity
                onPress={this._fbAuth()}
            >
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'blue'}}>Login with FaceBook</Text>
            </TouchableOpacity>
        </View>       */}
        {/* <View style={{width: "80%", height: 50, backgroundColor: 'skyblue',marginLeft:"10%",marginRight:"10%",borderRadius:10,marginTop:20}}>
        <TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'gray'}}>Login with Google</Text>
        </TouchableOpacity>
        </View> */}
        <View style={{width: "80%", height: 50, backgroundColor: 'skyblue',marginLeft:"10%",marginRight:"10%",borderRadius:10,marginTop:20}}>
        <TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'gray'}}>Sign-up</Text>
        </TouchableOpacity>
        </View>
      </View>

                 <Text style={styles.errorText} >
                         {this.state.error}
                     </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
      
     
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:10

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8
    },
    signupbtn : {
        backgroundColor:'red',
        padding:15,
        borderRadius:8,
        marginTop : 10
    }
});

//make this component available to the app
export default Signup;
