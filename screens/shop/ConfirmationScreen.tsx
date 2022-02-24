import React, { useState } from "react";
import { StyleSheet, FlatList, Button, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

import appStyles from '../../styles/appStyles.style';

export default function ConfirmationScreen({navigation}: any) {
  const sortOptions = [
    { name: 'Items sold' },
    { name: 'Price' },
    { name: 'Last added' },
  ]

  const products = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/13342B_1000x1000_crop_center.jpg?v=1614703153',
        name: 'Stone Cold Steve Austin 3:16 Retro T-Shirt',
        price: '£25.00',
        colour: 'Black',
        size: 'Medium',
        quantity: 1,
        id: 1
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/mockup-ee547702_1000x1000_crop_center.jpg?v=1603220739',
        name: 'D-Generation X "HBK" T-Shirt',
        price: '£21.99',
        colour: 'White',
        size: 'Large',
        quantity: 1,
        id: 2
    }
  ];

  const [sortActiveValue, setSortActiveValue] = useState(sortOptions[0].name);

  function isActive(itemName: string): boolean {
      return itemName === sortActiveValue;
  }

  return (        
    <View style={styles.productFiltersContainer}>
        <View style={styles.productFilterHeader}>
            <Text style={appStyles.title}>Order Confirmation</Text>
        </View>

        <View style={styles.productFilterSection}>
            <FlatList 
                style={styles.sortOptionsList}
                keyExtractor={product => product.name} 
                data={products}
                renderItem={({ item }) => {
                    return  <View style={styles.productInCart}>
                              <Image style={[styles.productImage, styles.productDetails]} source={{uri: item.image}}></Image>
                              <View style={[styles.productMainDetails, styles.productDetails]}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productOptionsDetails}>{item.size} / {item.colour}</Text>
                              </View>
                              <View style={styles.productDetails}><Text style={styles.productFilterPriceInput}>{item.price}</Text></View>
                            </View>
                }}
            ></FlatList>

          
          <View style={appStyles.confirmationPaymentSection}>
            <View style={appStyles.paymentSection}>
              <Text style={[appStyles.text, appStyles.label]}>Subtotal</Text>
              <Text style={appStyles.price}>£50.00</Text>
            </View>
            <View style={appStyles.paymentSection}>
              <Text style={[appStyles.text, appStyles.label]}>Shipping</Text>
              <Text style={appStyles.price}>£4.99</Text>
            </View>
            <View style={[appStyles.totalSection, appStyles.totalSectionConfirmation]}>
              <Text style={[appStyles.text, appStyles.totalLabel]}>Total</Text>
              <Text style={appStyles.totalPrice}><Text style={appStyles.totalCurrency}>GBP</Text> £54.99</Text>
            </View>
          </View>
          
        </View>

        <Button onPress={() => { navigation.navigate('Checkout')}} title="RETURN TO MAIN PAGE" color="#000" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  productFiltersContainer: {
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
    borderWidth: 1,
    borderColor: '#EEE',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  productFilterSectionLast: {
      marginVertical: 30
  },
  sortOptionsList: {

    },

  productFilterPriceContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
  },
  productFilterPriceInput: {
      fontSize: 16,
      fontWeight: 'bold'
  },
  continueShopping: {
      textTransform: 'uppercase',
      color: '#777',
      textAlign: 'center',
      padding: 20
  },

  productInCart: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingVertical: 20
  },
  productImage: {
    width: 80,
    height: 110,
    resizeMode: 'cover'
  },
  productDetails: {
    
  },
  productMainDetails: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'flex-start'
  },
  productName: {
    width: '100%',
    fontSize: 16
  },
  productOptionsDetails: {
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 10,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  productQuantityContainer: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#AAA',
    borderWidth: 1,
    height: 27
  },
  productQuantityChange: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  productQuantityDelete: {
    position: 'absolute',
    right: -30
  }
});
