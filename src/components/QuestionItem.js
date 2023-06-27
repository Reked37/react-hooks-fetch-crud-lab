import React from "react";

function QuestionItem({ question, removeQuestion, onUpdateQuestion1 }) {
  const { id, prompt, answers, correctIndex } = question;

  function patchQuestion(event){
    console.log(event)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({"correctIndex": event.target.value})
    })
    .then(res=>res.json())
    .then((updateQuestion)=>onUpdateQuestion1(updateQuestion))
  }

  //delete quesiton
  function fetchDeleteQuestion() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => removeQuestion(question))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={patchQuestion}>{options}</select>
      </label>
      <button onClick={fetchDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
