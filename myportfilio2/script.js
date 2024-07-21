// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}



// const texts = ["I'm a Developer", "I'm a Frontend Developer", "I'm a Web Designer", "I'm XYZ"];
// let index = 0;
// let charIndex = 0;
// const typingSpeed = 100; // Typing speed in milliseconds
// const pauseBetweenTexts = 1000; // Pause between texts in milliseconds

// const changeText = () => {
//   if (charIndex < texts[index].length) {
//     document.getElementById('changing-text').textContent += texts[index].charAt(charIndex);
//     charIndex++;
//     setTimeout(changeText, typingSpeed);
//   } else {
//     setTimeout(() => {
//       document.getElementById('changing-text').textContent = '';
//       charIndex = 0;
//       index = (index + 1) % texts.length;
//       setTimeout(changeText, typingSpeed);
//     }, pauseBetweenTexts);
//   }
// };

// changeText();
