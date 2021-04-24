import { shuffleArray } from './utils';
export interface Question  {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionState[]> => {
  const request = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
 console.log(request)
  const data = await (await fetch(request)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};