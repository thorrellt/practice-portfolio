// add active nav class on link switch
const navUL = document.getElementById("nav-ul");
const navLi = document.getElementsByClassName("nav-li");

for(let i = 0; i < navLi.length; i++){
    navLi[i].addEventListener("click", function() { //find element that was clicked
        const current = document.getElementsByClassName("active"); //find class with active in it
        current[0].className = current[0].className.replace(" active", ""); //delete that active
        this.className += " active"; // add active status to element that was clicked
    });
}

//slide the content section on link click
let links = document.querySelectorAll(".link");
let allContent = document.querySelectorAll(".content");


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter);

        allContent.forEach((content) => {
        if (filter === "content") {
            content.style.display = "block"
        } else if (content.classList.contains(filter)) {
            content.style.display = "block"
        } else {
            content.style.display = "none"
        }

        })
    });
}

// TEXT EFFECT
// TEXT ARRAY
const dataText = ["Web Developer", "Ninja", "Retired Avenger", "Dad"];
document.addEventListener("DOMContentLoaded", typingEffect);

function typingEffect() {
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".text-effect").innerHTML = text.substring(0, i + 1) + "<span class='effect'></span>";

            // SET DELAY BEFORE NEXT CHARACTER
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100)
        } else if (typeof fnCallback == "function") {
            setTimeout(fnCallback, 700);
        }
    }

    // START Typing
    function startTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function () {
                startTextAnimation(0);
            }, 2000)
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                startTextAnimation(i + 1);
            });
        }
    }
    startTextAnimation(0);
}