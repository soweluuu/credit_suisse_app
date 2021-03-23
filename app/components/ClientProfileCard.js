import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text, Image, TouchableOpacity, onPress } from 'react-native';



function ClientProfileCard(props) {

    const {name, tagline, nationality, phoneNo, dateOfBirth, email} = props;

    return (
        <View style={styles.rectangle}>
            <View style={styles.rectTop}>
               <Text style={styles.user}>
                 <Icon  name="user" size={25} color="#11365F" />
               </Text>
              <View style={styles.names}>
               <Text style={styles.name}>{name} </Text>
               <Text style={styles.tagline}> {tagline} </Text>
               <Text style={styles.tagline}> Client ID: </Text>
               </View>
            </View>
            <View style={styles.rectBottom}>
            <Text style={styles.details}> Date of Birth</Text>
            <Text style={styles.details}> Nationality </Text>
            <Text style={styles.details}> Phone Number</Text>
            <Text style={styles.details}> Preferred e-mail </Text>

            </View>
          </View>
    );
}
const styles = StyleSheet.create({
    user:{
        paddingRight: 10
    },
    tagline:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        opacity: 0.75,
        fontSize: 11
    },
    rectTop:{
        
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        paddingBottom: 40
    },
    rectBottom:{
        
        alignItems: "center",
        flexWrap: "wrap"
    }, 
    name: {
        color: "#103143",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 18,
    },
    rectangle: {
        backgroundColor: '#E1E1E1',
        padding: 15,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
    }
})

export default ClientProfileCard;