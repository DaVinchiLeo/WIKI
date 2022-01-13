function creating_cont_div(namtt) {
    let url2 = `http://www.omdbapi.com/?${namtt}&apikey=fee19671`;
    const promise_test2 = fetch(url2);
    promise_test2
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let section_grid = document.getElementById("section_grid");
            let main__grid_item = document.createElement("div");
            let div_grid = document.createElement("div");
            section_grid.append(main__grid_item);
            main__grid_item.append(div_grid);


            div_grid.className = "main__grid-item-content";

            //седлать через цикл!!!!
            // разбить по логике
            //resize для конваса;
            //let massApi = ["Actors", "Awards", "Country", "Director", "Genre", "Language", "Metascore", "Plot", "Rated"];

            let titleApi = Object.keys(data); //получаю массив с заголовками из Api
            let poster = document.createElement("img");
            poster.className = "poster_img"
            poster.src = data.Poster
            div_grid.append(poster);
            for (let i = 0; i < titleApi.length; i++) {
                let element = titleApi[i];

                let label = document.createElement("label");
                label.className = "label_in_film";
                let input = document.createElement("p");
                input.id = element;
                label.for = element;

                if (data[element] != "N/A") {
                    label.innerText = element;
                    input.innerText = data[element];

                    div_grid.append(label);
                    div_grid.append(input);

                }

            }

            let span = document.createElement("span");
            main__grid_item.append(span);
            span.innerText = data.Title;
            span.className = "main__grid-item-name";
        });
}
for (let i = 0; i < 5; i++) {

    namtt = "t=guardians of"
    console.log(namtt);
    creating_cont_div(namtt);
}
let SearchBut = document.getElementById("header__btn");
SearchBut.onclick = function(event) {
    let Search = document.getElementById("Search");
    let n = Search.value;
    let div_for_Search = document.createElement('div')
    div_for_Search.className = "main__grid-item-content"
    event.stopPropagation();
    let url = `http://www.omdbapi.com/?t=${n}&apikey=5bc4c999`;

};