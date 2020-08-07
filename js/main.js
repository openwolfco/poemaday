
getLink = window.location.search;
//getLink = "http://localhost:9000/?=5";

var slug = getLink.split('?=').pop();

console.log("num here: "+slug);
// https://poemaday.openwolf.com/1




function main(x)
{
 // get db.Json
           var xmlhttp = new XMLHttpRequest();
           xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var myObj = JSON.parse(this.responseText);
              document.getElementById("title").innerHTML = myObj.data[x].title;
              document.getElementById("author").innerHTML = myObj.data[x].author;
             // document.getElementById("showDate").innerHTML = myObj.data[x].date;
              document.getElementById("poem").innerHTML = myObj.data[x].poem;
        
              var getId = myObj.data[x].id;

             // document.getElementById("authot").innerHTML = myObj.fields.pum.stringValue;
             //document.getElementById("poem").innerHTML = myObj.fields.contact.stringValue;
            }
           };
           xmlhttp.open("GET", "js/db.json", true);
           xmlhttp.send();
 // get db END -----

}

main(slug);






/*

// BookMark Button - Get BookMark
document.getElementById("bookmark").addEventListener("click", getBookmark);

function getBookmark(){

  //var saveTitle =  document.getElementById("title").innerHTML;
  //var saveAuthor = document.getElementById("author").innerHTML;
//  var savePoem = document.getElementById("poem").innerHTML;

  // Create Index for Bookmark
      if(storage.getItem("bookmarkIndex") === null){
        storage.setItem("bookmarkIndex", 1);
        var bookIndex = 1;
      }else {
        var bookIndex = parseInt(storage.getItem("bookmarkIndex"));
      }

  // Get current Poem ID and Store as Bookmark + BookIndex
    var cId = storage.getItem("currentID");
    storage.setItem("bookmark"+bookIndex, cId);

  // Store current bookmark index
    bookIndex = parseInt(bookIndex + 1);
    storage.setItem("bookmarkIndex", bookIndex);

}

// BookMark Button - Get BookMark
document.getElementById("openBookmark").addEventListener("click", bookMarkPanel);

function bookMarkPanel (){

//Start with Removing contents of Article - HIDE ALL
  document.getElementById("title").innerHTML = 'BOOKMARKS';
  document.getElementById("author").style.display = 'none';
  document.getElementById("poem").style.display = 'none';
  document.getElementById("getDate").style.display = 'none';
  document.getElementById("bookmark").style.display = 'none';
  document.getElementById("text-by").innerHTML = '';
  document.getElementById("text-dot").innerHTML = '';
  document.getElementById("text-comma").innerHTML = '';
// END Hide ALL

// Show All BookMarks
var bmIndex = storage.getItem("bookmarkIndex");
bmIndex = parseInt(bmIndex) + 1;
bmIndex = parseInt(bmIndex);
console.log(bmIndex);
var bIndex = [];
for (var i = 1; i < bmIndex; i++) {
  bIndex[i] = storage.getItem("bookmark"+[i]);
console.log(bIndex);
}

var b1 = bIndex[1];
var b2 = bIndex[2];
var b3 = bIndex[3];
var b4 = bIndex[4];
var b5 = bIndex[5];

var p1, p2, p3, p4, p5 = '';

// TEST - ACCESS DB
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   var pObj = JSON.parse(this.responseText);
  // var title = pObj.data[x].title;
   p1 = pObj.data[b1].title;
    p2 = pObj.data[b2].title;

     p3 = pObj.data[b3].title;
      p4 = pObj.data[b4].title;
       p5 = pObj.data[b5].title;

    document.getElementById("showBookmark").innerHTML = "<ol><li>&nbsp;<a class='bookmarkLink' href='google.com'>"+p1+"</a></li><br><li>&nbsp;<a class='bookmarkLink' href='google.com'>"+p2+"</li>";

//   var author = pObj.data[x].author;
  // var poem = pObj.data[x].poem;
//   var pId = pObj.data[x].id;
  // document.getElementById("authot").innerHTML = myObj.fields.pum.stringValue;
  //document.getElementById("poem").innerHTML = myObj.fields.contact.stringValue;
 }
};
xmlhttp.open("GET", "js/db.json", true);
xmlhttp.send();
// END TEST




}

*/





/* 24 hour based
    var targetHour = 2 ;
    var currentTime = new Date();
    var target = 1;
    // sun 0 mon 1 ... fri 5 sat 6
    var currentDay = currentTime.getDay();
    if(currentTime.getHours() == targetHour) {
        target = (targetHour) - currentTime.getHours() - 1;
        console.log("Its time: "+target);
    }
    else if(currentTime.getHours() < targetHour) {
        target = (targetHour) - currentTime.getHours() - 1;
        console.log("less: "+target);
    }else if(currentTime.getHours() > targetHour){
         target = (targetHour) - currentTime.getHours() - 1;
        console.log(target);
    }
*/

// Set Incremented Target in localstorage
//if (target == 0){
//  dcl = dcl+1;
//  storage.setItem("dateCounter", dcl);
//}

/*
cordova.plugins.notification.local.schedule({
    text: "Would you like to read today's featured poem?",
    firstAt: targetTime.toDate(),
    every: "day",
    icon: "file://img/slim-body.png"
});
*/
/*
// media Query fix
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('author').style.color = "red";
  } else {
  }
}
var x = window.matchMedia("(max-height: 400px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
*/
