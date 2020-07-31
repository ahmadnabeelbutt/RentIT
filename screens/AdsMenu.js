import React, {Component} from 'react';
import { StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions, TextInput, } from 'react-native';
import firebase from 'firebase';
import ItemComponent from '../src/components/ItemComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
const logo = require('../images/car1.jpg');
import { NavigationContext } from '@react-navigation/native';
import { Button } from 'native-base';
//const dataList=[{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'}];
const numColumns=2;
const WIDTH=Dimensions.get('window').width;
class AdsMenu extends Component {
  state = {
    items : [],
    gotoAdddetaile:false,
    filerbyCatagory:[],
    filter:false,
    selectitem:'',
    //backgroundColor : 'skyblue',
    backgroundColor1: '',
    searchItem : '',
    
    pressed: false,
  }
  click=()=>{
    console.log("click is called")
    this.props.navigation.navigate('PostDetaile')
}
     componentDidMount() {
        firebase.database().ref('/ads').on('value', (snapshot) => {
            let data = snapshot.val();
            let Items = Object.values(data);
            this.setState({items:Items});
            console.log("Data Ads manu",data);
            console.log("Item Ads manu",Items);
         });
      } 
      changeColor = () => {
      //   if(!this.state.pressed){
      //     this.setState({ pressed: true,backgroundColor: 'red', backgroundColor2: 'black'});
      //  } else {
      //    this.setState({ pressed: false, backgroundColor: 'black' ,backgroundColor2: 'red'});
      //  }
     
      }

      searchByTitle = (cata)=>{
        console.log("data in select by catagory",this.state.filerbyCatagory);
        console.log("selection is",cata)
       
        this.state.filerbyCatagory=this.state.items.filter(ls=>ls.title===cata);
        this.setState({filter:true});
        this.changeColor();
        console.log("filter catagar after push",this.state.filerbyCatagory);
        this.render();
        }

