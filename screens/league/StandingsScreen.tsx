import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

export default function StandingsScreen({ navigation }: any) {
  const standingsData = [
    { rank: 1, username: 'Terminator1000', points: 398},
    { rank: 2, username: 'Hal 300', points: 389, thisUser: true},
    { rank: 3, username: 'RobSeff08', points: 370},
    { rank: 4, username: 'LinKing_007', points: 365},
    { rank: 5, username: 'SeenUnseen', points: 342},
    { rank: 6, username: 'LoremIpsum', points: 337},
    { rank: 7, username: 'DolorSitAmet', points: 321},
    { rank: 8, username: 'UltimateWorrier', points: 309},
    { rank: 9, username: 'TheSock', points: 280},
    { rank: 10, username: 'TripleHBatteries', points: 276},
  ];



  return (
    <ScrollView style={appStyles.league_container}>
      <LeagueBannerComponent></LeagueBannerComponent>
      <View style={appStyles.container}>
        <Text style={[appStyles.title, appStyles.league_title]}>Standings</Text>
          
        <View style={appStyles.league_standing_row}>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_rankColumn]}>Rank</Text>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_userColumn]}>Username</Text>
          <Text style={[appStyles.league_headerText, appStyles.league_standing_pointsColumn]}>Points</Text>
        </View>

        <FlatList 
            keyExtractor={user => user.username} 
            data={standingsData}
            renderItem={({ item }) => {
                return  <View style={[appStyles.league_standing_row, item.thisUser ? appStyles.league_standing_rowActive : null]}>
                          <Text style={[appStyles.league_standing_rankColumn, item.thisUser ? appStyles.league_standing_textActive : null]}>{item.rank}</Text>
                          <Text style={[appStyles.league_standing_userColumn, item.thisUser ? appStyles.league_standing_textActive : null]}>{item.username}</Text>
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
