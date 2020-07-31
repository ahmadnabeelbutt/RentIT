import React, {Component} from 'react';
import { Text,TextInput, View,ScrollView, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';
import SignupScreen from '../screens/SignupScreen';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Edit from '../components/EditAd';

const SStack = createStackNavigator();

export default function LogNav() {
    return (
        
        <SStack.Navigator>
                    <SStack.screen
                        name = 'Login'
                        component = {LoginForm}
                    />
                    <SStack.screen
                        name = 'Sign Up'
                        component = {SignupScreen}
                    />
                </SStack.Navigator>
    )
}
