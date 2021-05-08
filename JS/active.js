//Get the container element

let btnContainer = document.getElementById("myBtn");

// get all buttons with class = "nav__link" inside the container

let btns = btnContainer.getElementsByClassName("nav__link");

// loop through the buttons and add the active class to the current/clicked button

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let currrent = document.getElementsByClassName("proactive")
    })
}

// if there's no active class

if (current.length > 0) {
    current[0].className = current[0].className.replace("proactive", "");
}

// add the active class to the current/clicked button

this.className += "proactive";




