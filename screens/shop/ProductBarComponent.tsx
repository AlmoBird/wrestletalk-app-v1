import React from "react";
import { Image, ImageBackground, StyleSheet, FlatList, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from '../../components/Themed';

export default function ProductBarComponent() {


    return (        
        <View style={styles.productBarContainer}>
            <View style={styles.productBarItem}><Text style={styles.productBarText}>Filter</Text></View>
            <View style={styles.productBarItem}><Text style={styles.productBarText}>Cart </Text><Text style={styles.productBarCount}>2</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    productBarContainer: {
        position: 'absolute',
        bottom: 9,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingVertical: 4
    },
    productBarItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        backgroundColor: '#FFF',
        borderRightWidth: 1,
        borderRightColor: '#DDD'
    },
    productBarText: {
        textTransform: 'uppercase',
        color: '#AAA',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 13
    }, 
    productBarCount: {
        paddingHorizontal: 5,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'red'
    }
});
  