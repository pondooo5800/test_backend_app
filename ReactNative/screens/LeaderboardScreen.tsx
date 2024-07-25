import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const LeaderboardScreen = ({navigation}) => {
  const score = useSelector((state: RootState) => state.quiz.score);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Your Score: {score}</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LeaderboardScreen;
