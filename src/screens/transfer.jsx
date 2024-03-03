import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Transfer = () => {
    const menu = [
        {
            id: 1,
            title: "To your Own Account",
            subtitle: "Transfer between your Chi accounts",
            iconName: "wallet-outline"
        },

        {
            id: 2,
            title: "Request Statement",
            subtitle: "To Chi Bank Account",
            // iconName: "Transfer to Chi Bank accounts"
        },
        {
            id: 3,
            title: "To Other Bank",
            subtitle: "Transfer to other banks",
           
        },
        {
            id: 3,
            title: "Bulk Transfer",
            subtitle: "Transfer to multiple bank accounts",
           
        },


    ]
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.title}>Transfers </Text>
            </View>
            {menu.map((data, value) => (
                <View key={value}>
                    <View style={styles.root}>
                        <View style={styles.box}>

                            <Ionicons style={styles.icon} name={data.iconName} size={24} color="black" />
                        </View>
                        <View>
                            <Text style={styles.msg1}>{data.title}</Text>
                            <Text style={styles.msg2}>{data.subtitle}</Text>
                        </View>

                    </View>
                </View>
            ))}
        </View>
    )
}

export default Transfer

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
    root: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#dddddd',
        width: 40,
        height: 40,
        borderRadius: 10
    },
    icon: {
        alignSelf: 'center',
        marginTop: 8
    },
    msg1: {
        fontWeight: '600'
    },
    msg2: {
        fontSize: 12,
        fontWeight: '200',
        marginTop: 3
    },
    line: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#a5afb3'
    }
})