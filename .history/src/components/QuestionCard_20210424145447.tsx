import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalGuestions: number;
}
const QuestionCard: React.FC = ({ question, answers, callback, useerAnswer, questionNr, totalQuestions}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr}/{totalQuestions};
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard;
