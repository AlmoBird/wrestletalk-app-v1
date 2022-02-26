import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import appStyles from '../styles/appStyles.style';

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
       
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
