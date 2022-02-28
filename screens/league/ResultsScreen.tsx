import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

export default function ResultsScreen({ navigation }: any) {
  const [value, setValue] = React.useState('first');

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>
            <Text style={[appStyles.title, appStyles.league_title]}>WWE Survivor Series 2021</Text>

            <View style={appStyles.league_roundDetails}>
              <Text>You scored </Text>
              
              <View style={appStyles.league_roundTime}>
                <LinearGradient
                  colors={["#CA1917", "#E74514"]}
                  start={[0.5, 0]}
                  end={[1, 1]}
                  style={appStyles.league_bg_gradient}
                  >
                  <Text style={appStyles.league_roundTime__text}>4 pts</Text>
                </LinearGradient>
              </View>
            </View>


            <View style={appStyles.league_round}>
              <Text style={appStyles.league_roundTitle}>SmackDown Women's Champsionship Match</Text>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#CA1917', padding: 5, marginBottom: 5}}>
                  <RadioButton value="first" color='white' uncheckedColor='#777'/>
                  <Text style={{color: '#FFF', fontWeight: 'bold'}}>Becky Lynch (c)</Text>
                  <Text style={{color: '#FFF', fontWeight: 'bold', marginLeft: 'auto', marginRight: 15}}>+1 point</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEE', padding: 5, marginBottom: 5}}>
                  <RadioButton value="second" color='white' uncheckedColor='#777'/>
                  <Text>Biance Belair</Text>
                </View>
              </RadioButton.Group>
            </View>


            <View style={appStyles.league_round}>
              <Text style={appStyles.league_roundTitle}>United States Champsionship Match</Text>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B4C6A', padding: 5, marginBottom: 5}}>
                  <RadioButton value="first" color='white' uncheckedColor='#777'/>
                  <Text style={{color: '#FFF', fontWeight: 'bold'}}>Jeff Hardy</Text>
                  <Text style={{color: '#FFF', fontWeight: 'bold', marginLeft: 'auto', marginRight: 15}}>0 point</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#CA1917', padding: 5, marginBottom: 5}}>
                  <RadioButton value="second" color='white' uncheckedColor='white'/>
                  <Text style={{color: '#FFF', fontWeight: 'bold'}}>Damien Prist</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEE', padding: 5, marginBottom: 5}}>
                  <RadioButton value="second" color='white' uncheckedColor='#777'/>
                  <Text>Sheamus</Text>
                </View>
              </RadioButton.Group>
            </View>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
