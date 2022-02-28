import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking, ScrollView, ImageBackground } from 'react-native';
import { Foundation, MaterialIcons } from '@expo/vector-icons'; 

import appStyles from '../styles/appStyles.style';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchResultsScreen({ navigation }: any) {

  const [checked, setChecked] = useState({
    breakingNews: false,
    livePPV: false,
    results: false,
    liveTVResults: false,
    theRock: false,
    johnCena: false,
  });

  return (
    <ScrollView style={appStyles.scrollContainer}>
      
      <View style={appStyles.searchResultsFilters}>
        <View style={appStyles.searchResultsFilterItem}>
          <Text style={appStyles.searchResultsFilterText}>Dates <MaterialIcons name="keyboard-arrow-down" size={20} color="white" /></Text>
        </View>
        <View style={appStyles.searchResultsFilterItem}>
          <Text style={appStyles.searchResultsFilterText}>Order <MaterialIcons name="keyboard-arrow-down" size={20} color="white" /></Text>
        </View>
      </View>

      <View style={appStyles.searchResultsSummary}>
        <Text>3 Results for 'WWE Star'</Text>
      </View>

      <View style={appStyles.container}>
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
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
