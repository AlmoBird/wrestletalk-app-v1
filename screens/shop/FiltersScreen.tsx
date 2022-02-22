import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, FlatList, ScrollView, Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

export default function FiltersScreen() {

    const sortOptions = [
        { name: 'Items sold' },
        { name: 'Price' },
        { name: 'Last added' },
    ]
    const [sortActiveValue, setSortActiveValue] = useState(sortOptions[0].name);

    function isActive(itemName: string): boolean {
        return itemName === sortActiveValue;
    }

    return (        
        <View style={styles.productFiltersContainer}>
            <View style={styles.productFilterHeader}>
                <Text style={styles.productFilterHeaderText}>Filter</Text>
            </View>

            <View style={styles.productFilterSection}>
                <Text style={styles.productFilterLabel}>Search</Text>
                <TextInput style={styles.productFilterInput} placeholder="Keyword" autoCapitalize="none" autoCorrect={false}></TextInput>
                <Ionicons style={styles.productFilterSearchIcon} name="ios-search" size={20} color="#999" />
            </View>

            <View style={styles.productFilterSection}>
                <Text style={styles.productFilterLabel}>Sort by</Text>
                <FlatList 
                    style={styles.sortOptionsList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={option => option.name} 
                    data={sortOptions}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => setSortActiveValue(item.name)}>
                                    <Text style={ isActive(item.name) ? styles.sortOptionsItemActive : styles.sortOptionsItem}>{item.name}</Text>
                                </TouchableOpacity>
                    }}
                ></FlatList>
            </View>

            <View style={[styles.productFilterSection, styles.productFilterSectionLast]}>
                <Text style={styles.productFilterLabel}>Price Range</Text>
                <View style={styles.productFilterPriceContainer}>
                    <View style={styles.productFilterPriceBlock}>
                        <FontAwesome5 style={styles.productFilterPriceInputPound} name="pound-sign" size={13} color="black" />
                        <TextInput style={styles.productFilterPriceInput} placeholder="Lowest" autoCapitalize="none" autoCorrect={false}></TextInput>
                    </View>
                    <View style={styles.productFilterPriceBlock}>
                        <FontAwesome5 style={styles.productFilterPriceInputPound} name="pound-sign" size={13} color="black" />
                        <TextInput style={styles.productFilterPriceInput} placeholder="Highest" autoCapitalize="none" autoCorrect={false}></TextInput>
                    </View>
                </View>
            </View>

            <Button onPress={console.log} title="" color="#000" /> 
            <Text style={styles.continueShopping}>Continue Shopping</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    productFiltersContainer: {
        position: 'absolute',
        zIndex: 999,
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#FFF',
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    productFilterHeader: {

    },
    productFilterHeaderText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    productFilterSection: {
        marginTop: 30
    },
    productFilterSectionLast: {
        marginBottom: 30
    },
    productFilterLabel: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    productFilterInput: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        height: 40
    },
    productFilterSearchIcon: {
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    sortOptionsList: {
        fontSize: 12,
        paddingRight: 80,
        marginTop: 10
      },
    sortOptionsItem: {
        paddingVertical: 5,
        paddingHorizontal: 9,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    sortOptionsItemActive: {
        paddingVertical: 5,
        paddingHorizontal: 9,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 5,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: '#FFF'
    },
    productFilterPriceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    productFilterPriceBlock: {
        width: '48%'
    },
    productFilterPriceInputPound: {
        position: 'absolute',
        bottom: 14
    },
    productFilterPriceInput: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        height: 40,
        paddingLeft: 20
    },
    continueShopping: {
        textTransform: 'uppercase',
        color: '#777',
        textAlign: 'center',
        padding: 20
    }
});
  