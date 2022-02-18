import React, { useState } from "react";
import { StyleSheet, Image, Button, ScrollView, Picker, Text, View} from 'react-native';

export default function HoodiesScreen() {

  const product = {
    image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/13342B_1000x1000_crop_center.jpg?v=1614703153',
    name: 'Stone Cold Steve Austin 3:16 Retro T-Shirt',
    price: '£25.00',
    id: 1
  };

  const [colorSelectedValue, setColorSelectedValue] = useState("Black");
  const [sizeSelectedValue, setSizeSelectedValue] = useState("L - Large");


  return (
    <ScrollView style={styles.productContainer}>

      <View style={styles.productHeader}>
        <Image style={styles.productImage} source={{uri: product.image}}></Image>

        <View style={styles.productMainDetails}>
          <Text style={styles.productName} >{ product.name}</Text>
          <Text style={styles.productPrice} >{ product.price}</Text>
        </View>

        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownItem}>
            <Picker
              selectedValue={colorSelectedValue}
              onValueChange={(itemValue, itemIndex) => setColorSelectedValue(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Black" value="Black" />
              <Picker.Item label="Blue" value="Blue" />
            </Picker>
          </View>

          <View style={styles.dropdownItem}>
            <Picker
              selectedValue={sizeSelectedValue}
              onValueChange={(itemValue, itemIndex) => setSizeSelectedValue(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="L - Large" value="L - Large" />
              <Picker.Item label="M - Medium" value="M - Medium" />
            </Picker>
          </View>
        </View>
        
        <Button onPress={console.log} title="ADD TO CART" color="#000" /> 
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#FFF',
    paddingTop: 20
  },
  productImage: {
    height: 250,
    resizeMode: 'contain'
  },
  productHeader: {
    backgroundColor: '#FFF',
    paddingHorizontal: 30
  },
  productMainDetails: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    marginVertical: 10
  },
  productName: {
    color: '#666',
    fontSize: 20,
    flex: 1,
    paddingRight: 20
  },
  productPrice: {
    color: '#000',
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  dropdownItem: { 
    height: 40, 
    width: '48%', 
    borderWidth: 2, 
    borderColor: '#CCC', 
    display: 'flex', 
    justifyContent: 'center' }
});
