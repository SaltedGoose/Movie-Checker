var searchButton = document.getElementById("search")
var randomButton = document.getElementById("random")

searchButton.onclick = search
randomButton.onclick = random

async function retreiveDatabase (){
    var url = "https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/movies/moviesOwned";
    var response = await fetch(url);
    var json = await response.json()
    return json.moviesOwned
}

async function random(){
    dataBase = await retreiveDatabase()

    var x = Math.floor((Math.random() * dataBase.length));
    movieData = dataBase[x]

    show_movie_info(movieData)
}


async function search() {
    var input = document.getElementById("search-input")
    var inputText = input.value
    var movieData = null

    dataBase = await retreiveDatabase()
    for (var i = 0; i < dataBase.length; i++) {
        if (dataBase[i]["movie"].toLowerCase() == inputText.toLowerCase()){
            movieData = dataBase[i]
            break
        }
    }

    show_movie_info(movieData, inputText)
}

function show_movie_info(movie_data, inputText){
    var movieName = document.querySelector("#name")
    var movieLocation = document.getElementById("location")
    var movieLetter = document.getElementById("letter")
    var movieNumber = document.getElementById("number")
    
    if (movie_data){
        movieName.innerText = "Movie Name: " + movie_data["movie"]
        movieLocation.innerText = "Location: " + movie_data["location"]
        movieLetter.innerText = "Letter: " + movie_data["letter"]
        movieNumber.innerText = "Number: " + movie_data["number"]
    }
    else{
        alert("Movie: " + inputText + " Not Found. Please check name and try again")
        movieName.innerText = "Movie Name: Movie Not Found" 
        movieLocation.innerText = "Location: "
        movieLetter.innerText = "Letter: "
        movieNumber.innerText = "Number: "
    }
}

