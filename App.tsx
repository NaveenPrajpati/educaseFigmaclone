import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
const Stack = createNativeStackNavigator();
export default function App():JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerLeft:()=>(
          <Text style={{fontSize:18,fontFamily:'Rubik-Regular',fontWeight:'normal',textTransform:'capitalize',color:'#1D2226',lineHeight:21}}>Account Settings</Text>
        ),headerTitle:''}} />
       
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})