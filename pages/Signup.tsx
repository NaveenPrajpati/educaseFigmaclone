import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React,{useMemo,useState} from 'react'
import RadioGroup from 'react-native-radio-buttons-group';

export default function Signup({navigation}:{navigation:any}) {
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Yes',
            value: 'agency'
        },
        {
            id: '2',
            label: 'No',
            value: 'public'
        }
    ]), []);
  return (
    <View style={{padding:20,backgroundColor:'#F7F8F9',position:'relative',flex:1}}>
        <View>
    <Text style={{fontFamily:'Rubik-Medium',marginTop:20,fontSize:28,lineHeight:36,color:'black',width:188}}>
    Create your PopX account
    </Text>
    

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Full Name</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput   style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>
  

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Phone number</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput   style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Email address</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput   style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Password</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
     
      <TextInput   style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>

    <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
        <View style={{paddingHorizontal:5,left:10,position:'absolute',zIndex:2,backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'#6C25FF',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17,top:2}}>Company name</Text>
  <Text style={{color:'#DD4A3D'}}></Text>
        </View>
     
      <TextInput   style={{borderWidth:1,borderRadius:6,borderColor:'lightgray',height:40,}}></TextInput>
    </View>

   <View style={{position:'relative',paddingTop:9,marginTop:14,height:49,}}>
   <View style={{backgroundColor:'#F7F8F9',flexDirection:'row'}}>
        <Text style={{
  color:'black',fontSize:13,fontFamily:'Rubik-Regular',lineHeight:17}}>Are you an Agency?</Text>
  <Text style={{color:'#DD4A3D'}}>*</Text>
        </View>
   <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            containerStyle={{marginLeft:-10,borderBlockColor:'#6C25FF',borderBlockEndColor:'red',}}
            borderColor='pink'
            
        />
   </View>
   

   </View>
    <TouchableOpacity style={[styles.buttonstyle,{position:'absolute',bottom:30,width:'100%',left:20}]} onPress={()=>navigation.navigate('Signup')}>
    <Text style={{fontSize:16,color:'white',fontFamily:'Rubik-Medium'}}>Login</Text>

    </TouchableOpacity>
    

  </View>
  )
}

const styles = StyleSheet.create({
    buttonstyle:{
     
    

height:46,
borderRadius:6,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#6C25FF',
marginTop:14

    }
})