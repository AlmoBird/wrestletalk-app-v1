import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function WrestleTalkScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
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

  /*
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
  */

  return (
    <ScrollView style={styles.ViewContainer}>

      <View style={styles.article} >
        <Image style={styles.articleImg} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-1.jpg',
        }}></Image>
        <View style={styles.articleDetails}>
          <Text style={styles.title}>Buddy Murphy Teases AEW Casino Ladder Match Appearance</Text>
        </View>
      </View>

      <View style={styles.article} >
        <Image style={styles.articleImg} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={styles.articleDetails}>
          <Text style={styles.title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
      </View>

      <View style={styles.article} >
        <Image style={styles.articleImg} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-1.jpg',
        }}></Image>
        <View style={styles.articleDetails}>
          <Text style={styles.title}>BRITT BAKER SAYS WWE ‘DEFINITELY’ HAD INTEREST IN HER2</Text>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ViewContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    display: 'flex',
    overflow: 'scroll',
    borderWidth: 3,
    borderColor: 'red'
  },
  article: {
    borderRadius: 10,  
    height: 230,
    marginBottom: 20
  },
  articleImg: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover'
  },
  articleDetails: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 10
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },

});
