import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

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
  const articletags = [
    { name: 'Edge' },
    { name: 'Releases' },
    { name: 'Raw' }
]

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

      <TouchableOpacity onPress={() => { navigation.navigate('SearchResults')}}>
        <View style={styles.articleLargeVideo} >
          <Image style={styles.articleLargeVideo__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
          }}></Image>
          <View style={styles.articleLargeVideo__Details}>
            <Text style={styles.articleLargeVideo__title}>DAMIAN PRIEST VS. SHEAMUS TO BE TABLES MATCH AT WWE EXTREME RULES?</Text>
            <View style={styles.articleLargeVideo__meta}>
              <Text style={[styles.articleLargeVideo__metaText, styles.articleLarge__metaTime]}>10h</Text>
              <Text style={[styles.articleLargeVideo__metaText]}>Liam Winnard</Text>
              <View style={styles.articleLargeVideo__TagsContainer}>
                <FlatList 
                    style={styles.articleLargeVideo__TopicsList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={tag => tag.name} 
                    data={articletags}
                    renderItem={({ item }) => {
                        return <Text style={styles.articleLargeVideo__TopicsTags}>{item.name}</Text>
                    }}
                ></FlatList>
              </View>
            </View>
          </View>
          <View style={styles.articleType} ></View>
          <Entypo style={styles.articleType__Video} name="controller-play" size={18} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('Article'), navigation.setParams({ articleTitle: 'Buddy Murphy Teases AEW Casino Ladder Match Appearance'})}}>
        <View style={styles.articleLarge} >
          <ImageBackground style={styles.articleLarge__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-1.jpg',
          }}>

            <LinearGradient
              colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
              start={[1, 0.9]}
              end={[1, 0.3]}
              style={styles.articleLarge__linearGradient}
              >
                <View style={styles.articleLarge__Details}>
                  <Text style={styles.articleLarge__title}>Buddy Murphy Teases AEW Casino Ladder Match Appearance</Text>
                  <View style={styles.articleLarge__meta}>
                    <Text style={[styles.articleLarge__metaText, styles.articleLarge__metaTime]}>10h</Text>
                    <Text style={[styles.articleLarge__metaText]}>Liam Winnard</Text>
                    <View style={styles.articleTagsContainer}>
                      <FlatList 
                          style={styles.TopicsList}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={tag => tag.name} 
                          data={articletags}
                          renderItem={({ item }) => {
                              return <Text style={styles.TopicsTags}>{item.name}</Text>
                          }}
                      ></FlatList>
                    </View>
                  </View>
                </View>
            </LinearGradient>
          </ImageBackground>         
        </View>
      </TouchableOpacity>

      <View style={styles.articleHalfContainer} >
        <View style={styles.articleHalf} >
          <ImageBackground style={styles.articleHalf__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
          }}>
            <LinearGradient
              colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
              start={[1, 0.8]}
              end={[1, 0.2]}
              style={styles.articleLarge__linearGradient}
              >
                <View style={styles.articleHalf__Details}>
                <Text style={styles.articleHalf__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
                  <View style={styles.articleLarge__meta}>
                    <Text style={[styles.articleLarge__metaText, styles.articleLarge__metaTime]}>10h</Text>
                    <Text style={[styles.articleLarge__metaText]}>Liam Winnard</Text>
                  </View>
                </View>
            </LinearGradient>
          </ImageBackground>
          
        </View>

        <View style={styles.articleHalf} >
          <ImageBackground style={styles.articleHalf__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-1.jpg',
          }}>
            <LinearGradient
              colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
              start={[1, 0.8]}
              end={[1, 0.2]}
              style={styles.articleLarge__linearGradient}
              >
                <View style={styles.articleHalf__Details}>
                <Text style={styles.articleHalf__title}>BRITT BAKER SAYS WWE ‘DEFINITELY’ HAD INTEREST IN HER2</Text>
                  <View style={styles.articleLarge__meta}>
                    <Text style={[styles.articleLarge__metaText, styles.articleLarge__metaTime]}>10h</Text>
                    <Text style={[styles.articleLarge__metaText]}>Liam Winnard</Text>
                  </View>
                </View>
            </LinearGradient>
          </ImageBackground>

          <View style={styles.articleType} ></View>
          <Foundation style={styles.articleType__Video} name="sound" size={18} color="black" />
        </View>
      </View>

      <View style={styles.articleSmall} >
        <Image style={styles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={styles.articleSmall__Details}>
          <Text style={styles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
      </View>

      <View style={styles.articleSmall} >
        <Image style={styles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={styles.articleSmall__Details}>
          <Text style={styles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
        <View style={styles.articleType} ></View>
        <Entypo style={styles.articleType__Video} name="controller-play" size={18} color="black" />
      </View>

      <View style={styles.articleSmall} >
        <Image style={styles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={styles.articleSmall__Details}>
          <Text style={styles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={styles.articleTiny} >
        <Text style={styles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

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
  },
  articleType: {
    position: 'absolute',
    backgroundColor: 'red',
    paddingHorizontal: 75,
    paddingVertical: 36,
    right: -60,
    top: -40,
    transform: [
      { rotateZ: "45deg" }
    ]
  },
  articleType__Video: {
    color: 'white',
    position: 'absolute',
    right: 13,
    top: 10,
    zIndex: 10,
  },
  articleLarge: {
    borderRadius: 7,  
    height: 230,
    marginBottom: 20,
    overflow: 'hidden'
  },
  articleLarge__Img: {
    height: '100%',
    borderRadius: 7,
    resizeMode: 'cover'
  },
  articleLarge__linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  articleLarge__Details: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: 'rgba(0,0,0, 0)',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 7
  },
  articleLarge__title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 15
  },
  articleLarge__meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleLarge__metaText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  articleLarge__metaTime: {
    paddingRight: 15,
    marginRight: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.6)'
  },
  articleLargeVideo: {
    marginBottom: 20,
    overflow: 'hidden',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingBottom: 15,
    backgroundColor: '#FFF'
  },
  articleLargeVideo__Img: {
    height: 230,
    borderRadius: 7,
    resizeMode: 'cover'
  },
  articleLargeVideo__Details: {
    paddingVertical: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  articleLargeVideo__title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 10
  },
  articleLargeVideo__meta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  articleLargeVideo__metaText: {
    fontSize: 12,
    color: '#000'
  },
  articleLargeVideo__metaTime: {
    paddingRight: 15,
    marginRight: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.6)'
  },
  articleLargeVideo__TagsContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  articleLargeVideo__TopicsList: {
    marginLeft: 20,
    fontSize: 12,
  },
  articleLargeVideo__TopicsTags: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.7)',
    marginRight: 5,
    fontSize: 9,
    color: '#000'
  },
  articleHalfContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF'
  },
  articleHalf: {
    borderRadius: 7,  
    width: '48%',
    height: 180,
    marginBottom: 20,
    overflow: 'hidden'
  },
  articleHalf__Img: {
    height: '100%',
    borderRadius: 7,
    resizeMode: 'cover'
  },
  articleHalf__Details: {
    padding: 20,
    backgroundColor: 'transparent',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 7
  },
  articleHalf__title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 5
  },
  articleSmall: {
    borderRadius: 7,  
    height: 100,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  articleSmall__Img: {
    width: '29%',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    resizeMode: 'cover'
  },
  articleSmall__Details: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 1
  },
  articleSmall__title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },
  articleTiny: {
    height: 50,
    marginBottom: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  articleTiny__title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },
  articleTagsContainer: {
    flex: 1
  },
  TopicsList: {
    marginLeft: 20,
    fontSize: 12,
  },
  TopicsTags: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    marginRight: 5,
    fontSize: 9
  },
});
