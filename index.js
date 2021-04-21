fetch("https://api.chucknorris.io/jokes/random")
  .then(() => {
    const jokeContainer = document.querySelector('joke');

    jokeContainer.text = data.value;
  })
