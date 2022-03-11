import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from 'expo-web-browser';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

import leagueApi from '../../api/leagueApi';

export default function CurrentRoundScreen({ navigation }: any) {
  const [value, setValue] = React.useState('first');
  const [showRound, setShowRound] = React.useState(true);
  const [currentRound, setCurrentRound] = useState<any>([])

  useEffect(() => {
    getSeason();
  }, []);

  const getSeason = async() => {
    const response = await leagueApi.get('/season/active')
    setCurrentRound(response.data.seasons[0].currentRound)  
    // setCurrentRound(response.data.seasons[0].rounds[0])  
  }

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>


        {
          showRound ? 



            currentRound ?

              <FlatList 
                keyExtractor={(item, index) => {
                  return index.toString()
                }} 
                data={currentRound.markets}
                renderItem={({ item, index }) => {
                let marketItem = item;
                return  <View style={appStyles.league_round}>
                          <Text style={appStyles.league_roundTitle}>{marketItem.title.replace('[CORRECT SPELLINGS ONLY]', '')}</Text>

                          { marketItem.isOpenField ?
                            <View style={[appStyles.league_radio, appStyles.league_radioOutcome] }>
                              <RadioButton value={item.id} status='checked' color='white' uncheckedColor='#777'/>
                              <Text style={[appStyles.league_radioText, appStyles.league_radioTextOutcome] }>{marketItem.outcome}</Text>
                            </View>
                          :
                            null
                          }

                          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <FlatList 
                              keyExtractor={(marketItem, index) => {
                                return index.toString()
                              }} 
                              data={marketItem.choices}
                              renderItem={({ item }) => {
                                return  <View style={[appStyles.league_radio, appStyles.league_radioDefault] }>
                                          <RadioButton value={item.id} status={'unchecked'} color='white' uncheckedColor='#777'/>
                                          <Text style={[appStyles.league_radioText]}>{item.title}</Text>
                                        </View>
                            }}>
                            </FlatList>
                          </RadioButton.Group>
                        </View>
                  }}>
              </FlatList>

            : 
            
              <View>
                <Text>Sorry there is no round currently active</Text>
              </View>



          :

            <View>
              <Text style={[appStyles.title, appStyles.league_title]}>Wrestle League</Text>
              <Text style={appStyles.league_info}>Login via Patreon to join the Wrestle League and go head-to-head with fellow patrons and the WrestleTalk team.</Text>

              <View style={[appStyles.league_button, appStyles.league_button__become]}>
                <Text style={appStyles.league_button__text}>Become a Patron</Text>
              </View>

              <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.patreon.com/oauth2/authorize?client_id=qssBP2Mh_-ejwfHljnEx_Cno5-Va_ckjojfS6Qwf3pq9Y4UN_hzI5Ku-8O6NJIyR&state=None&response_type=code&amt=0.01&redirect_uri=https%3A%2F%2Fleague.wrestletalk.com%2Fconnect%2Fcheck&scope=identity+identity%5Bemail%5D')}>
                <View style={[appStyles.league_button, appStyles.league_button__login]}>
                  <Text style={appStyles.league_button__text}>Login with Patreon</Text>
                </View>
              </TouchableOpacity>
            </View>

        }
         
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
