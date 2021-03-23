import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, onPress } from 'react-native';
import ClientProfileCard from "../components/ClientProfileCard";


function ClientProfileScreen(props) {
    return (
        <View style={styles.background}>
        
          <View style={styles.cardWrapper}>

            <Text style={styles.textProfile}> Profile </Text>
            <ClientProfileCard name={'Li Lin'} tagline={680100}/>

           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    textProfile:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
    },
    cardWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },
    background:{
        backgroundColor:  '#FFFEFE',
        flex: 1
    }
})
    

export default ClientProfileScreen;