var currentDay = document.getElementById('currentDay');
var date = "";
var time="";
var hour="";

//Current Date
var currentTime = function(){
    date = moment(new Date());
    time.html(date.format('MMMM do YYYY, h:mm:ss a'));
    hour=parseInt(date.format("H"));
}

// currentTime();

//Header time
$(document).ready(function(){
    time= $('#currentDay');
    currentTime();
    setInterval(currentTime, 1000);
});

//Adding Cullers
const rows = document.getElementsByClassName("row");
let now = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    var rowString = parseInt(row.id);
    if (now === rowString) {
        setColor(row, "red");
    } else if (now < rowString) {
        setcolor(row,"green");
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
       var id = `text${i}`;
       var localStorageItem = localStorage.getItem(id);
       var data = JSON.parse(localStorageItem);
    //    console.log(data);
       if (data !== null) {
           document.getElementById(id).value = data;
       }
   }
}

getData();




//Adding Cullers 2
// function cullers () {
//     var now = moment().format('H');
//     var timeBlock = $(".description");
//     for (var i=0; i < timeBlock.length; i++) {
//         var blockID = timeBlock[i].id;
//         var changeID = document.getElementById(timeBlock[i].id);
//         if (parseInt(blockID)<now) {
//             $(changeID).addClass('future');
//         }
//         else if(parseInt(blockID)>now){
//             $(changeID).addClass("present");
//         }
//         else {
//             $(changeID).addClass('present');
//         }
//     }
// }

// setInterval(cullers(), (1000*60)*5);
