import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [username,setUsername] = useState(null);
  const [stop,setStop] = useState(false)
  const [earned,setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        { text: "2004", correct: true },
        { text: "2005", correct: false },
        { text: "2006", correct: false },
        { text: "2007", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        { text: "Johnny Depp", correct: false },
        { text: "Leonardo DiCaprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Radcliffe", correct: true },
      ],
    },
    {
      id: 4,
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      id: 7,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "Korea", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
    {
      id: 8,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Jane Austen", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is the smallest unit of matter?",
      answers: [
        { text: "Molecule", correct: false },
        { text: "Atom", correct: true },
        { text: "Electron", correct: false },
        { text: "Proton", correct: false },
      ],
    },
    {
      id: 10,
      question: "Which ocean is the largest by surface area?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      id: 11,
      question: "What is the main ingredient in guacamole?",
      answers: [
        { text: "Tomato", correct: false },
        { text: "Avocado", correct: true },
        { text: "Onion", correct: false },
        { text: "Lemon", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which element is said to keep bones strong?",
      answers: [
        { text: "Iron", correct: false },
        { text: "Calcium", correct: true },
        { text: "Potassium", correct: false },
        { text: "Magnesium", correct: false },
      ],
    },
    {
      id: 13,
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon River", correct: false },
        { text: "Nile River", correct: true },
        { text: "Yangtze River", correct: false },
        { text: "Mississippi River", correct: false },
      ],
    },
    {
      id: 14,
      question: "Which planet is closest to the sun?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Mercury", correct: true },
        { text: "Mars", correct: false },
      ],
    },
    {
      id: 15,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Iron", correct: false },
        { text: "Diamond", correct: true },
        { text: "Silver", correct: false },
      ],
    },
  ];
  
  const moneyPyramid = useMemo(()=>
    [
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 500"},
    {id:5,amount:"$ 1000"},
    {id:6,amount:"$ 2000"},
    {id:7,amount:"$ 4000"},
    {id:8,amount:"$ 8000"},
    {id:9,amount:"$ 16000"},
    {id:10,amount:"$ 32000"},
    {id:11,amount:"$ 64000"},
    {id:12,amount:"$ 125000"},
    {id:13,amount:"$ 250000"},
    {id:14,amount:"$ 500000"},
    {id:15,amount:"$ 1000000"}
  ].reverse(), 

  []); 
    
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
  },[moneyPyramid,questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? <h1 className="endText">You earned: {earned}</h1> :(
          <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
          </div>
          </>
          )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m=>(
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername} />}
      
    </div>
  );
}

export default App;
