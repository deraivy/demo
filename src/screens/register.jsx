import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


const Register = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.top}>Create Account</Text>
        <Text>Name</Text>
        <TextInput style={styles.input} placeholder='Enter your name' />
        <View style={styles.line} />

        <Text>Email</Text>
        <TextInput style={styles.input} placeholder='Enter your name' />
        <View style={styles.line} />

        <Text>Phone Number</Text>
        <TextInput style={styles.input} placeholder='000 0000 000' />
        <View style={styles.line} />

        <Text>Password</Text>
        <TextInput style={styles.input} secureTextEntry placeholder='Enter your name' />
        <View style={styles.line} />

        <Text>Repeat Password</Text>
        <TextInput style={styles.input} secureTextEntry placeholder='Enter your name' />
        <View style={styles.line} />
        <TouchableOpacity onPress={handleAgreeTerms} style={styles.radioButton}>
          <View style={[styles.radioButtonSquare, { backgroundColor: agreeTerms ? '#000' : 'transparent' }]}>
            {agreeTerms && <AntDesign name="check" size={16} color="#fff" />}
          </View>
          <Text style={styles.radioButtonLabel}>I agree to the terms and conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sign} onPress={()=>{navigation.navigate('Phone')}}>
          <Text style={styles.txt}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.txtOne}>Already have an account?</Text>
          <TouchableOpacity>
            <Text> SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom:400
  },
  top: {
    marginTop: 150,
    bottom: 50,
    fontSize: 20
  },
  input: {
    marginTop: 10
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#c9cece',
    marginBottom: 25
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioButtonSquare: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonLabel: {
    fontSize: 14
  },
  sign: {
    width: 350,
    height: 50,
    backgroundColor: 'black',
   marginTop:70,
   alignSelf:'center',
   borderRadius:10

  },
  txt:{
    color:'white',
    textAlign:'center',
    fontSize:16,
    marginTop:20
  },
  row:{
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center'
  },
  txtOne:{
    color:'grey'
  }
})