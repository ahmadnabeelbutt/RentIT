//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component

const logo = require('../images/logo.jpg');

const Logo = () => {
    return (
        <View>
            <Image source={logo} style={{height:150, width:230}} />
        </View>
    );
};


//make this component available to the app
export default Logo;
