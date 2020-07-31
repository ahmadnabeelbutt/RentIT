//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {editBlog} from '../actions'
import {connect} from 'react-redux'

import { NavigationContext } from '@react-navigation/native';


const logo = require('../images/logo.jpg');

// create a component
class Edit extends Component {
  
    static contextType = NavigationContext;
    navigation = this.context;
    

    state={

        // title : route.params,
        // description : route.params,
        // key : route.params,

      title:this.props.navigation.state.params.title,
      description:this.props.navigation.state.params.description,
      key:this.props.navigation.state.params.key
  }

  submit = () =>{
    
    this.props.editBlog(this.state.title, this.state.description, this.state.key);

    this.setState({
        title:"",
        description:"",
       key:""
    })

    this.props.navigation.navigate("AdsMenu")

  }

    render() {
        

        return (
    <View style={styles.container}>
        <Text>Post</Text>
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="title" onChangeText={title => this.setState({title})} value={this.state.title} />
        <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="content" onChangeText={content => this.setState({description})} value={this.state.description} />
     <Button title="Submit" onPress={this.submit} />
    
    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {editBlog})(Edit);
