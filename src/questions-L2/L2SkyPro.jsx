import React from "react";
import './L2Queries.css'
// import FlashCard from "./FlashCard";

const L2SkyPro = (props) => {
//   console.log(props);
//   let [questionIndex, setQuestionIndex] = useState(0);

//   const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

//   const currentQuestion = props.questions[questionIndex];


const queries = [
    {
        text: 'Packages',
        handler: props.actionProvider.handlePackageInfo,
        id: 1,
    },
    {
        text: 'Languages',
        handler: props.actionProvider.handleLanguageInfo,
        id: 2,
    },
    {
        text: 'Support',
        handler: props.actionProvider.handleSupportInfo,
        id: 3,
    },
    
    ]
     const buttonsMarkup = queries.map((query) => (
    <button key={query.id} onClick={query.handler} className="l2-button">
      {query.text}
    </button>
  ));

 
  return (
    // <FlashCard
    //   question={currentQuestion.question}
    //   answer={currentQuestion.answer}
    //   incrementIndex={incrementIndex}
    // />
    <div className="l2-container">{buttonsMarkup}</div>
  );
};

export default L2SkyPro;