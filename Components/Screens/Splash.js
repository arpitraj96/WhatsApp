import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation()
        useEffect(() => {
        setTimeout(() => {
        navigation.navigate("Chats");
        }, 2000);
    })

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={require('../Resorces/lock.png')} style={styles.lockIcon}/>
                <Text style={styles.title}>WhatsApp Locked</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Image source={require('../Resorces/fingerprint.png')} style={styles.fingerIcon}/>
                <Text style={styles.SubTitle}>Touch the fingerprint sensor</Text>
            </View>

        </View>
    )
}

export default Splash
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#075e54',
        // justifyContent:"center",
        alignItems: 'center',
    },
    upperContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // height: hp(20),
    },
    lockIcon: {
        width: hp(6),
        height: hp(6),
        marginTop: hp(6),
    },
    title: {
        fontSize: hp(3),
        color: 'white',
        marginTop: hp(4),
        // justifyContent:"center",
    },
    lowerContainer: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(50),
    },
    fingerIcon: {
        width: hp(6),
        height: hp(6),
        marginBottom: hp(2),
    },
    SubTitle: {
        // position: 'absolute',
        fontSize: 20,
        color: '#989797',
        alignItems: 'center'
        // justifyContent:"center",
    },
})