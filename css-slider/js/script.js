window.addEventListener("load", handleLoad);

var displaySlide;
var counter;

var imageList = [
  { name: "1", image: "img/1.jpg" },
  { name: "2", image: "img/2.jpg" },
  { name: "3", image: "img/3.jpg" },
  { name: "4", image: "img/4.jpg" }
];

function handleLoad() {
  const prev = document.getElementById("prevBtn");
  const next = document.querySelector(".next-btn");

  displaySlide = document.getElementById("thisSlide");
  counter = 0;

  // for(var i = 0; i < imageList.length; i++){
  //     let navListContainer = document.getElementById('slideNav');
  //     let createSlideNav = document.createElement('li');
  //     document.navListContainer.append(createSlideNav);
  //     createSlideNav.class = "slideElement";
  // }

  prev.addEventListener("click", handlePrevClick);
  next.addEventListener("click", handleNextClick);
}

function handlePrevClick() {
  if (counter === 0) {
    counter = imageList.length - 1;
  }

  displaySlide.src = imageList[counter].image;

  counter--;
}

function handleNextClick() {
  if (counter === imageList.length - 1) {
    counter = 0;
  }

  displaySlide.src = imageList[counter].image;
  counter++;
}
