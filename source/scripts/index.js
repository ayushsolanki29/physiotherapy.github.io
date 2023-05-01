document.querySelector("body").insertAdjacentHTML("beforeend", 
'<div class="loader"><div class="loading"><svg width="64px" height="48px"><polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline> <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline></svg></div></div>');window.addEventListener("load", function () {document.querySelector(".loader").remove();});

// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    let nav = document.querySelector(".navbar");
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


