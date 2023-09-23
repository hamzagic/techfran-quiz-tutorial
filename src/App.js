import './App.css';
import { useState, useEffect } from 'react';

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      {
        answerText: "New York",
        isCorrect: false
      },
      {
        answerText: "London",
        isCorrect: false
      },
      {
        answerText: "Paris",
        isCorrect: true
      },
      {
        answerText: "Berlin",
        isCorrect: false
      },
    ]
  },
  {
    questionText: "Which band recorded Electric Cafe",
    answerOptions: [
      {
        answerText: "Depeche Mode",
        isCorrect: false
      },
      {
        answerText: "Duran Duran",
        isCorrect: false
      },
      {
        answerText: "Iron Maiden",
        isCorrect: false
      },
      {
        answerText: "Kraftwerk",
        isCorrect: true
      },
    ]
  },
  {
    questionText: "Which of below options is a synth brand?",
    answerOptions: [
      {
        answerText: "Ford",
        isCorrect: false
      },
      {
        answerText: "Nestle",
        isCorrect: false
      },
      {
        answerText: "Pirelli",
        isCorrect: false
      },
      {
        answerText: "Yamaha",
        isCorrect: true
      },
    ]
  },
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
  }, [answers]);

  const handleAnswerClicked = (index) => {
    setSelectedAnswer(index);
    setShowError(false);
  }

  const handleNext = () => {
    if (selectedAnswer === null) {
      setShowError(true);
      return;
    }

    setAnswers([...answers, selectedAnswer]);
    // setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  }

  if (answers.length === questions.length) {
    const correctAnswers = answers.filter((answer, index) =>
      questions[index].answerOptions[answer].isCorrect
    ).length;
    return (
      <div className="main results">
        <div className="quiz-title-container results">
          <h1>Results</h1>
        </div>
        <div>
          <h2>Your score: {correctAnswers} out of {questions.length}</h2>
        </div>
        {questions.map((q, index) =>
          <div key={index} className="results-container">
            <p className="question">{q.questionText}</p>
            <p className="user-answer">Your answer: {q.answerOptions[answers[index]].answerText}</p>
            <p className="correct-answer">Correct Answer: {q.answerOptions.find((option) => option.isCorrect).answerText}
            </p>
          </div>
        )}
        <div className="back-button">
          <button>Back to Main</button>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className='quiz-title-container'>
        <h1>Super Quiz</h1>
      </div>
      <div className='question-container'>
        <h3>{questions[currentQuestion].questionText}</h3>
      </div>
      <div className='answers-container'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) =>
          <button key={index} onClick={() => handleAnswerClicked(index)}>
            {answerOption.answerText}
          </button>
        )}
      </div>

      {showError && <p>Please select an answer!</p>}
      <button onClick={handleNext} className='next-button'>
        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
}

export default App;
