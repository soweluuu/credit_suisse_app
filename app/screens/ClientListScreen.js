import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text, Image, TouchableOpacity, onPress } from 'react-native';
import ClientRectangleComponent from '../components/ClientRectangleComponent'
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs'


function ClientListScreen(props) {
    
    return (
        <View  style={styles.background}>
          <View style={styles.clientsWrapper}>
            <Text style={styles.textClients}> Clients </Text>
            <View style={styles.clients}> 
            <ClientRectangleComponent name={'Li Lin'} tagline={'615081'}/>
            <ClientRectangleComponent name={'Utemaro Watasi'} tagline={'615082'}/>
            <ClientRectangleComponent name={'Hernandez Ximena'} tagline={'615083'}/>
            <ClientRectangleComponent name={'Montandon Rachael'} tagline={'615084'}/>
            <ClientRectangleComponent name={'Stager Isabelle'} tagline={'615085'}/>
            <ClientRectangleComponent name={'Surbeck Peter'} tagline={'615086'}/>
            <ClientRectangleComponent name={'Juric Jan'} tagline={'615087'}/>
            <ClientRectangleComponent name={'Travers Millard'} tagline={'615088'}/>
            <ClientRectangleComponent name={'Name Surname'} tagline={'615089'}/>
            </View>
          </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    clients:{
        marginTop: 60
    },
    clientsWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },  

    textClients:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        
        
    },
    background: {
        backgroundColor: '#FFFEFE',
        flex: 1, 
        
        

        
    }
});

export default ClientListScreen;