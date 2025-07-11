import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RickAndMortyCharacters from './screens/reckieMartinService'; // 👈 NUEVA IMPORTACIÓN

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="RickAndMorty"
          component={RickAndMortyCharacters}
          options={{ title: 'Personajes Rick & Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
