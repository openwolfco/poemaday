
getLink = window.location.search;
//getLink = "http://localhost:9000/?=5";

var slug = getLink.split('?=').pop();

console.log("num here: "+slug);




function main(x)
{
 // get db.Json
           var xmlhttp = new XMLHttpRequest();
           xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var myObj = JSON.parse(this.responseText);
              document.getElementById("title").innerHTML = myObj.data[x].title;
              document.getElementById("author").innerHTML = myObj.data[x].author;
              document.getElementById("poem").innerHTML = myObj.data[x].poem;
              var getId = myObj.data[x].id;

            }
           };
           xmlhttp.open("GET", "js/db.json", true);
           xmlhttp.send();
 // get db END -----

}


main(slug);



