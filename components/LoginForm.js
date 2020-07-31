//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';

// create a component
const LoginForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.emailAndPassword}>
                <EmailAndPassword/>
            </View >
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor  : '#fff'
       
       
    },

    logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginBottom : -60,
        //borderWidth : 1
    },
    emailAndPassword:{
        flex:2
    }
});

//make this component available to the app
export default LoginForm;
