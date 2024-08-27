import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Config from './Config';
import Home from './Home';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

export default function Default() {
  return (
  
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={'#1ed760'} size={size} />
            ), independent: true, headerShown: false
          }} />
        <Tab.Screen name={'Settings'} component={Config} options={{
            tabBarIcon: ({ size, }) => (
              <Icon name="settings" color={'#1ed760'} size={size} />
            ), independent: true , headerShown: false
          }} />
        <Tab.Screen name={'Profile'} component={Profile} options={{
            tabBarIcon: ({ size, }) => (
              <Icon name="person" color={'#1ed760'} size={size} />
            ), independent: true , headerShown: false
          }} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});