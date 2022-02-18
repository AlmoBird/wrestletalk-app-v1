import { StyleSheet, Image, Button, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function HoodiesScreen() {

  const product = {
    image: 'https://cdn.shopify.com/s/files/1/0070/5698/2143/products/13342B_1000x1000_crop_center.jpg?v=1614703153',
    name: 'Stone Cold Steve Austin 3:16 Retro T-Shirt',
    price: '£25.00',
    id: 1
  };

  return (
    <ScrollView style={styles.productContainer}>

      <View style={styles.productHeader}>
        <Image style={styles.productImage} source={{uri: product.image}}></Image>
        <View style={styles.productMainDetails}>
          <Text style={styles.productName} >{ product.name}</Text>
          <Text style={styles.productPrice} >{ product.price}</Text>
        </View>

        <Button onPress={console.log} title="ADD TO CART" color="#000" /> 
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#FFF'
  },
  productImage: {
    height: 250,
    resizeMode: 'contain'
  },
  productHeader: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20
  },
  productMainDetails: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: 'red',
    borderWidth: 2
  },
  productName: {
      color: '#000',
      fontSize: 20,
  },
  productPrice: {
      color: '#000',
      textAlign: 'right',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
  }
});
