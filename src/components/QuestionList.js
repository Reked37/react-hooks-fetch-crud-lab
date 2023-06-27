import React, {useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questioninfo, onDeleteQuestion, onUpdateQuestion}) {
 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questioninfo.map((questioninfo)=>{
        return <QuestionItem  
        key={questioninfo.id} 
        question={questioninfo} 
        removeQuestion={onDeleteQuestion}
        onUpdateQuestion1={onUpdateQuestion}
        />
      })}  
      </ul>
    </section>
  );
}

export default QuestionList;