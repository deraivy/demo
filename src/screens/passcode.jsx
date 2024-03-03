import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {useNavigation} from '@react-navigation/native';



const Passcode = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{height:'100%', width:'100%'}}
      >
        <View >
        <Text style={styles.title}>Puba</Text>
        <View>
          <Text style={styles.subTitle}>Verify Phone Number</Text>
          <Text style={styles.subTitle}>Enter 4 digits code received on your phone</Text>
          <Text style={styles.subTitle}>+23491******85</Text>
        </View>

        <View style={{ width: '100%', paddingHorizontal: 60, marginTop:-550}}>
        
          <OTPInputView
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={{
              color: 'black',
              borderColor: 'black',
              borderRadius: 10,
            }}
            onCodeFilled={(code => {
              console.log(`Code is ${code}, you are good to go!`)
            })}
          />
         
        </View>
        </View>
    

      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.sign} onPress={() => { navigation.navigate('BottomNav') }}>
            <Text style={styles.txt}>Submit</Text>
          </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Passcode;

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {

    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 10
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 5
  },
  sign: {
    width: 350,
    height: 50,
    backgroundColor: 'black',
    marginTop: -320,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center'
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
});
