var menu = document.querySelector(".hamburger");
var sidebar = document.querySelector(".search-bar");
var container = document.querySelector(".video-grid");
var categories = document.querySelector(".categories");

menu.onclick = function(){
    sidebar.classList.toggle("extended");
    container.classList.toggle("extended-video-grid");
    categories.classList.toggle("extended-categories");
}