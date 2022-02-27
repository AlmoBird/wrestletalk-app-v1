import { ScrollView, StyleSheet, Image } from 'react-native';

import LeagueBannerComponent from './LeagueBannerComponent';
import appStyles from '../../styles/appStyles.style';

export default function PastSeasonsScreen({ navigation }: any) {
  return (
    <ScrollView>
       <LeagueBannerComponent></LeagueBannerComponent>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
