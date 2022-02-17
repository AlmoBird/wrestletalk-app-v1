import React from "react";
import { Image, ImageBackground, StyleSheet, FlatList, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from '../../components/Themed';

export default function ProductListItemComponent() {

    const headline = 'T-SHIRTS';
    const imageURL = 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/Austin_Austin-316_480x.jpg?v=1614703166';
    const products = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/13342B_1000x1000_crop_center.jpg?v=1614703153',
            name: 'Stone Cold Steve Austin 3:16 Retro T-Shirt',
            price: '£25.00',
            id: 1
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/mockup-ee547702_1000x1000_crop_center.jpg?v=1603220739',
            name: 'D-Generation X "HBK" T-Shirt',
            price: '£21.99',
            id: 2
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/unisex-premium-t-shirt-black-heather-front-6065380664c99_1000x1000_crop_center.jpg?v=1617246219',
            name: 'nWo "Wolfpac Attack" T-Shirt',
            price: '£21.99',
            id: 3
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/mockup-dae023cb_1000x1000_crop_center.jpg?v=1603221480',
            name: 'X-Pac "D-Generation-X" Photo T-shirt',
            price: '£23.00',
            id: 4
        }
    ]


    return (        
        <SafeAreaView>
            <ImageBackground style={styles.hero} source={{uri: imageURL}}>
                <Text style={styles.heroHeadline} >{headline}</Text>
            </ImageBackground>

            <View style={styles.productItemViewContainer}>
                <FlatList 
                    style={styles.productItemFlatListContainer}
                    keyExtractor={product => product.name} 
                    data={products}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.productItem}>
                                <Image style={styles.productImage} source={{uri: item.image}}></Image>
                                <Text style={styles.productName} >{item.name}</Text>
                                <Text style={styles.productPrice} >{item.price}</Text>
                                <Button onPress={console.log} title="ADD TO CART" color="#000" />
                            </View>
                        ) 
                    }}
                ></FlatList>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hero: {
        width: '100%',
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroHeadline: {
        bottom: 0,
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -2, height: -2},
        textShadowRadius: 10,
    },
    productItemViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    productItemFlatListContainer: {
        backgroundColor: '#FFF',
        width: 200
    },
    productItemContainer: {
        backgroundColor: '#CCC',
        width: '50%'
    },
    productItem: {
        backgroundColor: '#FFF',
        width: '50%'
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain'
    },
    productName: {
        color: '#000'
    },
    productPrice: {
        color: '#000'
    }
});
  