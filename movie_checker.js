let searchButton = document.getElementById("search")

searchButton.onclick = search

async function find(inputText){
    let url = 'https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/movies/moviesOwned';
    let response = await fetch(url);
    let json = await response.json();
    // Do something with the data
        for (let i = 0; i < json.moviesOwned.length; i++) {
            if (json.moviesOwned[i]["movie"].toLowerCase() == inputText.toLowerCase()){
                return json.moviesOwned[i]
            }
        }
        return null
};


async function search() {
    let input = document.getElementById("search-input")
    let inputText = input.value

    let movie_data = await find(inputText)

    let movieName = document.getElementById("name")
    let movieLocation = document.getElementById("location")
    let movieLetter = document.getElementById("letter")
    let movieNumber = document.getElementById("number")
    
    if (movie_data){
        movieName.innerHTML = "Movie Name: " + movie_data["movie"]
        movieLocation.innerHTML = "Location: " + movie_data["location"]
        movieLetter.innerHTML = "Letter: " + movie_data["letter"]
        movieNumber.innerHTML = "Number: " + movie_data["number"]
    }
    else{
        movieName.innerHTML = "Movie Name: Movie Not Found" 
        movieLocation.innerHTML = "Location: "
        movieLetter.innerHTML = "Letter: "
        movieNumber.innerHTML = "Number: "
    }
}