import { Image } from 'react-native';

import appStyles from '../../styles/appStyles.style';

export default function LeagueBannerComponent({ navigation }: any) {
  return (
    <Image style={appStyles.leagueBanner} source={require('../../assets/images/league_banner.png')}></Image>
  );
}

