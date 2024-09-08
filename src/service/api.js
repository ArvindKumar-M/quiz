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

export async function getResult(userId) {
  const data = await fetch("http://localhost:8000/api/score", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await data.json();
  return res;
}

export async function takeRetest() {
  const data = await fetch("http://localhost:8000/api/retest", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await data.json();
  return res;
}
