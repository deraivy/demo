import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
const width = Dimensions.get('window').width


const Service = () => {
    const menu = [
        {
            id: 1,
            title: "View BVN",
            subtitle: "Quick request to see your BVN",
            iconName: "lock"
        },

        {
            id: 2,
            title: "Request Statement",
            subtitle: "Statement of Account to your email or branch",
            iconName: "sticky-note-o"
        },
        {
            id: 3,
            title: "Card Services",
            subtitle: "Request cards, manage your cards",
            iconName: "credit-card"
        },


    ]

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Service Request </Text>
            </View>
            {menu.map((data, value) => (
                <View key={value}>
                    <View style={styles.root}>
                        <View style={styles.box}>

                            <FontAwesome style={styles.icon} name={data.iconName} size={24} color="black" />
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

export default Service

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