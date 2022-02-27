import { ScrollView, StyleSheet, View, Text } from 'react-native';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

export default function CurrentRoundScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.leagueContainerView}>
       <LeagueBannerComponent></LeagueBannerComponent>
       <View style={appStyles.container}>
         <Text style={appStyles.title}>Adsad</Text>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  leagueContainerView: {
    justifyContent: 'flex-start'
  }
});
