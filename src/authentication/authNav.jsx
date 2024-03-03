import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login';
import Register from '../screens/register';
import Passcode from '../screens/passcode';
import Phone from '../screens/phone';
import BottomNav from './bottomNav';
import Transfer from '../screens/transfer';
import Airtime from '../subpages/airtime';



const Auth = createStackNavigator();
const AuthNav = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator>
        <Auth.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Auth.Screen name='Phone' component={Phone} options={{ headerShown: false }} />
        <Auth.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Auth.Screen name='Passcode' component={Passcode} options={{ headerShown: false }} />
        <Auth.Screen name='BottomNav' component={BottomNav} options={{ headerShown: false }} />
        <Auth.Screen name='Transfer' component={Transfer} options={{ headerShown: false }} />
        <Auth.Screen name='Airtime' component={Airtime} options={{ headerShown: false }} />
      </Auth.Navigator>
    </NavigationContainer>
  )
}

export default AuthNav

const styles = StyleSheet.create({})