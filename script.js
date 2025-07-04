
function checkAnswer(option) {
  const result = document.getElementById("quiz-result");
  if (option === 'c') {
    result.textContent = "✅ Correct! Paris is the capital of France.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Incorrect. Try again!";
    result.style.color = "red";
  }
}


function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
      console.error("Error fetching joke:", error);
    });
}
