fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then((data) => {
        const jokeContainer = document.querySelector('#joke');

        jokeContainer.textContent = data.value;
    })