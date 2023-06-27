import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/questions`)
    .then(res=>res.json())
    .then(data=>setQuestions(data),
  )},[])
  
  function handleAddQuestion(formData){
    // console.log("form:", formData)
    setQuestions([...questions,formData])
  }


 //delete question
 function handleDelete(deleteQuestion){
  // console.log("please delete", deleteQuestion)
  const removeQuestion= questions.filter((question)=> question.id !==deleteQuestion.id)
  setQuestions(removeQuestion)
  // console.log("deleted")
 }

 function handleUpdate(updateQuestion){
  console.log("update")
  const newAnswer= questions.map((answer)=>{
    if(answer.id === updateQuestion.id){
      return updateQuestion
    }else{return answer}
    
  })
  setQuestions(newAnswer)
 }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
      onAddQuestion={handleAddQuestion}
      /> : <QuestionList 
      questioninfo={questions}
      onDeleteQuestion={handleDelete}
      onUpdateQuestion={handleUpdate}
      />}
    </main>
  );
}

export default App;
