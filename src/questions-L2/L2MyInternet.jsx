import React from "react";
import './L2Queries.css'
// import FlashCard from "./FlashCard";

const L2MyInternet = (props) => {
//   console.log(props);
//   let [questionIndex, setQuestionIndex] = useState(0);

//   const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

//   const currentQuestion = props.questions[questionIndex];


const queries = [
    {
        text: 'Add new connection',
        handler: props.actionProvider.handlenewConnection,
        id: 1,
    },
    {
        text: 'Register a Complaint',
        handler: props.actionProvider.handlenewComplaint,
        id: 2,
    },
    {
        text: 'Billing',
        handler: props.actionProvider.handleInternetBilling,
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

export default L2MyInternet;