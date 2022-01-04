
 function creating_cont_div(namtt) {
  let url2 = `http://www.omdbapi.com/?i=tt22${namtt}&apikey=5bc4c999`;
const promise_test2 = fetch(url2);
promise_test2
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let section_grid=document.getElementById("section_grid");
    let main__grid_item = document.createElement("div");
    let div_grid = document.createElement("div");
    section_grid.append(main__grid_item);
    main__grid_item.append(div_grid);
    
    div_grid.style.backgroundImage=data.Poster;
    div_grid.className = "main__grid-item-content";

    let Actors = document.createElement("input");
    div_grid.append(Actors);
    Actors.value = data.Actors;
    
    let Awards = document.createElement("input");
    div_grid.append(Awards);
    Awards.value = data.Awards;

    let Country = document.createElement("input");
    div_grid.append(Country);
    Country.value = data.Country;

    let Director = document.createElement("input");
    div_grid.append(Director);
    Director.value = data.Director;

    let Genre = document.createElement("input");
    div_grid.append(Genre);
    Genre.value = data.Genre;
    
    let Language = document.createElement("input");
    div_grid.append(Language);
    Language.value = data.Language;
    
    let Metascore = document.createElement("input");
    div_grid.append(Metascore);
    Metascore.value = data.Metascore;

    let Plot = document.createElement("input");
    div_grid.append(Plot);
    Plot.value = data.Plot;
    
    let Rated = document.createElement("input");
    div_grid.append(Rated);
    Rated.value = data.Rated;
  
    
    
    let span = document.createElement("span");
    main__grid_item.append(span);
    span.innerText="some text"
    span.className = "main__grid-item-name";

  }); 
 } 
for (let i = 0; i < 9; i++) {
  
  namtt=Math.trunc(Math.random()*100000)
  console.log(namtt)
  creating_cont_div(namtt);
  
}
 /* let SearchBut = document.getElementById("SearchBut");
SearchBut.onclick = function (event) {
  let Search = document.getElementById("Search");
  let n=Search.value ;
  event.stopPropagation();
  let url2 = `http://www.omdbapi.com/?t=${n}&apikey=5bc4c999`;
};*/

//let url2 = `http://www.omdbapi.com/?i=tt2354621&apikey=5bc4c999`;

