import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const imageUrl = 'https://mediacloud.theweek.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1608148899/59267_article_full.jpg';
  const messages = ['Clothes Line', 'Dropkick'];
  const articles = [
    { 
      title: 'My article',
      imageUrl: 'https://mediacloud.theweek.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1608148899/59267_article_full.jpg',
      link: ''
    },
    { 
      title: 'My article',
      imageUrl: 'https://mediacloud.theweek.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1608148899/59267_article_full.jpg',
      link: ''
    },
    { 
      title: 'My article',
      imageUrl: 'https://mediacloud.theweek.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1608148899/59267_article_full.jpg',
      link: ''
    },
  ]
  const numCols = 2;

  return (
      <FlatList horizontal={false} numColumns={numCols} data={articles} style={styles.ViewContainer} renderItem={(article) => {
        return (
          <TouchableOpacity onPress={() => { navigation.navigate('TabTwo')}}>
            <ImageBackground style={styles.article} source={{
              uri: article.item.imageUrl,
            }}>
              <Text style={styles.title}>{article.index + 1} {article.item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )
      }}></FlatList>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  article: {
    width: '100%',
    height: 200,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: "absolute",
    bottom: 0,
  },

});
