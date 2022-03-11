import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

import leagueApi from '../../api/leagueApi';

export default function ResultsScreen({ navigation }: any) {
  const [value, setValue] = useState('first');
  const [season, setSeason] = useState<any>([])
  const [round, setRound] = useState<any>([])
  const [currentMarketIndex, setMarketIndex] = useState<any>();


  useEffect(() => {
    getSeason();
  }, []);

  const getSeason = async() => {
    const response = await leagueApi.get('/season/active')
    console.log(response.data.seasons[0].rounds[0])
    setSeason(response.data.seasons[0])
    setRound(response.data.seasons[0].rounds[0])
  }

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>

       <FlatList 
          data={season.rounds}
          keyExtractor={(roundItem, roundIndex) => {
            return roundIndex.toString()
          }} 
          renderItem={({ item }) => {
            let roundItem = item;

            return  <View style={appStyles.container}>
            <Text style={[appStyles.title, appStyles.league_title]}>{roundItem.title}</Text>

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

            <FlatList 
                keyExtractor={(item, index) => {
                  return index.toString()
                }} 
                data={roundItem.markets}
                renderItem={({ item, index }) => {
                    let marketItem = item;
                    return  <View style={appStyles.league_round}>
                              <Text style={appStyles.league_roundTitle}>{marketItem.title}</Text>
                              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <FlatList 
                                  keyExtractor={(marketItem, index) => {
                                    return index.toString()
                                  }} 
                                  data={marketItem.choices}
                                  renderItem={({ item }) => {
                                    return  <View style={[appStyles.league_radio, marketItem.outcome === item.id ? appStyles.league_radioOutcome : appStyles.league_radioDefault] }>
                                              <RadioButton value={item.id} status={ marketItem.outcome === item.id ? 'checked' : 'unchecked' } color='white' uncheckedColor='#777'/>
                                              <Text style={[appStyles.league_radioText, marketItem.outcome === item.id ? appStyles.league_radioTextOutcome : null] }>{item.title}</Text>
                                            </View>
                                }}>
                                </FlatList>
                              </RadioButton.Group>
                            </View>
                }}>
            </FlatList>


{/*              
            <View style={appStyles.league_round}>
              <Text style={appStyles.league_roundTitle}>United States Champsionship Match</Text>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B4C6A', padding: 5, marginBottom: 5}}>
                  <RadioButton value="first" color='white' uncheckedColor='#777' disabled/>
                  <Text style={{color: '#FFF', fontWeight: 'bold'}}>Jeff Hardy</Text>
                  <Text style={{color: '#FFF', fontWeight: 'bold', marginLeft: 'auto', marginRight: 15}}>0 point</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#CA1917', padding: 5, marginBottom: 5}}>
                  <RadioButton value="second" color='white' uncheckedColor='white' disabled/>
                  <Text style={{color: '#FFF', fontWeight: 'bold'}}>Damien Prist</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEE', padding: 5, marginBottom: 5}}>
                  <RadioButton value="second" color='white' uncheckedColor='#777' disabled/>
                  <Text>Sheamus</Text>
                </View>
              </RadioButton.Group>
            </View>
 */}


          </View>
        }}>
        </FlatList>
       

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
