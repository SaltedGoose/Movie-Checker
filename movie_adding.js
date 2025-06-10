let addButton=document.getElementById("add")
addButton.onclick=add
async function add(){let url='https://api.sheety.co/b28a011384b372aeb5d4b9e2e430e43a/movies/moviesOwned';let response=await fetch(url);let json=await response.json();let movie_list=json.moviesOwned}
