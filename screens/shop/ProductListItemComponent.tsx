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

    let productsView = [];

    for(let i = 0; i < products.length; i++){
        productsView.push(
            <View style={styles.productItem} key={i}>
                <Image style={styles.productImage} source={{uri: products[i].image}}></Image>
                <Text style={styles.productName} >{ products[i].name}</Text>
                <Text style={styles.productPrice} >{ products[i].price}</Text>
                <Button onPress={console.log} title="ADD TO CART" color="#000" />
            </View>
        )
	}

    return (        
        <ScrollView>
            <ImageBackground style={styles.hero} source={{uri: imageURL}}>
                <Text style={styles.heroHeadline} >{headline}</Text>
            </ImageBackground>

            <View style={styles.productItemViewContainer}>        
                { productsView } 
            </View>
        </ScrollView>
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
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#EEE',
        padding: '1.5%'
    },
    productItem: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        margin: '1.5%',
        width: '45%',
        padding: '5%',
        justifyContent: 'space-between'
    },
    productImage: {
        height: 130,
        resizeMode: 'contain'
    },
    productName: {
        color: '#000',
        textAlign: 'center'
    },
    productPrice: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    addToCart: {
        marginTop: '5%',
        alignSelf: 'flex-end'
    }
});
  