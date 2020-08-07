
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
