import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

import leagueApi from '../../api/leagueApi';

export default function PastSeasonsScreen({ navigation }: any) {4
  const [seasons, setSeasons] = useState<any>([])
  
  useEffect(() => {
    getSeasons();
  }, []);

  const getSeasons = async() => {
    const response = await leagueApi.get('/season/past')
    console.log(response.data.seasons)
    setSeasons(response.data.seasons)
  }

  const pastSeasonsData = [
    { season: 'Wrestle League Season 11', endDate: '18/12/2021'},
    { season: 'Wrestle League Season 10', endDate: '08/07/2021'},
    { season: 'Wrestle League Season 9', endDate: '15/02/2021'},
    { season: 'Wrestle League Season 8', endDate: '30/11/2020'},
    { season: 'Wrestle League Season 7', endDate: '16/07/2020'},
    { season: 'Wrestle League Season 6', endDate: '02/03/2020'},
    { season: 'Wrestle League Season 5', endDate: '25/11/2019'},
    { season: 'Wrestle League Season 4', endDate: '12/07/2019'},
    { season: 'Wrestle League Season 3', endDate: '01/03/2019'},
    { season: 'Wrestle League Season 2', endDate: '21/12/2018'},
    { season: 'Wrestle League Season 1', endDate: '07/06/2018'},
  ]

  function isEvenRow(item: any) {
     let ind = seasons.findIndex(season => season.title === item.season )

     return ind % 2 == 0
  };

  return (
    <ScrollView style={appStyles.league_container}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>
        <Text style={[appStyles.title, appStyles.league_title]}>{seasons ? seasons.length : null} Past Seasons</Text>

        <View style={appStyles.league_standing_row}>
          <Text style={[appStyles.league_headerText, appStyles.league_past_seasonsColumn]}>Season</Text>
          <Text style={[appStyles.league_headerText, appStyles.league_past_dateColumn]}>End Date</Text>
        </View>

        <FlatList 
            keyExtractor={season => season.title} 
            data={seasons}
            renderItem={({ item }) => {
                return  <View style={[appStyles.league_standing_row, isEvenRow(item) ? appStyles.league_season_rowEven : null]}>
                          <Text style={[appStyles.league_past_seasonsColumn]}>
                            {item.title}
                            </Text>
                          <Text style={[appStyles.league_past_dateColumn]}>{item.endDate}</Text>
                        </View>
            }}>
        </FlatList>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
