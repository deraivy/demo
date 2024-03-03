import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width


const Airtime = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.title}>Transfers </Text>
            </View>
            <View style={styles.box}>
                <View style={styles.row}>
                <Text style={styles.txt}>N200,000</Text>
                <Text style={styles.txtOne}>CURRENT</Text>
                </View>
                
            </View>
        </View>
    )
}

export default Airtime

const styles = StyleSheet.create({
    container: {

    },
    headerContainer: {
        width: width,
        height: 100,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        flexDirection:'row',
        paddingTop:67,
        alignItems:'center'

    },
    title: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '600',
        flex:1,
        
    },
    box:{
        width:350,
        height:120,
        backgroundColor:'black',
        marginTop:30,
        alignSelf:'center',
        borderRadius:20,
        paddingVertical:20,
        paddingHorizontal:20,
 
    },
    txt:{
        color:'white',
       
        fontSize:20,
        fontWeight:'800'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    txtOne:{
        color:'white'
    }
})