import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

import leagueApi from '../../api/leagueApi';

export default function StandingsScreen({ navigation }: any) {
  const seasonId = '143eb23a-d354-4386-a1b8-2d102490683d';
  const [standings, setStandings] = useState<any>([])
  
  useEffect(() => {
    getStandings();
  }, []);

  const getStandings = async() => {
    const response = await leagueApi.get('/season/' + seasonId + '/standings')
    setStandings(response.data.standings)
  }

  const standingsData = [
    { rank: 1, name: 'Terminator1000', points: 398},
    { rank: 2, name: 'Hal 300', points: 389, thisUser: true},
    { rank: 3, name: 'RobSeff08', points: 370},
    { rank: 4, name: 'LinKing_007', points: 365},
    { rank: 5, name: 'SeenUnseen', points: 342},
    { rank: 6, name: 'LoremIpsum', points: 337},
    { rank: 7, name: 'DolorSitAmet', points: 321},
    { rank: 8, name: 'UltimateWorrier', points: 309},
    { rank: 9, name: 'TheSock', points: 280},
    { rank: 10, name: 'TripleHBatteries', points: 276},
  ];



  return (
    <ScrollView style={appStyles.league_container}>
      <LeagueBannerComponent></LeagueBannerComponent>
      <View style={appStyles.container}>
        <Text style={[appStyles.title, appStyles.league_title]}>Standings</Text>
          
        <View style={appStyles.league_standing_row}>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_rankColumn]}>Rank</Text>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_userColumn]}>Name</Text>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_pointsColumn]}>Points</Text>
        </View>

        <FlatList 
            keyExtractor={user => user.rank + user.name + user.points} 
            data={standings}
            renderItem={({ item }) => {
                return  <View style={[appStyles.league_standing_row, item.thisUser ? appStyles.league_standing_rowActive : null]}>
                          <Text style={[appStyles.league_standing_rankColumn, item.thisUser ? appStyles.league_standing_textActive : null]}>{item.rank}</Text>
                          <Text style={[appStyles.league_standing_userColumn, item.thisUser ? appStyles.league_standing_textActive : null]}>{item.name}</Text>
                          <Text style={[appStyles.league_standing_pointsColumn, item.thisUser ? appStyles.league_standing_textActive : null]}>{item.points}</Text>
                        </View>
            }}>
        </FlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
