import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
