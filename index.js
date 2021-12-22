let searchBtn=document.querySelector("#search-btn");
let searchFrom=document.querySelector(".header .search-form");

//點擊放大鏡變x form出現
searchBtn.onclick=()=>{
    searchBtn.classList.toggle("fa-times");
    searchFrom.classList.toggle('active');
}

let menu=document.querySelector("#menu-btn")
let navbar=document.querySelector(".header .navbar")

//點擊menu
menu.onclick=()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle('active');
  
}

//滾動時移除效果
window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchFrom.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove('active');
}

// 綁定圖片
let slides=document.querySelectorAll('.home .slide');
let index=0
//設定左右按鈕
function next(){
    slides[index].classList.remove('active');
    index=(index+1)%slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index=(index-1+slides.length)%slides.length;
    slides[index].classList.add('active');
}