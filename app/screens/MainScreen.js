import React from 'react';
import {View, Text} from "react-native";
function MainScreen(props) {
    return (
        <View>
            <Text style={styles.text}> MAin screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 15,
        color: "black"
    }
})

export default MainScreen;