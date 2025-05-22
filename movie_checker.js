var test_button = document.getElementById("test");

test_button.onclick = test;

function test(){
    var main = document.getElementById("main");
    main.innerHTML = '<p>testing</p>';
}
