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