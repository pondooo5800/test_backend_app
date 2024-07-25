// store/quizSlice.ts
import {createSlice} from '@reduxjs/toolkit';

interface QuizState {
  questions: Array<{question: string; answers: string[]; correct: number}>;
  score: number;
}

const initialState: QuizState = {
  questions: [],
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    resetScore(state) {
      state.score = 0;
    },
  },
});

export const {setQuestions, incrementScore, resetScore} = quizSlice.actions;
export default quizSlice.reducer;
