var currentDay = document.getElementById('currentDay');
var date = "";
var time= $('#currentDay');

//Current Date
var currentTime = function(){
    date = moment().format('MMMM Do YYYY, h:mm:ss a');
    time.text(date);
}

// currentTime();

//Header time
$(document).ready(function(){
    time= $('#currentDay');
    currentTime();
    setInterval(currentTime, 1000);
});

//Adding colors
const rows = document.getElementsByClassName("row");
let now = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    var rowString = parseInt(row.id);
    if (now === rowString) {
        setColor(row, "red");
    } else if (now < rowString) {
        setColor(row,"green");
    } else {
        setColor(row,"grey");
    }
}
    );

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// setColor();

// save to local storage
var saveBtn = document.querySelectorAll('.saveBtn');
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', saveData);
}

function saveData(event) {
    event.preventDefault();
    // console.log(event.target.id);
    const str = `txt${event.target.id.slice(3)}`;
    // console.log(str);
    const elementText = document.getElementById(str).value;
    // console.log(element);
    saveToLocal(str, elementText);
}

function saveToLocal (key, value){
    //Sort before stringify to alsways save scores high to low
    // var sortScores = numbers.sort((a, b) => b.score-a.score);
    //Stringify object into saveable items
    var saveableValue = JSON.stringify(value);
    //Save key highscores with value from saveableValue
    localStorage.setItem(key, saveableValue);
}
function getData(){
    //Get item from local storage
    // var localStorageItem = localStorage.getItem('highscores');
   for (var i=0; i<9; i++) {
       var id = `txt${i}`;
       var localStorageItem = localStorage.getItem(id);
       var data = JSON.parse(localStorageItem);
    //    console.log(data);
       if (data !== null) {
           document.getElementById(id).value = data;
       }
   }
}
getData();

