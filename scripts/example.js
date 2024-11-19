// var year = 2024;
// var message = "the year is";
// message += year;

// alert(message);

// if (1>2) {
//     alert('sad')
// } else{
//     alert('mlgb')
// }
// num = 6
// if ( num >= 5 && num <= 10 ) {
//     alert("The number is in the right range.");
//    }

// var count = 1;
// while (count < 11) {
//     alert(count);
//     count++;
// }

// function shout() {
//     var beatles = Array("John","Paul","George","Ringo");
//     for (var count = 0 ; count < beatles.length; count++ ) {
//      alert(beatles[count]);
//     }
// }
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     alert (body_element.childNodes.length);
// }

// window.onload = countBodyChildren;

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    }
    return true;
   }
   
   


   function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
    return !showPic(this);
    }
    }
   }
   

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
// window.onload(prepareGallery)