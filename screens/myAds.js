import React, {Component} from 'react';
import {Alert, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import ItemComponent from '../src/components/ItemComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
const logo = require('../images/car1.jpg');
import { NavigationContext } from '@react-navigation/native';
import { lessOrEq, set } from 'react-native-reanimated';
class MyAds extends Component {

  state = {
    userID:"",
    items : [],
    filterItems:[],
    dataSource:[],
    filterData:[],
    deleteid:'',
    editid:'',
}
render() {
  console.log("items in first render",items);   
  return (
      <View style={styles.container}>
          {
           
          }
         
      </View>
  );
}
componentDidMount() {
// this.setState({filterData:[]})
const user = firebase.auth().currentUser;

firebase.database().ref('/ads').on('value', (snapshot) => {
    let data = snapshot.val();
    let Items = Object.values(data);
    // console.log(Items,"This Items From The DataBase")
    this.setState({items:Items})
    // this.setState({filterData:this.state.filterData.filter(ls=>ls.ads_Id!==id)})
    //console.log(Items,"This Is The State Value")
    Items.forEach(ls=>{
      if(ls.userid ===user.uid){
        console.log(user.uid,"User Id")
        console.log(ls.userid,"Items UserId")
       this.state.filterData.push(ls);
       
      }
    });
    // console.log(Items,"This Items From The DataBase")
    console.log(this.state.filterData,"This Is User Post Data")
 });
 if(this.state.deleteid===undefined){

 }else{
   console.log("deleting is render")
  
 }
}
 editAds=(id,cata,avatar,num,name)=>{
   console.log("id in edit",id)
  this.props.navigation.navigate('EditAds',{
    ID : id,
    Catagoray:cata,
    pic:avatar,
    Name:name,
    number:num,
})
this.setState({filterData:this.state.filterData.filter(ls=>ls.ads_Id===id)})

 }

 confirmDel = (id) => {
        Alert.alert(
          'Delete Ad',
          'Are you sure?',
          [
            {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YES', onPress: () => this.deleteAds(id)},
          ]
        );
      }

 deleteAds=(id)=>{
  // this.setState({deleteid:id})
  this.setState({filterData:[]})
//  Alert.alert("Your Ad is deleted");
   firebase.database().ref('ads').child(id).remove().then(()=>{
    console.log("Delete");
    // this.setState({filterData:[]})
   this.setState({filterData:this.state.filterData.filter(ls=>ls.ads_Id!==id)})
  }).catch((error)=>{
    console.log(error);
  })
  
 } 
//   state = {
//       userID:"",
//       items : [],
//       filterItems:[],
//       dataSource:[],
//       filterData:[],
//       deleteid:'',
//       editid:'',
//   }
// //   render() {
// //     console.log("items in first render",items);   
// //     return (
// //         <View style={styles.container}>
// //             {
             
// //             }
           
// //         </View>
// //     );
// // }
// componentDidMount() {
//   console.log("component did mount is called")
//   // this.setState({filterData:[]})
//   const user = firebase.auth().currentUser;
//   if (user) {
//   //  console.log('User email: ',user.uid)
//    //this.setState({userID:"Hello Molvii"})
//   };
//   firebase.database().ref('/ads').on('value', (snapshot) => {
//       let data = snapshot.val();
//       let Items = Object.values(data);
//       // console.log(Items,"This Items From The DataBase")
//       this.setState({items:Items})
//       // this.setState({filterData:this.state.filterData.filter(ls=>ls.ads_Id!==id)})
//       //console.log(Items,"This Is The State Value")
//       Items.forEach(ls=>{
//         if(ls.userid ===user.uid){
//           console.log(user.uid,"User Id")
//           console.log(ls.userid,"Items UserId")
//          this.state.filterData.push(ls);
         
//         }
//       });
//       // console.log(Items,"This Items From The DataBase")
//       console.log(this.state.filterData,"This Is User Post Data")
//    });
//    if(this.state.deleteid===undefined){

//    }else{
//      console.log("deleting is render")
    
//    }
// }   
//   mydetails = () => {

//   }
     
//    editAds=(id,cata,avatar,num,name)=>{
//      console.log("id in edit",id)
//     this.props.navigation.navigate('EditAds',{
//       ID : id,
//       Catagoray:cata,
//       pic:avatar,
//       Name:name,
//       number:num,
//   })
//   this.setState({filterData:this.state.filterData.filter(ls=>ls.ads_Id===id)})
  
//    }

//     confirmDel = (id) => {
//       Alert.alert(
//         'Delete Ad',
//         'Are you sure?',
//         [
//           {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//           {text: 'YES', onPress: () => this.deleteAds(id)},
//         ]
//       );
//     }

//    deleteAds=(id)=>{
//      this.setState({deleteid:id})
//      Alert.alert("Your Ad is deleted");
//      firebase.database().ref('ads').child(id).remove().then(()=>{
//       console.log("Delete");
//       // this.setState({filterData:[]})
//      //filterData=this.state.filterData.filter(ls=>ls.ads_Id!==id)
//     }).catch((error)=>{
//       console.log(error);
//     })
    
//    } 
  render() {
      console.log("items in second render",this.state.items);
      // refresh: () => this.forceUpdate();
        return (
            
               
              <View style={styles.container}>
                {
                  this.state.filterData.length > 0 ? 
                    <View>{
                      this.state.deleteid===''?
                      <View style={styles.container1}>
                      <FlatList
                        data={this.state.filterData}
                        renderItem={({item})=>
                        <TouchableOpacity
                            onPress={() =>this.props.navigation.navigate('myAdDetails',{
                              Title :item.title,
                              Catagoray:item.catergory,
                              Description:item.description,
                              Rent:item.rent,
                              Dateto:item.dateto,
                              Datefrom:item.datefrom,
                              PP : item.privacyPolicy,
                              number:item.number,
                              Name:item.name,
                              pic:item.avatarSource,
                              id : item.ads_Id
                            })}
                        >
                          <View style = {{flexDirection : 'row', borderBottomWidth : 1, alignItems : 'center'}}>
                            <View style = {{margin : 10, borderRadius : '50%'}}>
                              <Image source = {item.avatarSource} style = {{height : 70, width : 70, borderRadius : 35}}></Image>
                            </View>
                            <View style = {{margin  :10, width : '53%'}}>
                              <Text style = {{fontSize : 16, fontWeight : 'bold', marginTop : 0}}>{item.title}</Text>
                              <Text style = {{fontSize : 15,  marginTop : 10}}>{item.description}</Text>  
                            </View> 
                            <View style = {{marginLeft : 0, flexDirection : 'row'}}>
                            <TouchableOpacity
                                 onPress={()=>this.editAds(item.ads_Id,item.catergory,item.avatarSource,item.Name,item.Number)}>
                              
                                <Image source = {require('../images/adedit.png')} style = {{width : 28, height: 28}}></Image>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={()=>this.confirmDel(item.ads_Id)}
                                style = {{marginLeft : 15}}
                                >
                                  
                                <Image source = {require('../images/delete.png')} style = {{width : 28, height: 28}}></Image>
                              </TouchableOpacity>
                            </View> 
                          </View>
                        </TouchableOpacity>
                        }
                      />
                    </View>:
                    <View style={styles.container1}>
                    <FlatList
                      data={this.state.deletefilterItems}
                      renderItem={({item})=>
                      <TouchableOpacity
                          onPress={() =>this.props.navigation.navigate('myAdDetails',{
                            Title :item.title,
                            Catagoray:item.catergory,
                            Description:item.description,
                            Rent:item.rent,
                            Dateto:item.dateto,
                            Datefrom:item.datefrom,
                            PP : item.privacyPolicy,
                            number:item.number,
                            Name:item.name,
                            pic:item.avatarSource,
                            id : item.ads_Id
                          })}
                      >
                        <View style = {{flexDirection : 'row', borderBottomWidth : 1, alignItems : 'center'}}>
                          <View style = {{margin : 10, borderRadius : '50%'}}>
                            <Image source = {item.avatarSource} style = {{height : 80, width : 80, borderRadius : 40}}></Image>
                          </View>
                          <View style = {{margin  :10}}>
                            <Text style = {{fontSize : 18, fontWeight : 'bold', marginTop : 0}}>{item.title}</Text>
                            <Text style = {{fontSize : 17,  marginTop : 10}}>{item.description}</Text>  
                          </View> 
                          <View style = {{marginLeft : 90, flexDirection : 'row'}}>
                          <TouchableOpacity
                               onPress={()=>this.editAds(item.ads_Id,item.catergory,item.avatarSource,item.Name,item.Number)}>
                            
                              <Image source = {require('../images/adedit.png')} style = {{width : 28, height: 28}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={()=>this.deleteAds(item.ads_Id)}
                              style = {{marginLeft : 15}}
                              >
                                
                              <Image source = {require('../images/delete.png')} style = {{width : 28, height: 28}}></Image>
                            </TouchableOpacity>
                          </View> 
                        </View>
                      </TouchableOpacity>
                      }
                    />
                  </View>
                    }</View>
                : 
                  <View style={styles.container2}>
                    <Image source = {require('../images/empty.png')} style = {{width : 120, height: 120}}></Image>
                    <Text style = {{fontSize  : 20, marginTop : 20}}>No Ads</Text>
                  </View>
                    
                }
              </View>
            
        )
    }

}
    
    
    
    
    const styles=StyleSheet.create({
    
      container: {
    
        flex: 1,
        backgroundColor:'#fff',
        //flexDirection: "row"
      },
      container2 : {
        padding  :  20,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop: 140
      },
      flat : {
        width : '100%',
      },
      icontainer : {
        padding : 20,
      },
      card: {
        backgroundColor:'#fff',
        marginBottom:10,
        marginLeft:'2%',
        width:'96%',
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
    
         width:3,
         height:3,
    
        }
    
      },   
      cardImage:{
        width:'100%',
        height:150,
        resizeMode:'cover'
      },
      cardText:{
        padding:10,
        fontSize:18,
      }
    
    });

  //   function mapStateToProps(state){

  //     const listOfAds = _.map(state.adsList.adsList, (val, key) => {
  //         return {
  //             ...val,
  //             key:key
  //         }
  //     })
  
  //     return {
  //         // listOfAds,
  //         //loadingReducer:state.loadingReducer.loadingReducer
          
  //     }
  // }
  
  
  
  // export default connect(mapStateToProps, {})(AdsMenu);
export default MyAds;