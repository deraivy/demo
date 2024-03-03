import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const width = Dimensions.get('window').width

const Settings = () => {
    const menu = [
        {
            id: 1,
            title: "Change Password",
            subtitle: "Change your online banking password",
            iconName: "key"
        },

        {
            id: 2,
            title: "Change Transaction Pin",
            subtitle: "Change your 4-digit transaction PIN",
            iconName: "lock"
        },
        {
            id: 3,
            title: "I forgot my PIN",
            subtitle: "Reset and request a new PIN",
            iconName: "lock"
        },
        {
            id: 4,
            title: "Manage your Profile",
            subtitle: "Modify your profile information",
            iconName: "user"
        },


    ]
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Settings</Text>
            </View>

            {menu.map((data, value) => (
                <View key={value}>
                    <View style={styles.root}>
                        <View style={styles.box}>
                            <Feather style={styles.icon} name={data.iconName} size={20} color="black" />
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

export default Settings

const styles = StyleSheet.create({
    container: {

    },
    headerContainer: {
        width: width,
        height: 100,
        backgroundColor: 'black',
        paddingHorizontal: 20,

    },
    title: {
        color: 'white',
        fontSize: 22,
        marginTop: 70,
        textAlign: 'center',
        fontWeight: '600'
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