var searchButton=document.querySelector("#search")
var randomButton=document.querySelector("#random")
searchButton.onclick=search
randomButton.onclick=random
async function retreiveDatabase(){var url="https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/movies/moviesOwned";var response=await fetch(url);var json=await response.json()
return json.moviesOwned}
async function random(){var input=$("#search-input")
input.value="";var dataBase=await retreiveDatabase()
var x=Math.floor((Math.random()*dataBase.length));var movieData=dataBase[x]
show_movie_info(movieData)}
async function search(){var input=$("#search-input")
var inputText=input.val()
var movieData=null
var dataBase=await retreiveDatabase()
for(var i=0;i<dataBase.length;i++){if(dataBase[i].movie.toLowerCase()==inputText.toLowerCase()){movieData=dataBase[i]
break}}
show_movie_info(movieData,inputText)}
function show_movie_info(movie_data,inputText){var movieName=$("#name")
var movieLocation=$("#location")
var movieLetter=$("#letter")
var movieNumber=$("#number")
if(movie_data){movieName.text("Movie Name: "+movie_data.movie)
movieLocation.text("Location: "+movie_data.location)
movieLetter.text("Letter: "+movie_data.letter)
movieNumber.text("Number: "+movie_data.number)}else{alert("Movie: "+inputText+" Not Found. Please check name and try again")
movieName.text("Movie Name: Movie Not Found")
movieLocation.text("Location: ")
movieLetter.text("Letter: ")
movieNumber.text("Number: ")}}
function displayMovieImg(){var randomImgNum=Math.floor(Math.random()*10)+1
var displayImg=$("#movie-img");displayImg.fadeTo("slow",0,function(){displayImg.attr("src","images/img_"+randomImgNum+".png")});displayImg.fadeTo(5000,100)}
$(document).keydown(function(event){if(event.key==="Enter"){search()}})
setInterval(displayMovieImg,2000)
