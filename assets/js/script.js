const contact_btn = document.getElementById("contact-btn");
const contact_div = document.getElementById("contact-div");
const logo_links_close = document.getElementById("logo-links-close");
const logo_links_close_div = document.getElementById("logo-links");
const logo_div = document.getElementById("logo-div");
const logo_img = document.getElementById("logo-img");

const home_div = document.getElementById("home");
const close_btn = document.getElementById("close-btn"); // close for about section
const close_btn1 = document.getElementById("close-btn1"); // close for work section
const close_btn2 = document.getElementById("close-btn2"); // close for service section
const close_btn3 = document.getElementById("close-btn3"); // close for blog section
const about_btn = document.getElementById("about");
const about_section = document.getElementById("about-section");
const blog_card = document.querySelectorAll(".blog-card");
const blog_back = document.querySelectorAll(".blog-back-a");

const work_section = document.getElementById("work-section");
const work_btn = document.getElementById("work");
const service_section = document.getElementById("service-section");
const service_btn = document.getElementById("service");
const blog_section = document.getElementById("blog-section");
const blog_btn = document.getElementById("blog");
const popup_btn = document.getElementById("popup-close-btn");
const work_popup_div = document.getElementById("work-popup");
const work_card = document.getElementsByClassName("work-card");
const blog_pop = document.getElementsByClassName("blog-pop");

// contact div show and hide
var flag = true;
function showContactDiv() {
  if (flag) {
    contact_div.style.display = "flex";
    contact_div.classList.add("contact-div-animation");
    flag = false;
  } else if (!flag) {
    contact_div.style.display = "none";
    flag = true;
  }
}

// logo links show
logo_img.addEventListener("click", ()=>{
  logo_links_close_div.style.display="block";
  logo_div.style.padding="10px";
  logo_img.style.display="none";
});

// logo links hide
logo_links_close.addEventListener("click", ()=>{
  logo_div.style.padding="1rem";
  logo_links_close_div.style.display="none";
  logo_img.style.display="block";
});

// about section show
about_btn.addEventListener("click", () => {
  home_div.style.display = "none";
  about_section.classList.add("section-animation");
  about_section.style.display = "block";
});

// about section hide
close_btn.addEventListener("click", () => {
  home_div.style.display = "block";
  about_section.style.display = "none";
});

// work section show
work_btn.addEventListener("click", () => {
  home_div.style.display = "none";
  work_section.classList.add("section-animation");
  work_section.style.display = "block";
});

// work section hide
close_btn1.addEventListener("click", () => {
  home_div.style.display = "block";
  work_section.style.display = "none";
});

// service section show
service_btn.addEventListener("click", () => {
  home_div.style.display = "none";
  service_section.classList.add("section-animation");
  service_section.style.display = "block";
});

// service section hide
close_btn2.addEventListener("click", () => {
  home_div.style.display = "block";
  service_section.style.display = "none";
});

// blog section show
blog_btn.addEventListener("click", () => {
  home_div.style.display = "none";
  blog_section.classList.add("section-animation");
  blog_section.style.display = "block";
});

// service section hide
close_btn3.addEventListener("click", () => {
  home_div.style.display = "block";
  blog_section.style.display = "none";
});

// mixitup filter work
let mixerPortfolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

// link active work
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

// work popup show
for (let i = 0; i < work_card.length; i++) {
  work_card[i].addEventListener("click", () => {
    work_section.style.display = "none";
    work_popup_div.style.display = "block";
    contact_btn.style.display = "none";
  });
}

//  work popup hide
popup_btn.addEventListener("click", () => {
  work_section.style.display = "block";
  work_popup_div.style.display = "none";
  contact_btn.style.display = "block";
});


// blog popup show
for (let i = 0; i < blog_card.length; i++) {
  blog_card[i].addEventListener("click", () => {
    blog_section.style.display = "none";
    blog_pop[i].style.display = "block";
    contact_btn.style.display = "none";
  });
}
//  blog popup hide
for (let i = 0; i < blog_back.length/2; i++) {
blog_back[2*i].addEventListener("click", () => {
  blog_section.style.display = "block";
  blog_pop[i].style.display = "none";
  contact_btn.style.display = "block";
});
blog_back[2*i +1].addEventListener("click", () => {
  blog_section.style.display = "block";
  blog_pop[i].style.display = "none";
  contact_btn.style.display = "block";
});
}

// service section hover images
// const service_card= document.querySelectorAll(".service-card");
// for(let i=0;i<service_card.length;i++){
//   service_card[i].style.background='url("../images/pop1.jpg")';
// }