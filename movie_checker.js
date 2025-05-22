var search_button = document.getElementById("search");
var data = parseCSV

search_button.onclick = search;

function search(){
    var main = document.getElementById("main");
    main.innerHTML = data;
}
