/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              WrestleTalkScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              ShopScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'four',
            },
          },
          ArticleScreen: {
            screens: {
              ArticleScreen: 'article',
            },
          },
        },
      },
      Modal: 'modal',
      Cart: 'cart',
      Confirmation: 'confirmation',
      Register: 'register',
      SearchResults: 'searchResults',
      Login: 'login',
      Password: 'password',
      Filters: 'filters',
      Settings: 'settings',
      NotFound: '*',
    },
  },
};

export default linking;
