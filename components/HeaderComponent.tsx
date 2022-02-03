import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function HeaderComponent({ navigation }: any) {
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/images/wrestletalk-logo.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    },
    logo: {
        width: 170,
        height: 50,
        marginVertical: 10,
        resizeMode: 'contain'
    }
});
  