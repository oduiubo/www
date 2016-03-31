var  image2Src = null;

function getImage1Data(){
    var  image1Src;
    var xhttp = new XMLHttpRequest();
    xhttp.open("Get", 'some Url', false);
    xhttp.send(null);
    image1Src = xmlhttp.responseText; //Assume src = 'myFirstImg.png', 200x200 px
}


function getImage2Data(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
            getSrc(xmlhttp.responseText);
    }
       xhttp.open("Get", 'some Url', true);
        xhttp.send(null);
}

function getSrc(text){
    image2Src = text; //Assume src = 'myLastImg.png', 10x10 px
}
/*Dynamically add two buttons on page load and these buttons should call getImage1Data and getImage2Data. Please don't use any libraries.*/


/*##########################################################################*/

/* Code for Question # 8 */

var firstEle = document.querySelector("#firstButton");
var secondEle = document.querySelector("#secondButton");
var thirdEle = document.querySelector("#thirdButton");
/*...has multiple elements...*/
var lastEle = document.querySelector("#lastButton");

/*  Now adding event listeners to all buttons*/

firstEle.addEventListener("click", clickHandler, false);
secondEle.addEventListener("click", clickHandler, false);
thirdEle.addEventListener("click", clickHandler, false);
/*...has multiple elements...*/
lastEle.addEventListener("click", clickHandler, false);

function clickHandler(e) {
     clickedEle = e.target.id;
    alert(clickedEle);
}