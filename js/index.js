const card = document.querySelectorAll('.card');
const image = document.querySelectorAll('.image');
const title = document.querySelectorAll('.card__title');
const button = document.querySelectorAll('.card__button');

card[0].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
card[1].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
card[2].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card[0].addEventListener("mouseenter", (e) => {
  card[0].style.cursor = "pointer";
  card[0].style.transition = "none";
  //Popout
  image[0].style.transform = "translateZ(250px)";
  title[0].style.transform = "translateZ(150px)";
  button[0].style.transform = "translateZ(70px)";

});
card[1].addEventListener("mouseenter", (e) => {
  card[1].style.cursor = "pointer";
  card[1].style.transition = "none";
  //Popout
  image[1].style.transform = "translateZ(250px)";
  title[1].style.transform = "translateZ(150px)";
  button[1].style.transform = "translateZ(70px)";

});
card[2].addEventListener("mouseenter", (e) => {
  card[2].style.cursor = "pointer";
  card[2].style.transition = "none";
  //Popout
  image[2].style.transform = "translateZ(250px)";
  title[2].style.transform = "translateZ(150px)";
  button[2].style.transform = "translateZ(70px)";

});

// =======
//Animate Out
card[0].addEventListener("mouseleave", (e) => {
  card[0].style.transition = "all 0.5s ease";
  card[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  
  image[0].style.transform = "translateZ(0px) rotateZ(0deg)";
  title[0].style.transform = "translateZ(0px)";
  button[0].style.transform = "translateZ(0px)";
});
card[1].addEventListener("mouseleave", (e) => {
  card[1].style.transition = "all 0.5s ease";
  card[1].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  
  image[1].style.transform = "translateZ(0px) rotateZ(0deg)";
  title[1].style.transform = "translateZ(0px)";
  button[1].style.transform = "translateZ(0px)";
});
card[2].addEventListener("mouseleave", (e) => {
  card[2].style.transition = "all 0.5s ease";
  card[2].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  
  image[2].style.transform = "translateZ(0px) rotateZ(0deg)";
  title[2].style.transform = "translateZ(0px)";
  button[2].style.transform = "translateZ(0px)";
});