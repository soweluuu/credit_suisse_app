import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import ClientListScreen from "../screens/ClientListScreen"

import {Home} from "../screens/Home"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component
            />
        </Tab.Navigator>
    )
}

export default Tabs;