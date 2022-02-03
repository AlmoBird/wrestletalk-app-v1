import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SubTabComponent({ navigation }: any) {
    return (
        <View style={styles.SubTabContainer}>
            <Text>Feature</Text>
            <Text>Latest News</Text>
            <Text>Video</Text>
            <Text>Audio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    SubTabContainer: {
        backgroundColor: '#EEE',
        flex: 1,
        left: -17,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
});
  