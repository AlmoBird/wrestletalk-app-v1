import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SubTabComponent({ navigation }: any) {
    return (
        <View style={styles.SubTabContainer}>
            <Text style={styles.subTabLink}>Feature</Text>
            <Text style={styles.subTabLink}>Latest News</Text>
            <Text style={styles.subTabLink}>Video</Text>
            <Text style={styles.subTabLink}>Audio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    SubTabContainer: {
        backgroundColor: '#EEE',
        height: 50,
        top: 3,
        left: -17,
        width: '110%',
        paddingHorizontal: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
     },
     subTabLink: {
        textTransform: 'uppercase'
     }
});
  