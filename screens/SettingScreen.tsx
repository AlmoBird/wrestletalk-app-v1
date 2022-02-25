import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking } from 'react-native';
import appStyles from '../styles/appStyles.style';

export default function SettingScreen({ navigation }: any) {
  return (
    <View style={appStyles.goPremiumContainer}>

      <View style={appStyles.goPremiumHeader}>
        <Text style={appStyles.goPremiumHeading}>Go Premium</Text>
        <View style={appStyles.goPremiumButton}>
          <Text style={appStyles.goPremiumButtonText}>Ad free articles £2.99</Text>
        </View>
      </View>

      <View style={appStyles.container}>
        <Text style={appStyles.title}>Settings</Text>

        <View style={appStyles.authActionContainer}>
          <TouchableOpacity style={appStyles.authActionButton} onPress={() => { navigation.navigate('Register')}} >
            <Text style={appStyles.authActionButtonText}>REGISTER</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={appStyles.authActionButton} onPress={() => { navigation.navigate('Login')}} >
            <Text style={appStyles.authActionButtonText}>LOGIN</Text>
          </TouchableOpacity> 
        </View>
        
        <Button onPress={() => { navigation.navigate('')}} title="ADD FAVOURITES" color="#000" /> 
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

});
