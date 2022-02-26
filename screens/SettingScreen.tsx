import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Switch } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 

import appStyles from '../styles/appStyles.style';

export default function SettingScreen({ navigation }: any) {

  const [checked, setChecked] = useState({
    breakingNews: false,
    livePPV: false,
    results: false,
    liveTVResults: false,
    theRock: false,
    johnCena: false,
  });

  return (
    <ScrollView style={appStyles.goPremiumContainer}>

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


        <Text style={appStyles.subheading}>Notifications</Text>
        <Text style={appStyles.text}>For important news for these following topics</Text>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}>Breaking News</Text>
          <Switch
            value={checked.breakingNews}
            onValueChange={(value) => setChecked({...checked, breakingNews: value})}
          />
        </View>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}>Live PPV</Text>
          <Switch
            value={checked.livePPV}
            onValueChange={(value) => setChecked({...checked, livePPV: value})}
          />
        </View>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}>Results</Text>
          <Switch
            value={checked.results}
            onValueChange={(value) => setChecked({...checked, results: value})}
          />
        </View>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}>Live TV Results</Text>
          <Switch
            value={checked.liveTVResults}
            onValueChange={(value) => setChecked({...checked, liveTVResults: value})}
          />
        </View>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}><FontAwesome name="star" size={16} color="#555" /> The Rock</Text>
          <Switch
            value={checked.theRock}
            onValueChange={(value) => setChecked({...checked, theRock: value})}
          />
        </View>

        <View style={appStyles.settingsSwitchContainer}>
          <Text style={appStyles.settingsSwitchText}><FontAwesome name="star" size={16} color="#555" /> John Cena</Text>
          <Switch
            value={checked.johnCena}
            onValueChange={(value) => setChecked({...checked, johnCena: value})}
          />
        </View>

        <View style={appStyles.lastButtonContainer}>
          <Button onPress={() => { navigation.navigate('')}} title="ADD FAVOURITES" color="#000" /> 
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
