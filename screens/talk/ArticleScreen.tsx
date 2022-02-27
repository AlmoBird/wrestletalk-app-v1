import { StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image, View, Text, Button } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons, Entypo } from '@expo/vector-icons'; 

import { RootTabScreenProps } from '../../types';

const wrestleTalkHighlight = '#F00053'

export default function ArticleScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const articletags = [
    { name: 'Edge' },
    { name: 'Releases' },
    { name: 'Raw' }
  ]

  return (
    <ScrollView style={styles.articleContainer}>

      <Ionicons style={styles.arrowBack} name="arrow-back-circle" size={36} color="red" />
      <View style={styles.arrowBackBackground}></View>

      <View style={styles.article} >
        <ImageBackground style={styles.articleImg} source={{
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
                  
                  <View style={styles.articleLarge__meta}>
                    <Text style={[styles.articleLarge__metaText, styles.articleLarge__metaTime]}>10h</Text>
                    <Text style={[styles.articleLarge__metaText]}>Liam Winnard</Text>
                  </View>
                </View>

                <Entypo style={styles.shareIcon} name="share" size={16} color="white" />
                <View style={styles.shareIconBackground}></View>
          </LinearGradient>
        </ImageBackground>
      </View>
      

      <View>
        <Text style={styles.articleText}>WWE Legend and XFL co-owner Dwayne “The Rock” Johnson is set to be a part of the NBC pre-game festivities at the NFL’s Super Bowl LVI this Sunday.</Text>
        <Text style={styles.articleText}>The NFL announced today that The Great One will make a special pre-game appearance before the big game, but no other details were provided.</Text>
        <Text style={styles.articleText}>Rock tweeted about the appearance and mentioned he will be standing on the field at SoFi Stadium in Inglewood, CA, right before the LA Rams take on the Cincinnati Bengals.</Text>
        <Text style={styles.articleText}>“After all these years, my football dream of standing on the SUPER BOWL field has FINALLY….come true [smiling face with open mouth and smiling eyes emoji] [fist emoji] This will historic. This will be my honor. This will be ELECTRIFYING [high voltage emoji] [fire emoji] I’ll see you THIS SUNDAY! LFG!!! <Text style={styles.articleTextLink}>#SuperBowlLVI #SuperGoldSunday</Text> 2/13 on @NBC,” he wrote.</Text>
        <Text style={styles.articleText}>SoFi Stadium is also the home of WrestleMania 39 in 2023, where Rock is rumored to return to the ring against WWE Universal Champion Roman Reigns.</Text>
        <Text style={styles.articleText}>For those who missed it, you can click here to see the film Rock starred in this past Friday as Team USA entered the Parade of Nations in the Opening Ceremony of the XXIV Olympic Winter Games from China.</Text>
        <Text style={styles.articleText}>Stay tuned for more. Below are the related tweets on Rock’s SBLVI appearance:</Text>
      </View>

    
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsHeader}>COMMENTS <Text style={styles.commentsCount}>3</Text></Text>

        <View style={styles.commentIndividual}>
          <View style={styles.commentIndividual__header}>
            <Text style={styles.commentIndividual__name}>John Smith</Text>
            <Text style={styles.commentIndividual__date}>21 June 2021</Text>
          </View>
          <Text style={styles.commentIndividual__text}>I cannot believe this guy, he is so awesome but keeps messing it all man!</Text>
          <View style={styles.commentIndividual__footer}>
            <Text style={styles.commentIndividual__replyBtn}>REPLY</Text>
            <View style={styles.commentIndividual__likesContainer}>
              <Text style={styles.commentIndividual__likesAction}><AntDesign name="like2" size={24} color="black" /> 454</Text>
              <Text style={styles.commentIndividual__likesAction}><AntDesign name="dislike2" size={24} color="black" /> 30</Text>
            </View>
          </View>

          <View style={styles.commentIndividualNested}>
            <Feather style={styles.commentIndividualNestedIndicator} name="corner-down-right" size={24} color="black" />
            <View style={styles.commentIndividual__header}>
              <Text style={styles.commentIndividual__name}>John Smith</Text>
              <Text style={styles.commentIndividual__date}>21 June 2021</Text>
            </View>
            <Text style={styles.commentIndividual__text}>I cannot believe this guy, he is so awesome but keeps messing it all man!</Text>
            <View style={styles.commentIndividual__footer}>
              <Text style={styles.commentIndividual__replyBtn}>REPLY</Text>
              <View style={styles.commentIndividual__likesContainer}>
                <Text style={styles.commentIndividual__likesAction}><AntDesign name="like2" size={24} color="black" /> 454</Text>
                <Text style={styles.commentIndividual__likesAction}><AntDesign name="dislike2" size={24} color="black" /> 30</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.commentIndividual}>
          <View style={styles.commentIndividual__header}>
            <Text style={styles.commentIndividual__name}>John Smith</Text>
            <Text style={styles.commentIndividual__date}>21 June 2021</Text>
          </View>
          <Text style={styles.commentIndividual__text}>I cannot believe this guy, he is so awesome but keeps messing it all man!</Text>
          <View style={styles.commentIndividual__footer}>
            <Text style={styles.commentIndividual__replyBtn}>REPLY</Text>
            <View style={styles.commentIndividual__likesContainer}>
              <Text style={styles.commentIndividual__likesAction}><AntDesign name="like2" size={24} color="black" /> 454</Text>
              <Text style={styles.commentIndividual__likesAction}><AntDesign name="dislike2" size={24} color="black" /> 30</Text>
            </View>
          </View>
        </View>
      </View>

      <Button
        onPress={console.log}
        title="SIGN IN TO COMMENT"
        color="#000"
      />

      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  articleText: {
    color: '#000000',
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 24
  },
  articleTextLink: {
    color: wrestleTalkHighlight
  },
  article: {
    borderRadius: 10,  
    height: 260,
    marginBottom: 20
  },
  articleImg: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover'
  },
  articleDetails: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 10
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },
  commentsContainer: {
    marginVertical: 40,
    width: '100%'
  },
  commentsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20
  },
  commentsCount: {
    color: wrestleTalkHighlight,
    alignSelf: 'flex-end'
  },
  commentIndividual: {
    borderBottomWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 20,
    marginBottom: 20
  },
  commentIndividualNested: {
    marginTop: 40,
    marginLeft: 40
  },
  commentIndividualNestedIndicator: {
    position: 'absolute',
    left: -40,
    opacity: 0.3
  },
  commentIndividual__header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentIndividual__name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentIndividual__date: {
    color: '#999' 
  },
  commentIndividual__text: {
    fontSize: 17,
    lineHeight: 23,
    marginVertical: 20
  },
  commentIndividual__footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentIndividual__replyBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555'
  },
  commentIndividual__likesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentIndividual__likesAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: 15,
  },
  commentIndividual__likesActionActive: {

  },
  articleLarge__linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  articleLarge__Details: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0, 0)',
    position: "absolute",
    bottom: 0,
    width: '100%',
    borderRadius: 7
  },
  articleLarge__title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 10
  },
  articleLarge__meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleLarge__metaText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF'
  },
  articleLarge__metaTime: {
    paddingRight: 15,
    marginRight: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.6)'
  },
  articleTagsContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 10
  },
  TopicsList: {
    fontSize: 12,
    width: '100%'
  },
  TopicsTags: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    marginRight: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  },
  arrowBack: {
    position: 'absolute',
    zIndex: 999,
    top: 10,
    left: 10,
  },
  arrowBackBackground: {
    width: 26,
    height: 26,
    borderRadius: 18,
    position: 'absolute',
    zIndex: 100,
    top: 15,
    left: 12,
    backgroundColor: '#FFF'
  },
  shareIcon: {
    position: 'absolute',
    bottom: 22,
    right: 22,
  },
  shareIconBackground: {
    width: 30,
    height: 30,
    borderRadius: 18,
    position: 'absolute',
    zIndex: 100,
    bottom: 15,
    right: 14,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
});
