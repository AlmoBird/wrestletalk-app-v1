import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { Entypo, Foundation, MaterialIcons } from '@expo/vector-icons'; 

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function LatestNewsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const tags = [
        { name: 'Edge' },
        { name: 'Releases' },
        { name: 'Raw' },
        { name: 'WWE' },
        { name: 'The Rock' },
    ]

  return (
    <ScrollView>

        <View style={styles.TopicsContainer}>
          <Text>TRENDING TOPICS</Text>

          <FlatList 
              style={styles.TopicsList}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={tag => tag.name} 
              data={tags}
              renderItem={({ item }) => {
                  return <Text style={styles.TopicsTags}>{item.name}</Text>
              }}
          ></FlatList>
      </View>
            
       <View style={styles.ViewContainer}>    
        <TouchableOpacity onPress={() => { navigation.navigate('Article'), navigation.setParams({ articleTitle: 'Buddy Murphy Teases AEW Casino Ladder Match Appearance'})}}>
            <View style={styles.articleLarge} >
            <Image style={styles.articleLarge__Img} source={{
            uri: 'https://static.wrestletalk.com/app/uploads/2022/01/darby-allin-january-13-b-960x540.jpg',
            }}></Image>
            <View style={styles.articleLarge__Details}>
                <Text style={styles.articleLarge__title}>Darby Allin Presents Independent Star With An AEW Contract</Text>
            </View>
            </View>
        </TouchableOpacity>

        <View style={styles.articleHalfContainer} >
            <View style={styles.articleHalf} >
            <Image style={styles.articleHalf__Img} source={{
                uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
            }}></Image>
            <View style={styles.articleHalf__Details}>
                <Text style={styles.articleHalf__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
            </View> 
            </View>

            <View style={styles.articleHalf} >
            <Image style={styles.articleHalf__ImgDisabled} source={{
                uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-1.jpg',
            }}></Image>
            <View style={styles.articleHalf__DetailsDisabled}>
                <View style={styles.articleLockBackground} >
                    <MaterialIcons style={styles.articleLockIcon} name="lock" size={24} color="black" />
                </View>
                <Text style={styles.articleHalf__titleDisabled}>SUBSCRIBE TO UNLOCK THIS PREMIUM CONTENT</Text>
            </View>
            </View>

            <View style={styles.articleHalf} >
            <Image style={styles.articleHalf__Img} source={{
                uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-3.jpg',
            }}></Image>
            <View style={styles.articleHalf__Details}>
                <Text style={styles.articleHalf__title}>KEVIN OWENS REACTS TO SPECULATION HE’S UNHAPPY IN WWE2</Text>
            </View> 
            </View>

            <View style={styles.articleHalf} >
            <Image style={styles.articleHalf__Img} source={{
                uri: 'http://wrestletalk.upro.site/wp-content/uploads/2021/12/img-3-1.jpg',
            }}></Image>
            <View style={styles.articleHalf__Details}>
                <Text style={styles.articleHalf__title}>BRITT BAKER SAYS WWE ‘DEFINITELY’ HAD INTEREST IN HER2</Text>
            </View>
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
  },

  TopicsContainer: {
    paddingVertical: 15,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  TopicsList: {
    borderLeftColor: '#AAA',
    borderLeftWidth: 1,
    marginLeft: 20,
    paddingLeft: 20,
    fontSize: 12,
    paddingRight: 80
  },
  TopicsTags: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 4,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    marginRight: 5,
    fontSize: 12
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
  articleLarge__Details: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0, 0.6)',
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
  },
  articleLargeVideo: {
    borderRadius: 7,  
    marginBottom: 20,
    overflow: 'hidden'
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
  },
  articleHalfContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    padding: 15,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 7
  },
  articleHalf__title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: 'uppercase',
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
  articleHalf__ImgDisabled: {
    height: '100%',
    opacity: 0.3,
    borderRadius: 7,
    resizeMode: 'cover',
  },
  articleHalf__DetailsDisabled: {
    padding: 20,
    backgroundColor: 'rgba(128,128,128, 0.6)',
    position: "absolute",
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 7
    
  },
  articleHalf__titleDisabled: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  articleLockBackground: {
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    height: 50,
    marginBottom: 20
  },
  articleLockIcon: {
    alignSelf: 'center'
  }
});
