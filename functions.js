// create a function that swabs the href of the css file and change it to style2.css

function changeStyler() {
    var oldlink = document.getElementsByTagName("link")[0].href;
    //remove everything before the last slash into a new variable called cleanlink
    var cleanlink = oldlink.substring(oldlink.lastIndexOf('/') + 1);
    
    
    
    // if oldlink is style.css then change it to style2.css
    if (cleanlink == "style.css") {
        document.getElementsByTagName("link")[0].href = "style2.css";
        // save the new link to local storage
        localStorage.setItem("style", "style2.css");
        
    }
    else {
        document.getElementsByTagName("link")[0].href = "style.css";
        // save the new link to local storage
        localStorage.setItem("style", "style.css");
    }

    //get the text in class = "name" and change it to the text "Howdy!!!"
    var intro = document.getElementsByClassName("name")[0].innerHTML;

    if (intro == "<h1>Adam Sulemanji</h1>") {
        document.getElementsByClassName("name")[0].innerHTML =  "<h1>Howdy!!!</h1>";
        localStorage.setItem("intro", "<h1>Howdy!!!</h1>");
    }
    else {
        document.getElementsByClassName("name")[0].innerHTML = "<h1>Adam Sulemanji</h1>";
        localStorage.setItem("intro", "<h1>Adam Sulemanji</h1>");
    }
    

    // get the class name hhh and change the src to the other image
    
    
    

    // if (headshot == "pictures/headshot.jpg") {
    //     document.getElementsByID("headshot")[0].src = "pictures/bowtie.jpg";
    //     localStorage.setItem("headshot", "pictures/bowtie.jpg");
    // }
    // else {
    //     document.getElementsByID("headshot")[0].src = "pictures/headshot.jpg";
    //     localStorage.setItem("headshot", "pictures/headshot.jpg");
    // }

    
}

// create a function that checks if there is a style saved in local storage and if there is then change the css file to that style

window.onload =  function() {
    // check if there is a style saved in local storage
    if (localStorage.getItem("style") !== null) {
        // if there is then change the css file to that style
        document.getElementsByTagName("link")[0].href = localStorage.getItem("style");

    }
    if (localStorage.getItem("intro") !== null) {
        document.getElementsByClassName("name")[0].innerHTML = localStorage.getItem("intro");
    }
}


