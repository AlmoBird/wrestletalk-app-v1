import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons'; 

export default function HeaderComponent({ navigation }: any) {

    const [showSearch, setShowSearch] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/wrestletalk-logo.png')}></Image>

            <View style={styles.logoContainer}>
                {
                    showSearch ? 
                    <Entypo style={styles.searchIcon} name="cross" size={24} color="white" onPress={() => setShowSearch(!showSearch)} /> : 
                    <Ionicons style={styles.searchIcon} name="ios-search" size={24} color="white" onPress={() => setShowSearch(!showSearch)} />
                }
                <Entypo style={styles.settingsIcon} name="dots-three-vertical" size={24} color="white" onPress={() => setShowSettings(!showSettings)} />
            </View>
             
            {showSearch ? <TextInput style={styles.searchInput} placeholder="Search WrestleTalk" autoFocus autoCapitalize="none" autoCorrect={false}></TextInput> : null}
            {
                showSettings ? 
                <View style={styles.settingsDropdown}>
                    <Text style={styles.settingsItem}>Settings</Text>
                    <Text style={styles.settingsItem}>Settings</Text>
                </View>
                : 
                null
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        left: -17,
        paddingLeft: 20
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 170,
        height: 50,
        marginVertical: 10,
        resizeMode: 'contain'
    },
    searchIcon: {
        width: 40
    },
    settingsIcon: {
        width: 40
    },
    searchInput: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 100,
        left: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        borderRadius: 3
    },
    settingsDropdown: {
        position: 'absolute',
        top: 30,
        right: 20,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    settingsItem: {
        padding: 20,
        fontSize: 18,
    }
});
  