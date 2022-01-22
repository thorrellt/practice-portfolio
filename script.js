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