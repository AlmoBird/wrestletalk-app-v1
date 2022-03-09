import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

import leagueApi from '../../api/leagueApi';

export default function ResultsScreen({ navigation }: any) {
  const [value, setValue] = useState('first');

  const seasonId = '143eb23a-d354-4386-a1b8-2d102490683d';
  const [season, setSeason] = useState<any>([])
  const [round, setRound] = useState<any>([])

  useEffect(() => {
    getSeason();
  }, []);

  const getSeason = async() => {
    const response = await leagueApi.get('/season/' + seasonId)
    console.log(response.data.season.rounds[0])
    setSeason(response.data.season)
    setRound(response.data.season.rounds[0])
  }

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>
            <Text style={[appStyles.title, appStyles.league_title]}>{round.title}</Text>

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
                keyExtractor={user => user.rank + user.name + user.points} 
                data={round.markets}
                renderItem={({ item }) => {
                    return  <View style={appStyles.league_round}>
                              <Text style={appStyles.league_roundTitle}>{item.title}</Text>
                              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                              <FlatList 
                                keyExtractor={user => user.rank + user.name + user.points} 
                                data={item.choices}
                                renderItem={({ item }) => {
                                  return  <View style={appStyles.league_radioDefault}>
                                            <RadioButton value="second" color='white' uncheckedColor='#777' disabled/>
                                            <Text>{item.title}</Text>
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

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
