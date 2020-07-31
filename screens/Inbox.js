import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,TextInput,Button,StatusBar,FlatList,TouchableOpacity,Image,
} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContext } from '@react-navigation/native';
const logo = require('../images/std1.jpg');
export default class Inbox extends React.Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      demoArray:[ 
        {id:'1',
        name:"Name",
        subtitle:'Text Initiate',
        btn:'Del chat',
        image:logo,
      },
    {id:'2',
    name:"Name",
    subtitle:'Text Initiate',
    btn:'Del chat',
    image:logo,
    
  },
  {id:'3',
  name:"Name",
  subtitle:'Text Initiate',
  btn:'Del chat',
  image:logo,
  
},
{id:'4',
name:"Name",
subtitle:'Text Initiate',
btn:'chat',
image:logo,
},
{id:'5',
name:"Name",
subtitle:'Text Initiate',
btn:'Del chat',
image:logo,
},
{id:'6',
name:"Name",
subtitle:'Text Initiate',
btn:'Del chat',
image:logo,
},
     

      ],
      // demoArray:[{id:0,name:'Akhzar'},{id:1,name:'Abrar'}],
    };
  }


render()
 {
  const navigation = this.context;
    
  return (
    <View>
      
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <View style = {styles.header}>
              <Text style={{fontSize:25,alignContent:'center'}}>Chats</Text>
            </View>
            <FlatList
              data={this.state.demoArray}
              initialNumToRender={1}
              extraData={this.state}
              keyExtractor = { (item, index) => index.toString()}
              renderItem={({item}) =>



              <View style={{flex:0.9,height:150,paddingRight:6,paddingLeft:6,paddingBottom:3,paddingTop:3,justifyContent:'center',}}>
                <TouchableOpacity style={{justifyContent:'center', elevation: 3,
                  height:150,borderRadius:4,padding:4,shadowOpacity: 10,backgroundColor : 'white',shadowColor: 'black' }}
                  onPress={()=>this.rowSelected(item)}>


  {/* First Apply image Code and View of Image in Flate List */}
                  <View style={{flex:1,flexDirection:'row',width:300}}>

                    <View style={ styles.MainContainer }>
                      <Image source={item.image}    style={{width: 90, height: 90, borderRadius: 170/2}}/>
                    </View>
  {/* Title Code Like Teacher Name */}
                <View style={{flex:0.5,justifyContent:'flex-start'}}>
                <View style={{flex:0.3,justifyContent:'flex-start'}}>
                <Text style={ {color:'#000000',fontSize:20,fontFamily:'Roboto-Regular',paddingBottom:5}}>
                {item.name} </Text>
                </View>
  {/* Subtitle Code Like  Text Initiate  */}
                <View style={{flex:0.1,flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:5}}>

                <View style={{alignItems:'flex-start'}}>
                <Text style={{color:'#000000',fontSize:15,}}>
                {item.subtitle} </Text>
                </View>
                </View>
                </View>

                <TouchableOpacity>
              <View style={{flex:0.3,justifyContent:'flex-end'}}>
                
              <Text style={{color:'#000000',fontSize:15,fontFamily:'noore-huda',textAlign:'right'}}>
                    {item.btn} </Text>
              </View>
              </TouchableOpacity>





             </View>

         </TouchableOpacity>
          </View>
        

       }

       />

            </View>

          </View>
         
          

      </SafeAreaView>
      
      </View>
   
    );
  }
}


const styles = StyleSheet.create({
  header : {
    padding : 10,
    alignItems : 'center'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  MainContainer:
  {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
 
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  lastBt:{
    flex:1,
    flexDirection:'row',
    width:440,
    borderRadius:54,
   justifyContent:'space-around',
   padding:30
         }, 
  
});


