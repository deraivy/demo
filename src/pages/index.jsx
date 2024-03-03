import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('screen').width



const Index = () => {
  const chi = [
    {
      id: 1,
      title: "Transfer",
      iconName: "swap-horizontal"
    },

    {
      id: 2,
      title: "Bills Payment",
      iconName: "wallet-outline"
    },
    {
      id: 3,
      title: "Airtime",
      iconName: "phone-portrait-outline"
    },
    {
      id: 4,
      title: "Gaming & sport",
      iconName: "game-controller-outline"
    },
    {
      id: 5,
      title: "Data",
      iconName: "laptop-outline" 
    },
    {
      id: 6,
      title: "Transaction History",
      iconName: "laptop-outline" 
    },

  ]
  const chis = [];
  for (let i = 0; i < chi.length; i += 2) {
    chis.push(chi.slice(i, i + 2));
  }



  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <AntDesign name="user" size={24} color="white" style={styles.icn} />
          </View>
          <View style={styles.join}>
            <Text style={styles.title}>Good Afternoon</Text>
            <Text style={styles.title}>Nwanoroh Chidera</Text>
          </View>
          <AntDesign name="menufold" size={24} color="white" />
        </View>
      </View>

      <View style={styles.root}>
        {chis.map((chi, index) => (
          <View key={index}>
            {chi.map((item, itemIndex) => (
              <View key={itemIndex}>
                <TouchableOpacity style={styles.box} onPress={() => {
                  if (index === 1) {
                    navigation.navigate('Transfer');
                  } 
                  else if (index === 2) {
                    navigation.navigate('Airtime');
                  } 
                }}>
                  <Ionicons style={styles.icon} name={item.iconName} size={24} color="black" />
                  <Text style={styles.name}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}

      </View>

      <View style={styles.acct}>
        <View style={styles.flex}>
          <Text style={styles.txt}>200,000.00</Text>
          <Text style={styles.txtOne}>Current</Text>
        </View>
        <Text style={styles.txtTwo}>NWANOROH FAVOUR CHIDERA</Text>
        <Text style={styles.txtTwo}>Account No: 4002027504</Text>

      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 200,
    width: width,
    backgroundColor: 'black',
    paddingHorizontal: 20
  },
  header: {
    marginTop: 70,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 50,

  },
  box: {
    width: 88,
    height: 73,
    backgroundColor: '#dddddd',
    borderRadius: 10,
    marginBottom:15
  },
  icon: {
    alignSelf: 'center',
    marginTop: 10
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5
  },
  join: {
    flex: 1
  },
  icn: {
    alignSelf: 'center',
    marginTop: 5
  },
  title: {
    color: 'white'
  },
  root: {
    width: 330,
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: -50,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { height: 1, width: 1 },
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  acct: {
    width: 350,
    height: 150,
    backgroundColor: 'black',
    marginTop: 50,
    alignSelf: 'center',
    borderRadius: 20,
    paddingHorizontal: 20
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
  },
  txt: {
    color: 'white',
    fontSize: 20
  },
  txtOne: {
    color: 'white',
    marginBottom: 20
  },
  txtTwo: {
    color: 'white',
    marginTop: 5
  }
})