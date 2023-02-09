import React,{useState, useEffect} from 'react';
import {Text,View,Image,StyleSheet, Button,TextInput,ScrollView} from 'react-native'

export default function Details({route,navigation}){
    const[num1, setNum1]=useState(200);
    const[num2, setNum2]=useState(400);
    const[num3, setNum3]=useState(600);
    const[inp, setInp]=useState()
    
  
  const handleClick1=(e)=>{
       return num1*inp
    }
    const handleClick2=(e)=>{
        return num2*inp
     }
     const handleClick3=(e)=>{
        return num3*inp
     }
    
    return(
        <View>
             <ScrollView>
          
   <Image style={styles.ImageBackground} source={{uri:route.params.image, headers: { 'Accept': 'image/*'}}}/>
       <Text style={{ textAlign:'center',fontSize:30,paddingBottom:10}}>{route.params.title}</Text>
       <View style={{marginLeft:20, marginBottom:20}}>
       <Text style={{fontSize:20,color:'grey'}}>Realease Date: <Text style={{color:'red'}}>20/02/2023</Text></Text>
       <Text style={{fontSize:20,color:'grey'}}>Duration:<Text style={{color:'red'}}>2hr 15mins 10sec</Text> </Text>
       <Text style={{fontSize:20,color:'grey'}}>Rating: ⭐⭐⭐⭐</Text>
       <TextInput
        style={styles.input}
        onChangeText={(Number)=>setInp(Number)}
        placeholder="Number of TIckets"
        keyboardType="numeric"
      />
       <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:20,}}>Normal</Text>
       <Text style={{fontSize:20,paddingLeft:55}}>Superior</Text>
       <Text style={{fontSize:20,paddingLeft:47}}>Sofa</Text>
       </View>
       <View style={{flexDirection:'row'}}>
        <View style={{marginRight:60,justifyContent:'space-between'}}>
       <Button title="rs: 200" value='num1' onPress={handleClick1} style={{padding:100}}/></View>
       <View style={{marginRight:60,}}>
       <Button title="rs: 400" onPress={handleClick2} /></View>
       <Button title="rs: 600" style={{fontSize:20,paddingLeft:30}} onPress={handleClick3} />
       </View>
       </View>
       <View style={{marginLeft:10,marginRight:10}}>
       <Button title='Book' 
       onPress={()=> 
        navigation.navigate('Final',{total:(handleClick1())})
       }/>
       </View>
       </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    tinyLogo: {
        flex:1,
       resizeMode:'cover',
       width:'auto',
       height:'auto'
      },
      ImageBackground: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginLeft:5,
        
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})