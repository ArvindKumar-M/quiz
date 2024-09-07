export async function getQuestion(id) {
  const data = await fetch(`http://localhost:8000/api/question/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  const res = await data.json();
  return res;
}

export async function postAnswer(currentQuestionId, answers) {
  console.log(currentQuestionId, answers);
  try {
    const data = await fetch(
      `http://localhost:8000/api/question/${currentQuestionId}/answer`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(answers),
      }
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
  }
}


