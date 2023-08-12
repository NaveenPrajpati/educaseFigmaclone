import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={{flex:1,padding:20,justifyContent:'flex-end',backgroundColor:'#F7F8F9'}}>
        <View style={{}}>
      <Text style={{fontSize:28,color:'black',fontFamily:'Rubik-Regular',fontWeight:'normal',}}>Welcome to PopX</Text>
      <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Rubik-Regular',lineHeight:26,letterSpacing:0,marginTop:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
      
      
      <TouchableOpacity style={[styles.buttonstyle,{marginTop:29}]} onPress={()=>navigation.navigate('Signup')}> 
      <Text style={{fontSize:16,color:'white',fontFamily:'Rubik-SemiBold'}}>Create Account</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.buttonstyle,{backgroundColor:'#6C25FF4B',marginTop:10}]} onPress={()=>navigation.navigate('Login')}>
      <Text style={{fontSize:16,color:'black',fontFamily:'Rubik-SemiBold'}}>Already Registered? Login</Text>

      </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonstyle:{
        // width: 335,
height:46,
borderRadius:6,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#6C25FF',


    }
})