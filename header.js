import React,{useState, useEffect} from 'react'
import {StyleSheet, View, ScrollView, Text, TextInput, Image,Button} from 'react-native'
import { useHistory } from "react-router-dom";

const url="http://192.168.141.142:8000/movies"

export default function Header ({navigation}){
const[movie, setMovie]=useState()

//////////////////
useEffect(()=>{
fetch(url,{method:'GET'})
.then((res)=>res.json())
.then((data)=>{
   setMovie(data)
})
.catch((err)=>{
  console.log(err)
})
},[])
////////////////////
const renderView=()=>{
if(movie){
return movie.map((item)=>{
  return(
    <View key={item.id} style={{marginBottom:20,marginLeft:10,marginRight:10}}>
      <View style={{flexDirection:'row'}}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: item.image
        }}
      />
      <View style={{flex:1}} >
      <Text style={{flexDirection:'row', textAlign:'center',padding:10, fontSize:20}}>{item.title}</Text>
      <Text style={{paddingLeft:10,color:'grey'}}>Genre:<Text style={{color:'black', fontStyle:'italic'}}>{item.genre}</Text></Text>
      <Text style={{paddingLeft:10,color:'grey'}}>Director:<Text style={{color:'black',}}>{item.director}</Text></Text>
      </View>
      </View>
      <View  style={{marginBottom:10,}} >
      <Button
        title="Press me"
        onPress={()=> 
          navigation.navigate('Details',{id:(item.id),title:(item.title),image:(item.image),genre:(item.genre),director:(item.director),star:(item.star)})
        }
       />
        </View>
      
    </View>
  )
})
}
}

return(
    <View>
        <ScrollView>
      <View style={styles.container}>
        <View style={{flex:1}}>
        <Text  style={styles.text}>Navbar</Text>
        </View>
        <View >
        <TextInput
       style={styles.input}
        placeholder="Search.."
      />
      </View>
        </View>
        
        {renderView()}
        </ScrollView>

    </View>
   
)
}
const styles=StyleSheet.create({
    container:{
        flex:-1,
        flexDirection:"row",
         backgroundColor:'tomato',
         marginTop:10,
         height:40,
         width:403,
         marginBottom:10,
         marginLeft:5,
         paddingRight:5
    },
    text:{
       fontSize:20,
       marginLeft:10,
       marginTop:5
    },
    input: {
        height: 30,
        marginTop:5,
        borderWidth: 1,
        padding: 5,
        width:100,
        borderRadius:10,
      },
      tinyLogo: {
        flex:1,
        width: 200,
        height: 150,
        marginBottom:10,
        marginTop:5,
        marginLeft:5
      },
})