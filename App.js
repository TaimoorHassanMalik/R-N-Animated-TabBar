import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import AddButton from "./screens/AddButton";

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBazH2B8YMg7r2IMEF4sMJQFkvkfRxWE14",
    authDomain: "animated-tabbar.firebaseapp.com",
    databaseURL: "https://animated-tabbar.firebaseio.com",
    projectId: "animated-tabbar",
    storageBucket: "animated-tabbar.appspot.com",
    messagingSenderId: "567498298518",
    appId: "1:567498298518:web:e70a17f4e8c3d445279eb7"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const AppContainer = createStackNavigator(
  {
   default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={32} color={tintColor} />
          }
        },
        Message: {
          screen: MessageScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="ios-chatboxes" size={32} color={tintColor} />
          }
        },
        Add: {
          screen: () => null,
          navigationOptions: {
              tabBarIcon: <AddButton />
          }
      },
        Notification: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" size={32} color={tintColor} />
          }
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={32} color={tintColor} />
          }
        }
      },
      {  
       tabBarOptions: {
          activeTintColor: '#161F3D',
          inactiveTintColor: '#B8BBC4',
          
        }
      }
   )
  },
  {
    mode:"model",
    headermode:"none",
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);