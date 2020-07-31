import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Alert } from 'react-native';
//import FBSDKimport, { LoginManager } from 'react-native-fbsdk';
// create a component
import image from '../images/std1.jpg'
class EmailAndPassword extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false,
        Signupemail:'',
        Signuppassword:'',
        Signuperror:'',
        Signuploading:false,
        signupform:false,
        Number:'',
        Name:'',
        avatarSource: image,
    }

    signUpUser = () => {
        try {
          firebase.auth().createUserWithEmailAndPassword(this.state.Signupemail, this.state.Signuppassword)
          Alert.alert('User Created go login Page and Login');
        }
        catch(error) {
          console.log(error.toString());
        }
        // firebase.database().ref("user").child('loginuserdata').push({
        //     Name:this.state.Name,
        //     Email:this.state.Signupemail,
        //     Number:this.state.Number,
        // }).then(()=>{
        //     console.log("Inserted");
        //     this.setState({signupform:false});
        // }).catch((error)=>{
        //     console.log(error);
        // })
        let userid=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        firebase.database().ref('user').child('loginuserdata').push({
            UserID:userid,
            Name:this.state.Name,
            Email:this.state.Signupemail,
            Number:this.state.Number,
            Pic:this.state.avatarSource,
            })
         .then(response => {
            console.log("Responce",response);
        })
                .catch(error => {
                    console.log(error);
                  });
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
goLogin=()=>{
    console.log("go login is called");
    this.setState({signupform:false});
}
goSignup=()=>{
    console.log("go Singup is called");
    this.setState({signupform:true});
}
    render() {
        return (
            <View>
                {
                    this.state.signupform===true?
                    <View style={styles.container}>
                <TextInput
                    placeholder="Name" 
                    style={styles.input3} 
                    value={this.state.Name}
                    onChangeText={Name=> this.setState({Name})}
                     />
                 <TextInput
                    placeholder="Email" 
                    style={styles.input3} 
                    value={this.state.Signupemail}
                    onChangeText={Signupemail=> this.setState({Signupemail})}
                     />

                 <TextInput 
                    placeholder="Mobile Number" 
                    style={styles.input3}
                    //secureTextEntry
                    keyboardType = 'numeric'
                     value={this.Number}
                     onChangeText={Number => this.setState({Number})}
                     />
                <TextInput 
                    placeholder="Password" 
                    style={styles.input3}
                    secureTextEntry
                     value={this.state.Signuppassword}
                     onChangeText={Signuppassword => this.setState({Signuppassword})}
                     />
                

                 <TouchableOpacity style={styles.buttonContainer2} onPress={this.signUpUser} >
                     <Text style={styles.buttonText}>Register</Text>
                 </TouchableOpacity>
                 <Text style = {{justifyContent : 'center',alignItems : 'center', marginBottom : 5, marginTop : 50}}>Have an Account?</Text>
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
        <View style={{width: "100%", height: 50, backgroundColor: '#3B3B98',borderRadius:10,marginTop:10}}>
        <TouchableOpacity
        onPress={this.goLogin}
        >
            <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',marginTop:10,color:'#fff'}}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>

                 <Text style={styles.errorText}>
                         {this.state.error}
                     </Text>
                </View>
                    :<View style={styles.container}>
                    <TextInput
                       placeholder="Email" 
                       style={styles.input1} 
                       value={this.state.email}
                       onChangeText={email=> this.setState({email})}
                        />
   
                    <TextInput 
                       placeholder="Password" 
                       style={styles.input2}
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
           <View style={{width: "100%", height: 50, backgroundColor: 'red',borderRadius:10,marginTop:20}}>
           <TouchableOpacity
           onPress={this.goSignup}
           >
               <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'#fff'}}>Sign Up</Text>
           </TouchableOpacity>
           </View>
         </View>
   
                    <Text style={styles.errorText} >
                            {this.state.error}
                        </Text>
               </View>
                }
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
        //borderRadius:5,
        fontSize:15,
        borderBottomWidth : 1
    },
    input1:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:35,
        //borderRadius:5,
        fontSize:15,
        borderBottomWidth : 1
    },
    input2:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:45,
        //borderRadius:5,
        fontSize:15,
        borderBottomWidth : 1
        
    },
    input3:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginTop : 0,
        marginBottom:25,
        //borderRadius:5,
        fontSize:15,
        borderBottomWidth : 1
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
        fontSize:22,
        marginBottom:40,
        marginTop : -15
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:25,
        borderRadius:8
    },
    buttonContainer2:{
        backgroundColor:'red',
        padding:25,
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
export default EmailAndPassword;

