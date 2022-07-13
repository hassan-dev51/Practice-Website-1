console.log("WELCOME TO CODING AGAIN");

//creating tabbed button functionality
const btns_portfolio = document.querySelector(".btns-portfolio");
const btn_portfolio = document.querySelectorAll(".btn-portfolio");
const image_overaly = document.querySelectorAll(".image-overally");

btns_portfolio.addEventListener("click", (e) => {
  const btn_click = e.target;

  btn_portfolio.forEach((curElem) => {
    curElem.classList.remove("b-port");
  });

  btn_click.classList.add("b-port");
  //to find the number of image

  const btn_number = btn_click.dataset.btnNumber;

  const active_image = document.querySelectorAll(
    `.btn-portfolio--${btn_number}`
  );

  image_overaly.forEach((currElem) => {
    currElem.classList.add("portfolio-images-not-active");
  });
  active_image.forEach((curElem) => {
    curElem.classList.remove("portfolio-images-not-active");
  });
});

//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