      selectbycatagory=(cata)=>{
        console.log("data in select by catagory",this.state.filerbyCatagory);
        console.log("selection is",cata)
        // this.state.items.forEach(ls=>{
        //   if(ls.catergory===cata){
        //     console.log(cata,"catagory in list")
        //     console.log(ls.catergory,"catagory in state")
        //    this.state.items.push(ls);
        // }
        // })
        this.state.filerbyCatagory=this.state.items.filter(ls=>ls.catergory===cata);
        this.setState({filter:true});
        this.changeColor();
        console.log("filter catagar after push",this.state.filerbyCatagory);
        this.render();
        }
showall=()=>{
  console.log("Show all is called");
  this.setState({filter:false});
  this.render();
}
    render() {
      const { navigation } = this.props.navigation;
      console.log("items in second render",this.state.items);
      let {itemStyle,itemText}=styles
        return (
         <View style = {{backgroundColor : '#fff', flex : 1}}>
           {/* <View style = {{padding : 10, paddingTop : 0}}>
            <Text>Location</Text>
           </View> */}
           <View style = {{padding :5,
              
          }}>
              <View style = {{
                  //flex : 0.3,
                  borderRadius : 10,shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  
                  elevation: 5,
                  padding : 5,
                  paddingBottom : 8


              }}>
                <View style = {{flexDirection : 'row', width : '88%', marginLeft : 25, borderBottomWidth : 1, alignItems : "center"}}>
                  <Image source = {require('../images/search.png')} style = {{width : 28, height : 28}}></Image>
                  <TextInput style = {{height : 50,}}
                    placeholder = 'What do you want...'
                    style = {{width : '70%', marginLeft : 15}}
                    onChangeText = {searchItem => this.setState({searchItem})}
                    onSubmitEditing={ () => this.searchByTitle(this.state.searchItem) } 
                  />
                </View>
              </View>
           </View>
           <ScrollView horizontal = {true}
            showsHorizontalScrollIndicator={false}
            style = {{marginBottom : 8}}
           >
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 12, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
             onPress={this.showall}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>All</Text>
             </TouchableOpacity>
             <TouchableOpacity
                style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
                // onPress={()=>this.setState({selectitem:'Vehicle / AutoMobile'}),this.selectbycatagory}
                onPress={()=>this.selectbycatagory('Vehicle / AutoMobile')}
              >
              
               <Text style = {{fontSize : 16, color : '#fff'}}>Vehicles</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Electronics')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Electronics</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Furniture')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Furniture</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Dresses')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Dresses</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Camera/Studio')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Cameras</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Jewellery')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Jewellery</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Property')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Property</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Books/Games')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Books</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {{alignItems : 'center',marginLeft : 0, borderRadius : 20, padding : 5, margin : 10, backgroundColor : '#009000', width : 100, height: 35, justifyContent : 'center'}}
              onPress={()=>this.selectbycatagory('Decorations')}
             >
               <Text style = {{fontSize : 16, color : '#fff'}}>Decorations</Text>
             </TouchableOpacity>
           </ScrollView>
           {console.log("Filter list in condition",this.state.filerbyCatagory)}
           {
             this.state.filter!==false?
             
             <FlatList
            data={this.state.filerbyCatagory}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1, alignItems : 'center' }}>
                <ScrollView>
                  <View
                    style={{
                      flex: 1,
                      margin: 10,
                      minWidth: 190,
                      marginLeft :7,
                      maxWidth: 190,
                      height: 330,
                      maxHeight: 410,
                      //backgroundColor: '#CCC',
                      marginBottom:10,
                      //borderWidth : 1,
                      borderRadius : 10,shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      
                      elevation: 5,
                    
                    
                    }}
                  >
                    {console.log("filter is not false")}
                    <View style={{flex: 1, flexDirection: 'column', }}>
                      <View style={{width: '100%', height: 230,marginTop : 8, backgroundColor: '',borderRadius : 10}}>
                        <Image source={item.avatarSource} style={{width:'92%',height:'90%',marginLeft:7,marginTop:5,marginRight:10}}/>
                      </View>
                      {console.log("advanureeeeee",item.avatarSource)}
                    </View>
                    <TouchableOpacity 
                        
                        onPress={() =>this.props.navigation.navigate('PostDetaile',{
                          Title :item.title,
                          Catagoray:item.catergory,
                          Description:item.description,
                          Rent:item.rent,
                          Dateto:item.dateto,
                          Datefrom:item.datefrom,
                          PP : item.privacyPolicy,
                          number:item.number,
                          Name:item.name,
                          pic:item.avatarSource
                        })}
                      >
                    <View style={{width: '100%', height: 110, padding : 5, backgroundColor: '',}}>
                      <Text style={{fontWeight:'bold',fontSize : 18,textAlign:'center'}}>
                        PKR {item.rent} per day
                      </Text>
                      <Text style={{fontWeight:'600',fontSize : 18, textAlign:'center', marginTop : 6}}>
                        {item.title}
                      </Text>
                      <Text style={{fontWeight:'400',fontSize :15, textAlign:'center', marginTop : 8}}>
                        {item.catergory}
                      </Text>
                      {/* <Text style = {{marginLeft : 5 ,marginTop : 5, fontWeight : 'bold'}}>Posted 2 Days Ago</Text>
                       */}
                       
                      
                    </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
         : <FlatList
         data={this.state.items}
         renderItem={({ item }) => (
           <View style={{ flex: 1, flexDirection: 'column', margin: 1, alignItems : 'center' }}>
             <ScrollView>
               <View
                 style={{
                 flex: 1,
                 margin: 10,
                 minWidth: 190,
                 marginLeft :7,
                 maxWidth: 190,
                 height: 330,
                 maxHeight: 410,
                 //backgroundColor: '#CCC',
                 marginBottom:10,
                 //borderWidth : 1,
                 borderRadius : 10,shadowColor: "#000",
                 shadowOffset: {
                   width: 0,
                   height: 2,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 3.84,
                 
                 elevation: 5,
                 
                 
                 }}
               >
                 {console.log("filter is false")}
                 <View style={{flex: 1, flexDirection: 'column', }}>
                   <View style={{width: '100%', height: 230,marginTop : 8, backgroundColor: '',borderRadius : 10}}>
                     <Image source={item.avatarSource} style={{width:'92%',height:'90%',marginLeft:7,marginTop:5,marginRight:10}}/>
                   </View>
                   {console.log("advanureeeeee",item.avatarSource)}
                 </View>
                 <TouchableOpacity 
                     
                     onPress={() =>this.props.navigation.navigate('PostDetaile',{
                       Title :item.title,
                       Catagoray:item.catergory,
                       Description:item.description,
                       Rent:item.rent,
                       Dateto:item.dateto,
                       Datefrom:item.datefrom,
                       PP : item.privacyPolicy,
                       number:item.number,
                       Name:item.name,
                       pic:item.avatarSource
                     })}
                   >
                 <View style={{width: '100%', height: 110, padding : 5, backgroundColor: '',}}>
                   <Text style={{fontWeight:'bold',fontSize : 18,textAlign:'center'}}>
                     PKR {item.rent} per day
                   </Text>
                   <Text style={{fontWeight:'600',fontFamily : 'Arial', fontSize : 18, textAlign:'center', marginTop : 4}}>
                     {item.title}
                   </Text>
                   <Text style={{fontFamily: 'sans-serif',fontSize :15, textAlign:'center', marginTop : 8, color : '#505050'}}>
                     {item.catergory}
                   </Text>
                   {/* <Text style = {{marginLeft : 5 ,marginTop : 5, fontWeight : 'bold'}}>Posted 2 Days Ago</Text>
                    */}
                    
                   
                 </View>
                 </TouchableOpacity>
               </View>
             </ScrollView>
           </View>
         )}
       numColumns={2}
       keyExtractor={(item, index) => index.toString()}
     />
           }
           {/* <FlatList
            data={this.state.items}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1, alignItems : 'center' }}>
                <ScrollView>
                  <View
                    style={{
                    flex: 1,
                    margin: 10,
                    minWidth: 160,
                    maxWidth: 160,
                    height: 350,
                    maxHeight: 410,
                    //backgroundColor: '#CCC',
                    marginBottom:10,
                    //borderWidth : 1,
                    borderRadius : 10,shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                    
                    
                    }}
                  >
                    <View style={{flex: 1, flexDirection: 'column', }}>
                      <View style={{width: '100%', height: 220,marginTop : 8, backgroundColor: '',borderRadius : 10}}>
                        <Image source={require('../images/car1.jpg')} style={{width:'92%',height:'90%',marginLeft:7,marginTop:5,marginRight:10}}/>
                      </View>
                      {console.log("advanureeeeee",item.avatarSource)}
                    </View>
                    <TouchableOpacity 
                        
                        onPress={() =>this.props.navigation.navigate('PostDetaile',{
                          Title :item.title,
                          Catagoray:item.catergory,
                          Description:item.description,
                          Rent:item.rent,
                          Dateto:item.dateto,
                          Datefrom:item.datefrom,
                          number:item.number,
                          Name:item.name,
                          pic:item.avatarSource
                        })}
                      >
                    <View style={{width: '100%', height: 130, padding : 5, backgroundColor: '',}}>
                      <Text style={{fontWeight:'bold',fontSize : 18,textAlign:'center'}}>
                        PKR {item.rent} per day
                      </Text>
                      <Text style={{fontWeight:'650',fontSize : 18, textAlign:'center'}}>
                        {item.title}
                      </Text>
                      <Text style={{fontWeight:'400',fontSize :15, textAlign:'center', marginTop : 3}}>
                        {item.catergory}
                      </Text>
                      <Text style = {{marginTop : 5, fontWeight : 'bold'}}>Posted 2 Days Ago</Text>
                      
                       
                      
                    </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </View>  
        )
    }
}
const styles=StyleSheet.create({    
  container: {
  flex:1,
  paddingTop:40,
  },
  itemStyle: {
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    height:100,
    flex:1,
    margin:1,
    height:WIDTH/numColumns
  },
  itemText : {
    color : 'white',
    fontSize:30
    },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
// export default connect(mapStateToProps, {})(AdsMenu);
export default AdsMenu;