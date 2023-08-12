import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <ScrollView style={{padding:20,marginTop:20,backgroundColor:'#F7F8F9'}}>
      <Text style={{fontFamily:'Rubik-Medium',fontSize:28,lineHeight:36,color:'black',width:188}}>
      Signin to your PopX account
      </Text>
      <Text style={{marginTop:14,fontFamily:'Rubik-Regular',fontSize:18,lineHeight:26,width:232,color:'#1D2226',opacity:0.6}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <View style={{position:'relative',paddingTop:9,marginTop:24,height:49,}}>
        <Text style={{paddingHorizontal:5,marginLeft:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',
    color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Email Address</Text>
        <TextInput  placeholder='Enter email address' style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40}}></TextInput>
      </View>

      <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <Text style={{paddingHorizontal:5,marginLeft:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',
    color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',fontWeight:'600',lineHeight:17,top:2}}>Password</Text>
        <TextInput  placeholder='Enter password' style={{borderWidth:1,borderRadius:6,borderColor:'lightgray'}}></TextInput>
      </View>

      <TouchableOpacity style={[styles.buttonstyle]} onPress={()=>navigation.navigate('Profile')}>
      <Text style={{fontSize:16,color:'white',fontFamily:'Rubik-Medium'}}>Login</Text>

      </TouchableOpacity>
      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textinputStyle:{
        
// width: 335,
height: 40,
// border: 1px solid #CBCBCB,
borderRadius: 6,
opacity: 1
    },
    buttonstyle:{
        // width: 335,
    
height:46,
borderRadius:6,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#CBCBCB',
marginTop:14

    }
})