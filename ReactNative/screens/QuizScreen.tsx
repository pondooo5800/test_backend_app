import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setQuestions, incrementScore, resetScore} from '../store/quizSlice';
import {RootState} from '../store';

const QuizScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const generateRandomQuestions = () => {
      const fetchedQuestions = [
        {
          question: 'What is the capital of France?',
          answers: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
          correct: 2,
        },
        {question: 'What is 2 + 2?', answers: ['3', '4', '5', '6'], correct: 1},
        {
          question: 'What is the largest planet?',
          answers: ['Earth', 'Jupiter', 'Mars', 'Venus'],
          correct: 1,
        },
        {
          question: 'What is the smallest continent?',
          answers: ['Asia', 'Australia', 'Europe', 'Antarctica'],
          correct: 1,
        },
        {
          question: 'What is the longest river?',
          answers: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
          correct: 0,
        },
        {
          question: 'Who wrote "To Kill a Mockingbird"?',
          answers: [
            'Harper Lee',
            'Mark Twain',
            'Ernest Hemingway',
            'F. Scott Fitzgerald',
          ],
          correct: 0,
        },
        {
          question: 'What is the speed of light?',
          answers: [
            '300,000 km/s',
            '150,000 km/s',
            '299,792 km/s',
            '299,792 m/s',
          ],
          correct: 2,
        },
        {
          question: 'What is the capital of Japan?',
          answers: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correct: 2,
        },
        {
          question: 'Who painted the Mona Lisa?',
          answers: [
            'Vincent van Gogh',
            'Claude Monet',
            'Leonardo da Vinci',
            'Pablo Picasso',
          ],
          correct: 2,
        },
        {
          question: 'What is the chemical symbol for water?',
          answers: ['H2O', 'O2', 'CO2', 'NaCl'],
          correct: 0,
        },
        {
          question: 'What is the tallest mountain in the world?',
          answers: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
          correct: 1,
        },
        {
          question: 'What is the largest ocean?',
          answers: [
            'Atlantic Ocean',
            'Indian Ocean',
            'Arctic Ocean',
            'Pacific Ocean',
          ],
          correct: 3,
        },
        {
          question: 'Who discovered penicillin?',
          answers: [
            'Marie Curie',
            'Alexander Fleming',
            'Albert Einstein',
            'Isaac Newton',
          ],
          correct: 1,
        },
        {
          question: 'What is the main ingredient in guacamole?',
          answers: ['Tomato', 'Onion', 'Avocado', 'Pepper'],
          correct: 2,
        },
        {
          question: 'Who was the first President of the United States?',
          answers: [
            'George Washington',
            'Thomas Jefferson',
            'Abraham Lincoln',
            'John Adams',
          ],
          correct: 0,
        },
        {
          question: 'What is the currency of Japan?',
          answers: ['Yuan', 'Won', 'Yen', 'Dollar'],
          correct: 2,
        },
        {
          question: 'What is the capital of Australia?',
          answers: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
          correct: 2,
        },
        {
          question: 'Who developed the theory of relativity?',
          answers: [
            'Isaac Newton',
            'Nikola Tesla',
            'Albert Einstein',
            'Galileo Galilei',
          ],
          correct: 2,
        },
        {
          question: 'What is the boiling point of water?',
          answers: ['100°C', '90°C', '80°C', '110°C'],
          correct: 0,
        },
        {
          question: 'What is the largest mammal?',
          answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
          correct: 1,
        },
      ];

      // Shuffle questions and answers
      const shuffledQuestions = fetchedQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
      shuffledQuestions.forEach(question => {
        question.answers = question.answers.sort(() => 0.5 - Math.random());
      });

      return shuffledQuestions;
    };

    dispatch(setQuestions(generateRandomQuestions()));
    dispatch(resetScore());
  }, [dispatch]);

  const handleAnswerPress = (index: number) => {
    if (
      questions[currentQuestionIndex].answers[index] ===
      questions[currentQuestionIndex].answers[
        questions[currentQuestionIndex].correct
      ]
    ) {
      dispatch(incrementScore());
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Leaderboard');
    }
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>
      <FlatList
        data={questions[currentQuestionIndex].answers}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleAnswerPress(index)}
            style={styles.answerButton}>
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  answerButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  answerText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default QuizScreen;
