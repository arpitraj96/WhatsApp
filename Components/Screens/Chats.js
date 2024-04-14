import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Chats = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' />
      <View style={styles.headingSection}>
        <Text style={styles.title}>WhatsApp</Text>
        <Image source={require('../Resorces/camera.png')} style={styles.cameraIcon} />
        <Image source={require('../Resorces/dots.png')} style={styles.menuIcon} />
      </View>
      <View style={styles.searchSection}>
        <Image source={require('../Resorces/search.png')} style={styles.searchIcon} />
        <Text style={styles.searchLabel}>Search....</Text>
      </View>
      <View style={styles.chatSection}>
        {/* Chat content */}
      </View>
      <View style={styles.navSection}>
        {/* Navigation content */}
      </View>
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headingSection: {
    flexDirection: 'row',
    marginTop: hp(2),
    justifyContent: 'space-between',
    paddingHorizontal: hp(2), // Add horizontal padding
  },
  title: {
    fontSize: hp(3),
    color: 'white',
    fontWeight: 'bold'
  },
  cameraIcon: {
    width: hp(5),
    height: hp(5),
    left: hp(10),
    tintColor: 'white',
  },
  menuIcon: {
    width: hp(5),
    height: hp(5),
  },
  searchSection: {
    height: hp(7),
    backgroundColor: 'darkgray',
    borderRadius: hp(3),
    marginTop: hp(2),
    paddingHorizontal: hp(2), // Add horizontal padding
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: hp(4),
    height: hp(4),
    tintColor: 'gray',
  },
  searchLabel: {
    fontSize: hp(2),
    fontWeight: '400',
    color: 'gray',
    marginLeft: hp(1), // Add left margin
  },
  chatSection: {
    flex: 1, // Take remaining space
    // backgroundColor: 'green',
  },
  navSection: {
    height: hp(5),
    backgroundColor: 'red',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
})