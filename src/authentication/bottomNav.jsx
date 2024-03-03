import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Index from '../pages';
import Settings from '../pages/settings';
import Service from '../pages/service';
const Auth = createBottomTabNavigator();
const BottomNav = () => {
    return (
        <Auth.Navigator
            screenOptions={((route) => ({
                tabBarActiveTintColor: "orange",
                tabBarInactiveTintColor: "darkblue",
            }))}>
            <Auth.Screen name='index' component={Index} options={{
                headerShown:false,
                tabBarIcon:({color}) => (
                    <Entypo name="home" size={24} color={color} />
                )
                }}/>
             <Auth.Screen name='Settings' component={Settings} options={{
                headerShown:false,
                tabBarIcon:({color}) => (
                    <AntDesign name="setting" size={24} color={color} />
                )
                }}/>
                 <Auth.Screen name='Service' component={Service} options={{
                headerShown:false,
                tabBarIcon:({color}) => (
                    <AntDesign name="back" size={24} color={color} />
                )
                }}/>
        </Auth.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({})