
const jokesWrapper = document.querySelector(".jokes-wrapper")


function buildJokeItem(joke) {
  let jokeText = ""
  if (joke.type == "twopart") {
    jokeText = `- ${joke.setup} <br/> - ${joke.delivery}`
  }
  else {
    jokeText = joke.joke
  }


  return `
    <li class="joke">
      <p>${jokeText}</p>
      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </li>
  `
}


function renderJokes(jokes) {
  jokesWrapper.innerHTML = jokes.map(buildJokeItem).join("")
}

function getJokes() {
  fetch("https://v2.jokeapi.dev/joke/any?amount=10").then((response) => response.json()).then(answer => renderJokes(answer.jokes))
}

getJokes()