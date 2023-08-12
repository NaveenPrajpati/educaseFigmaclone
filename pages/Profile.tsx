import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={{flex:1,padding:20,backgroundColor:'#F7F8F9'}}>

      <View style={{marginTop:10,flexDirection:'row',gap:20}}>
        <View  style={{position:'relative'}}>

        <Image source={require('../assets/images/profilepic.png')} alt='no' width={76} height={76}  />
        <Image source={require('../assets/images/picprofile.png')} alt='no' width={21} height={23} style={{position:'absolute',right:-3,bottom:4}} />
        
        </View>
        <View>
            <Text style={{fontSize:15,fontFamily:'Rubik-Medium',textTransform:'capitalize',color:'black',lineHeight:19}}>name</Text>
            <Text style={{marginTop:6,fontSize:14,fontFamily:'Rubik-Regular',textTransform:'capitalize',color:'#1D2226',lineHeight:19}}>name@gmail.com</Text>
     
        </View>
      </View>
      <Text style={{marginTop:30,fontSize:14,lineHeight:22,fontFamily:'Rubik-Regular',textTransform:'capitalize',color:'#1D2226',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, numquam facilis modi unde pariatur a ipsam. Natus non, hic minus veniam praesentium  </Text>
    </View>
  )
}

const styles = StyleSheet.create({})