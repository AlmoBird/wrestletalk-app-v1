import React, { useState } from "react";
import { StyleSheet, Image, Button, ScrollView, Picker, Text, View, FlatList, TouchableOpacity, SectionList, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import ProductBarComponent from "./ProductBarComponent";

export default function HoodiesScreen() {

  const product = {
    image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/13342B_1000x1000_crop_center.jpg?v=1614703153',
    name: 'Stone Cold Steve Austin 3:16 Retro T-Shirt',
    price: '£25.00',
    id: 1
  };

  const sections = [
    { name: 'Description', 'content': 'Description content goes here' },
    { name: 'Reviews', 'content': 'Reviews content goes here' },
    { name: 'Size Chat', 'content': 'Size content goes here' },
    { name: 'Shirt Details', 'content': 'Shirt content goes here' },
    { name: 'Other Information', 'content': 'Other content goes here' },
]

  const [colorSelectedValue, setColorSelectedValue] = useState("Black");
  const [sizeSelectedValue, setSizeSelectedValue] = useState("L - Large");
  const [index, setIndex] = React.useState(0);


  return (
    <ScrollView style={styles.productContainer}>

      {/* Header */}

      <Ionicons style={styles.arrowBack} name="arrow-back-circle" size={50} color="red" />

      <View style={styles.productHeader}>
        <ImageBackground style={styles.productImage} source={{uri: product.image}}>
          <Ionicons style={styles.productImageNext} name="chevron-forward-circle-sharp" size={36} color="#CCC" />
        </ImageBackground>

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

      {/* TABS */}

      <FlatList 
          style={styles.sectionList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={section => section.name} 
          data={sections}
          renderItem={({ item }) => {
              return <TouchableOpacity onPress={() => {
                setIndex(sections.findIndex(section => section.name === item.name ))
              }}>
                <Text style={styles.sectionItem}>{item.name}</Text>
              </TouchableOpacity>
          }}
      ></FlatList>

      <View style={styles.sectionContent}>
        <Text>{sections[index].content}</Text>
      </View>
  
      <ProductBarComponent></ProductBarComponent>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#FFF',
    paddingTop: 20
  },
  arrowBack: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 10,
  },
  productImage: {
    height: 250,
    resizeMode: 'contain',
  },
  productImageNext: {
    position: 'absolute',
    zIndex: 999,
    top: 100,
    right: 0,
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
    justifyContent: 'center' 
  },
  sectionList: {
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 20,
    fontSize: 12,
    paddingRight: 80,
    backgroundColor: '#F3F3F3'
  },
  sectionItem: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 4,
    textTransform: 'uppercase',
    fontSize: 14
  },
  sectionContent: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
