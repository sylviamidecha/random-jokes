const randomJokes = document.getElementById("radom__jokes");
const randomJokesCartegory = document.getElementById("jokes__categories");
console.log(randomJokesCartegory);
const joke = document.getElementById("jokes");
function fetchRandomJokes() {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      randomJokes.textContent = data.value;
    });
}
function fetchRandomJokesCartegory() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((cartegory) => {
        const options = document.createElement("option");
        options.setAttribute("value", cartegory);
        options.textContent = cartegory;
        console.log(options);
        randomJokesCartegory.append(options);
      });
    });
}
function jokes(category) {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        joke.textContent=data.value
      console.log(category);
      console.log(data);
    });
}
fetchRandomJokes();
fetchRandomJokesCartegory();
randomJokesCartegory.addEventListener("change", function (e) {
  jokes(e.target.value);
});
