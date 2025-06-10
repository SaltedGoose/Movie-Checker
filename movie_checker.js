var searchButton=document.querySelector("#search")
var randomButton=document.querySelector("#random")
searchButton.onclick=search
randomButton.onclick=random
async function retreiveDatabase(){var url="https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/movies/moviesOwned";var response=await fetch(url);var json=await response.json()
return json.moviesOwned}
async function random(){var input=document.querySelector("#search-input")
input.value="";var dataBase=await retreiveDatabase()
var x=Math.floor((Math.random()*dataBase.length));var movieData=dataBase[x]
show_movie_info(movieData)}
async function search(){var input=document.querySelector("#search-input")
var inputText=input.value
var movieData=null
var dataBase=await retreiveDatabase()
for(var i=0;i<dataBase.length;i++){if(dataBase[i].movie.toLowerCase()==inputText.toLowerCase()){movieData=dataBase[i]
break}}
show_movie_info(movieData,inputText)}
function show_movie_info(movie_data,inputText){var movieName=document.querySelector("#name")
var movieLocation=document.querySelector("#location")
var movieLetter=document.querySelector("#letter")
var movieNumber=document.querySelector("#number")
if(movie_data){movieName.innerText="Movie Name: "+movie_data.movie
movieLocation.innerText="Location: "+movie_data.location
movieLetter.innerText="Letter: "+movie_data.letter
movieNumber.innerText="Number: "+movie_data.number}else{alert("Movie: "+inputText+" Not Found. Please check name and try again")
movieName.innerText="Movie Name: Movie Not Found"
movieLocation.innerText="Location: "
movieLetter.innerText="Letter: "
movieNumber.innerText="Number: "}}
function displayMovieImg(){var randomImgNum=Math.floor(Math.random()*10)+1
var displayImg=document.querySelector("#movie-img")
displayImg.setAttribute("src","images/img_"+randomImgNum+".png")}
document.addEventListener("keydown",function(event){console.log(event.key)
if(event.key==="Enter"){search()}})
setInterval(displayMovieImg,10000)
