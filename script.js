let SearchBut = document.getElementById("SearchBut");
SearchBut.onclick = function (event) {
  let Search = document.getElementById("Search");
  let n=Search.value ;
  event.stopPropagation();
  
  //let url2 = `http://www.omdbapi.com/?i=tt0944947&Season=1&apikey=5bc4c999`;
let url2 = `http://www.omdbapi.com/?t=${n}&apikey=5bc4c999`;
const promise_test2 = fetch(url2);
promise_test2
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let Actors = document.getElementById("Actors");
    Actors.value = data.Actors;
    let Awards = document.getElementById("Awards");
    Awards.value = data.Awards;
    let Country = document.getElementById("Country");
    Country.value = data.Country;
    let Director = document.getElementById("Director");
    Director.value = data.Director;
    let Genre = document.getElementById("Genre");
    Genre.value = data.Genre;
    let Language = document.getElementById("Language");
    Language.value = data.Language;
    let Metascore = document.getElementById("Metascore");
    Metascore.value = data.Metascore;
    let Plot = document.getElementById("Plot");
    Plot.value = data.Plot;
    let Poster = document.getElementById("Poster");
    Poster.src = data.Poster;
    let Rated = document.getElementById("Rated");
    Rated.src = data.Rated;
  });
};

//let url2 = `http://www.omdbapi.com/?i=tt2354621&apikey=5bc4c999`;

