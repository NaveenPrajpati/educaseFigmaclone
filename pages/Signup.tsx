import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';

export default function Signup({ navigation }: { navigation: any }) {
    const [value, setValue] = useState('');

    const handleRadioButtonChange = (selectedValue) => {
        setValue(selectedValue);
    };

    return (
        <ScrollView style={ styles.container}>

            <Text style={styles.heading}>
                Create your PopX account
            </Text>


            <View style={{ position: 'relative', paddingTop: 9, marginTop: 14, height: 49, }}>
                <View style={styles.textinputSubbox}>
                    <Text style={styles.textinputboxtext}>Full Name</Text>
                    <Text style={{ color: '#DD4A3D' }}>*</Text>
                </View>

                <TextInput style={styles.textinputStyle}></TextInput>
            </View>


            <View style={styles.textinputbox}>
                <View style={styles.textinputSubbox}>
                    <Text style={styles.textinputboxtext}>Phone number</Text>
                    <Text style={{ color: '#DD4A3D' }}>*</Text>
                </View>

                <TextInput style={styles.textinputStyle}></TextInput>
            </View>

            <View style={styles.textinputbox}>
                <View style={styles.textinputSubbox}>
                    <Text style={styles.textinputboxtext}>Email address</Text>
                    <Text style={{ color: '#DD4A3D' }}>*</Text>
                </View>

                <TextInput style={styles.textinputStyle}></TextInput>
            </View>

            <View style={styles.textinputbox}>
                <View style={styles.textinputSubbox}>
                    <Text style={styles.textinputboxtext}>Password</Text>
                    <Text style={{ color: '#DD4A3D' }}>*</Text>
                </View>

                <TextInput style={styles.textinputStyle}></TextInput>
            </View>

            <View style={styles.textinputbox}>
                <View style={styles.textinputSubbox}>
                    <Text style={styles.textinputboxtext}>Company name</Text>
                    <Text style={{ color: '#DD4A3D' }}></Text>
                </View>

                <TextInput style={styles.textinputStyle}></TextInput>
            </View>

            <View style={{ marginTop: 14, height: 49, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: 'black', fontSize: 13, fontFamily: 'Rubik-Regular', lineHeight: 17
                    }}>Are you an Agency?</Text>
                    <Text style={{ color: '#DD4A3D' }}>*</Text>
                </View>
           
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                       <View style={styles.radioContainer}>
                       <View style={styles.radioButtonContainer}>
                            <RadioButton value="first" />
                            <Text style={{color:'black'}}>Yes</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="second" />
                            <Text style={{color:'black'}}>No</Text>
                        </View>
                       </View>
                    </RadioButton.Group>
               
            </View>







            <TouchableOpacity style={[styles.buttonstyle]} onPress={() => navigation.navigate('Profile')}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Rubik-Medium' }}>Create Account</Text>

            </TouchableOpacity>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, backgroundColor: '#F7F8F9', position: 'relative', 
    },
    heading: {
        fontFamily: 'Rubik-Medium', marginTop: 20, fontSize: 28, lineHeight: 36, color: 'black', width: 188 
    },
    
    textinputbox:{
        position: 'relative', paddingTop: 9, marginTop: 14, height: 49,
    },
    textinputSubbox:{
        paddingHorizontal: 5, left: 10, position: 'absolute', zIndex: 2, backgroundColor: '#F7F8F9', flexDirection: 'row' 
    },
    textinputboxtext:{
        color: '#6C25FF', fontSize: 13, fontFamily: 'Rubik-Regular', lineHeight: 17, top: 2
                    
    },
    textinputStyle: {
        borderWidth: 1, borderRadius: 6, borderColor: 'lightgray', height: 40,
    },

 
  

    buttontextstyle: {
        fontSize: 16, color: 'white', fontFamily: 'Rubik-Medium' 
    },
    buttonstyle: {
        height: 46,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6C25FF',
        marginTop: 100
    },
    radioContainer: {
        flexDirection:'row',
        marginLeft:-7,
        gap:20
       
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      gap:8
    },
})