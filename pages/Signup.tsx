import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signup({navigation}) {
  return (
    <ScrollView style={{padding:20,marginTop:20,backgroundColor:'#F7F8F9'}}>
    <Text style={{fontFamily:'Rubik-Medium',fontSize:28,lineHeight:36,color:'black',width:188}}>
    Create your PopX account
    </Text>
    

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Full Name</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput  placeholder='Enter email address' style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>
    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Full Name</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput  placeholder='Enter email address' style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>
    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Full Name</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput  placeholder='Enter email address' style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>

   

    <TouchableOpacity style={[styles.buttonstyle]} onPress={()=>navigation.navigate('Signup')}>
    <Text style={{fontSize:16,color:'white',fontFamily:'Rubik-Medium'}}>Login</Text>

    </TouchableOpacity>
    

  </ScrollView>
  )
}

const styles = StyleSheet.create({
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