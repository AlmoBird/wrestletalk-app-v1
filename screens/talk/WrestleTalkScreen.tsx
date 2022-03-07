import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import appStyles from '../../styles/appStyles.style';

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
      <FlatList horizontal={false} numColumns={numCols} data={articles} style={appStyles.ViewContainer} renderItem={(article) => {
        return (
          <TouchableOpacity onPress={() => { navigation.navigate('TabTwo')}}>
            <ImageBackground style={appStyles.article} source={{
              uri: article.item.imageUrl,
            }}>
              <Text style={appStyles.title}>{article.index + 1} {article.item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )
      }}></FlatList>
  );
  */

  return (
    <ScrollView style={appStyles.ViewContainer}>

      <TouchableOpacity onPress={() => { navigation.navigate('Settings')}}>
        <View style={appStyles.articleLargeVideo} >
          <Image style={appStyles.articleLargeVideo__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
          }}></Image>
          <View style={appStyles.articleLargeVideo__Details}>
            <Text style={appStyles.articleLargeVideo__title}>DAMIAN PRIEST VS. SHEAMUS TO BE TABLES MATCH AT WWE EXTREME RULES?</Text>
            <View style={appStyles.articleLargeVideo__meta}>
              <Text style={[appStyles.articleLargeVideo__metaText, appStyles.articleLarge__metaTime]}>10h</Text>
              <Text style={[appStyles.articleLargeVideo__metaText]}>Liam Winnard</Text>
              <View style={appStyles.articleLargeVideo__TagsContainer}>
                <FlatList 
                    style={appStyles.articleLargeVideo__TopicsList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={tag => tag.name} 
                    data={articletags}
                    renderItem={({ item }) => {
                        return <Text style={appStyles.articleLargeVideo__TopicsTags}>{item.name}</Text>
                    }}
                ></FlatList>
              </View>
            </View>
          </View>
          <View style={appStyles.articleType} ></View>
          <Entypo style={appStyles.articleType__Video} name="controller-play" size={18} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('Article'), navigation.setParams({ articleTitle: 'Buddy Murphy Teases AEW Casino Ladder Match Appearance'})}}>
        <View style={appStyles.articleLarge} >
          <ImageBackground style={appStyles.articleLarge__Img} source={{
            uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-1.jpg',
          }}>

            <LinearGradient
              colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
              start={[1, 0.9]}
              end={[1, 0.3]}
              style={appStyles.articleLarge__linearGradient}
              >
                <View style={appStyles.articleLarge__Details}>
                  <Text style={appStyles.articleLarge__title}>Buddy Murphy Teases AEW Casino Ladder Match Appearance</Text>
                  <View style={appStyles.articleLarge__meta}>
                    <Text style={[appStyles.articleLarge__metaText, appStyles.articleLarge__metaTime]}>10h</Text>
                    <Text style={[appStyles.articleLarge__metaText]}>Liam Winnard</Text>
                    <View style={appStyles.articleTagsContainer}>
                      <FlatList 
                          style={appStyles.TopicsList}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={tag => tag.name} 
                          data={articletags}
                          renderItem={({ item }) => {
                              return <Text style={appStyles.TopicsTags}>{item.name}</Text>
                          }}
                      ></FlatList>
                    </View>
                  </View>
                </View>
            </LinearGradient>
          </ImageBackground>         
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('SearchResults')}}>
        <View style={appStyles.articleHalfContainer} >
          <View style={appStyles.articleHalf} >
            <ImageBackground style={appStyles.articleHalf__Img} source={{
              uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
            }}>
              <LinearGradient
                colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
                start={[1, 0.8]}
                end={[1, 0.2]}
                style={appStyles.articleLarge__linearGradient}
                >
                  <View style={appStyles.articleHalf__Details}>
                  <Text style={appStyles.articleHalf__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
                    <View style={appStyles.articleLarge__meta}>
                      <Text style={[appStyles.articleLarge__metaText, appStyles.articleLarge__metaTime]}>10h</Text>
                      <Text style={[appStyles.articleLarge__metaText]}>Liam Winnard</Text>
                    </View>
                  </View>
              </LinearGradient>
            </ImageBackground>
            
          </View>

          <View style={appStyles.articleHalf} >
            <ImageBackground style={appStyles.articleHalf__Img} source={{
              uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-1.jpg',
            }}>
              <LinearGradient
                colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
                start={[1, 0.8]}
                end={[1, 0.2]}
                style={appStyles.articleLarge__linearGradient}
                >
                  <View style={appStyles.articleHalf__Details}>
                  <Text style={appStyles.articleHalf__title}>BRITT BAKER SAYS WWE ‘DEFINITELY’ HAD INTEREST IN HER2</Text>
                    <View style={appStyles.articleLarge__meta}>
                      <Text style={[appStyles.articleLarge__metaText, appStyles.articleLarge__metaTime]}>10h</Text>
                      <Text style={[appStyles.articleLarge__metaText]}>Liam Winnard</Text>
                    </View>
                  </View>
              </LinearGradient>
            </ImageBackground>

            <View style={appStyles.articleType} ></View>
            <Foundation style={appStyles.articleType__Video} name="sound" size={18} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={appStyles.articleSmall} >
        <Image style={appStyles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={appStyles.articleSmall__Details}>
          <Text style={appStyles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
      </View>

      <View style={appStyles.articleSmall} >
        <Image style={appStyles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={appStyles.articleSmall__Details}>
          <Text style={appStyles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
        <View style={appStyles.articleType} ></View>
        <Entypo style={appStyles.articleType__Video} name="controller-play" size={18} color="black" />
      </View>

      <View style={appStyles.articleSmall} >
        <Image style={appStyles.articleSmall__Img} source={{
          uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
        }}></Image>
        <View style={appStyles.articleSmall__Details}>
          <Text style={appStyles.articleSmall__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
        </View> 
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <View style={appStyles.articleTiny} >
        <Text style={appStyles.articleTiny__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
      </View>

      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

    </ScrollView>
  )
}