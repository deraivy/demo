import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Register')}}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.top}>Sign In</Text>
      <Text>Name</Text>
      <TextInput style={styles.input} placeholder='Enter your name' />
      <View style={styles.line} />

      <Text>Email</Text>
      <TextInput style={styles.input} placeholder='***********' secureTextEntry />
      <View style={styles.line} />
      <TouchableOpacity style={styles.sign} onPress={()=>{navigation.navigate('Passcode')}}>
          <Text style={styles.txt}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.txtO}>Forgotten Password</Text>
        <View style={styles.row}>
          <Text style={styles.txtOne}>Dont have an account?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text> Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom:400
  },
  top: {
    marginTop: 300,
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
  },
  txtO:{
    color:'grey',
    alignSelf:'center',
    marginTop:30
  }
})