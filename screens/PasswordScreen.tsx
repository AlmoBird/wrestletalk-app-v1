import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking } from 'react-native';
import appStyles from '../styles/appStyles.style';

export default function PasswordScreen({ navigation }: any) {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Forgot Password</Text>
      
      <View style={appStyles.section}>
        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Email</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('')}} title="ENTER" color="#000" /> 
      <TouchableOpacity onPress={() => { navigation.navigate('Password')}}><Text style={appStyles.goBack}>Cancel</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

});
