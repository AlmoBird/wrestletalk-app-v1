/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

// Talk
import WrestleTalkScreen from '../screens/talk/WrestleTalkScreen';
import LatestNewsScreen from '../screens/talk/LatestNewsScreen';
import ArticleScreen from '../screens/talk/ArticleScreen';

// Shop
import TShirtScreen from '../screens/shop/TShirtScreen';
import HoodiesScreen from '../screens/shop/HoodiesScreen';
import MugsScreen from '../screens/shop/MugsScreen';
import MagazinesScreen from '../screens/shop/MagazinesScreen';

import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HeaderComponent from '../components/HeaderComponent';
import AudioScreen from '../screens/talk/AudioScreen';
import VideosScreen from '../screens/talk/VideosScreen';
import CartScreen from '../screens/shop/CartScreen';
import FiltersScreen from '../screens/shop/FiltersScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WrestleTalk" component={BottomTabNavigator} options={{ headerTitle: (props) => <HeaderComponent {...props} /> }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}



const TopTab = createMaterialTopTabNavigator();

function TopTabWrestleTalkNavigator() {
  return (
    <TopTab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
      tabBarStyle: { backgroundColor: '#EEE' },
      tabBarIndicatorStyle: { backgroundColor: '#333', height: 3 },
      tabBarActiveTintColor: '#333',
      tabBarInactiveTintColor: '#999'
    }}>
      <TopTab.Screen name="Featured" component={WrestleTalkScreen} />
      <TopTab.Screen name="Latest News" component={LatestNewsScreen} />
      <TopTab.Screen name="Videos" component={VideosScreen} />
      <TopTab.Screen name="Audio" component={AudioScreen} />
    </TopTab.Navigator>
  );
}

function TopTabShopNavigator() {
  return (
    <TopTab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
      tabBarStyle: { backgroundColor: '#EEE' },
      tabBarIndicatorStyle: { backgroundColor: '#333', height: 3 },
      tabBarActiveTintColor: '#333',
      tabBarInactiveTintColor: '#999'
    }}>
      <TopTab.Screen name="T-Shirts" component={TShirtScreen} />
      <TopTab.Screen name="Hoodies" component={HoodiesScreen} />
      <TopTab.Screen name="Mugs" component={MugsScreen} />
      <TopTab.Screen name="Magazine" component={MagazinesScreen} />
    </TopTab.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

// Todo: Temp in place of sub-tabs solution 
const homeScreen: typeof LatestNewsScreen | typeof WrestleTalkScreen = WrestleTalkScreen;

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarItemStyle: {
          paddingVertical: 10,
          height: 60,
          top: -10,
          backgroundColor: 'black'
        }
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TopTabWrestleTalkNavigator}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'WRESTLETALK',
          tabBarIcon: ({ color }) => <Image source={require('./../assets/images/wt.png')} style={styles.navbarIcon} />,
          headerShown: false
        })}
      />  
      <BottomTab.Screen
        name="TabTwo"
        component={TopTabShopNavigator}
        options={{
          title: 'WRESTLESHOP',
          tabBarIcon: ({ color }) => <Image source={require('./../assets/images/shop.png')} style={styles.navbarIcon} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'WRESTLELEAGUE',
          tabBarIcon: ({ color }) => <Image source={require('./../assets/images/league.png')} style={styles.navbarIcon} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: 'OFFERS',
          tabBarIcon: ({ color }) => <Image source={require('./../assets/images/offer.png')} style={styles.navbarIcon} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  navbarIcon: {
    height: 15,
    padding: 10,
    resizeMode: 'contain'
  }
});