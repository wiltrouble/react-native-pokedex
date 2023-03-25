import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import {Navigator} from './Navigator';
import Icon from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? 0 : 10},
        tabBarStyle: {position: 'absolute', backgroundColor: 'rgba(255,255,255, 0.92)', borderWidth: 0, elevation: 0},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="navicon" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
