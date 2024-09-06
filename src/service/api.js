export async function getQuestion(id){
  const data = await fetch(`http://localhost:8000/api/question/${id}`, {
    headers:{
        "Content-type":"application/json"
    },
    method:"GET"
  })
  const res = await data.json();
  return res;
}

export async function postAnswer(currentId, answers){
  const data = await fetch(`http://localhost:8000/api/question/${currentId}/answer`,{
    headers:{
      "Content-type":"application/json"
    },
    body:answers
  })
  const res = await data.json();
  return res;
}