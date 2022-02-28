import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

export default function CurrentRoundScreen({ navigation }: any) {
  const [value, setValue] = React.useState('first');
  const [showRound, setShowRound] = React.useState(true);

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>


        {
          showRound ? 

            <View>
              <Text style={[appStyles.title, appStyles.league_title]}>Wrestle League</Text>
              <Text style={appStyles.league_info}>Login via Patreon to join the Wrestle League and go head-to-head with fellow patrons and the WrestleTalk team.</Text>

              <View style={[appStyles.league_button, appStyles.league_button__become]}>
                <Text style={appStyles.league_button__text}>Become a Patron</Text>
              </View>

              <TouchableOpacity onPress={() => setShowRound(!showRound)}>
                <View style={[appStyles.league_button, appStyles.league_button__login]}>
                  <Text style={appStyles.league_button__text}>Login with Patreon</Text>
                </View>
              </TouchableOpacity>
            </View>

          : 

            <View>
              <Text style={[appStyles.title, appStyles.league_title]}>Extreme Rules 2021</Text>

              <View style={appStyles.league_roundDetails}>
                <Text>This round closes in </Text>
                
                <View style={appStyles.league_roundTime}>
                  <LinearGradient
                    colors={["#CA1917", "#E74514"]}
                    start={[0.5, 0]}
                    end={[1, 1]}
                    style={appStyles.league_bg_gradient}
                    >
                    <Text style={appStyles.league_roundTime__text}>2d:11h:35m:28s</Text>
                  </LinearGradient>
                </View>
              </View>


              <View style={appStyles.league_round}>
                <Text style={appStyles.league_roundTitle}>SmackDown Women's Champsionship Match</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B4C6A', padding: 5, marginBottom: 5}}>
                    <RadioButton value="first" color='white' uncheckedColor='#777'/>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Becky Lynch (c)</Text>
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
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEE', padding: 5, marginBottom: 5}}>
                    <RadioButton value="second" color='white' uncheckedColor='#777'/>
                    <Text>Damien Prist</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEE', padding: 5, marginBottom: 5}}>
                    <RadioButton value="second" color='white' uncheckedColor='#777'/>
                    <Text>Sheamus</Text>
                  </View>
                </RadioButton.Group>
              </View>
            </View>
        }
         
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
