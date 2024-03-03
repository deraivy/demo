import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import PhoneInput from "react-native-phone-number-input";

const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValid, setIsValid] = useState(true);
    const navigation = useNavigation();

    const handleVerify = () => {
        if (!phoneNumber || phoneNumber.length > 10) {
            setIsValid(false);
            Alert.alert("Invalid phone number");
            return;
        }

        // Navigate to the next screen
        navigation.navigate('Login'); 
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header}>
                    <AntDesign name="left" size={24} color="black" />
                    <Text style={styles.title}>Register Phone</Text>
                </TouchableOpacity>
                <Text style={styles.msg}>Enter a valid phone number to verify your phone number</Text>
                <View style={styles.phone}>

                    <PhoneInput 
                        defaultCode='NG'
                        onChangeCountry={(text) => {
                            setPhoneNumber(text)
                        }}
                        containerStyle={styles.inputContainer}
                        placeholder="0000 000 0000"
                        value={phoneNumber}
                        onChangeText={(text) => {
                            setPhoneNumber(text)
                            setIsValid(true); // Reset validity when input changes
                        }}

                    />
                </View>
                <TouchableOpacity style={styles.verify} onPress={handleVerify}>
                    <Text style={styles.verifyT}>Verify</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Phone

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    title: {
        textAlign: 'center',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    msg: {
        marginTop: 30,
        marginBottom: 50
    },
    phone: {

        alignSelf: 'center'


    },
    verify:{
        width:65,
        height:30,
        backgroundColor:'black',
        marginTop:20,
        alignSelf:'center',
        borderRadius:5
    },
    verifyT:{
        color:'white',
        textAlign:'center',
        marginTop:6,
       
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
})
