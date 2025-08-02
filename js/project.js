// Counter //
document,addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if(current == end){
            clearInterval(timer);
        }
    }, step);
 }
counter("count1", 0, 4800, 6000);
counter("count2", 99, 999, 5400);
counter("count3", 0, 2649, 4000);
counter("count4", 0, 2151, 4000);   
}); 

// Navbar Design //
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// Navbar Hide While Responsive //
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(b){
b.addEventListener("click", function(){
    navCollapse.classList.remove("show");
})
})