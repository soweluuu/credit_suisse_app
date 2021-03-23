import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
       <View style={styles.background}>
           <View style={styles.rectangle}></View>
           <View style={styles.button}></View>
           <View style={styles.username}></View>
           <View style={styles.password}></View>
           <Text style={styles.textuser}> Username </Text>
           <Text style={styles.textpassword}> Password </Text>
           <Text style={styles.textlogin}> Log in </Text>
           <Image style={styles.logo} source={require('../assets/main_logo_white.png')} />
       </View>
    );
}

const styles = StyleSheet.create({
    textlogin: {
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        right: 267,
        bottom: 460,
        position: "absolute"
    },
    textpassword:{
        color: '#103143',
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        right: 290,
        bottom: 280,
        position: "absolute"

    },
    textuser:{
        color: '#103143',
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        right: 290,
        bottom: 370,
        position: "absolute"
        

    },
    logo:{
        width: 300,
        height: 100,
        left: 12,
        bottom: 620,
        resizeMode: 'contain'
        
        
    },
    password: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 50,
        bottom: 230,
        position: "absolute",
        borderWidth: 1,
        borderColor: '#103143',
        borderRadius: 15
    },
    username: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 50,
        bottom: 320,
        position: "absolute",
        borderWidth: 1,
        borderColor: '#103143',
        borderRadius: 15
    },
    button:{
        backgroundColor: '#003662',
        width: 300,
        height: 50,
        bottom: 70,
        position: 'absolute',
        borderRadius: 15

    },
    rectangle:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '65%',
        bottom: -15,
        position: 'absolute',
        borderRadius: 30
    },
    background: {
        flex: 1,
        backgroundColor: '#003662', 
        justifyContent: 'flex-end',
        alignItems: "center"
        
    }
})

export default WelcomeScreen;