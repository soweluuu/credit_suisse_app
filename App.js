import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClientListScreen from './app/screens/ClientListScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ClientProfileScreen from "./app/screens/ClientProfileScreen";

import {Home} from "./app/screens/Home"

const Stack = createStackNavigator();


export default function App() {
  return (
    <ClientProfileScreen />
  );
}


