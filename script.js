const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = () => {
  menu.classList.add("active");
  menu.classList.add("block");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
var theme;
var dmode = document.getElementById("dmode");
dmode.onclick = function () {
  document.body.classList.toggle("darkmode");
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
  if (document.body.classList.contains("darkmode")) {
    dmode.textContent = "Light Mode";
    console.log("dmode");
    theme = "d";
  } else {
    dmode.textContent = "Dark Mode";
    console.log("lmode");
    theme = "l";
  }
  localStorage.setItem("pagetheme", JSON.stringify(theme));
}
let Gettheme = JSON.parse(localStorage.getItem("pagetheme"));
console.log(Gettheme);

if (Gettheme === "d") {
  document.body.classList = "darkmode";
  dmode.textContent = "Light Mode";
}
var linkElement = document.getElementById('howtodownload');
linkElement.href = 'https://www.youtube.com/shorts/PQ_Qf6K-nl8';

function createCircularButton() {
  var button = document.createElement('a');
  button.href = 'https://t.me/btechwala6';
  button.target = '_blank';
  button.className = 'telegram';

  var buttonImage = document.createElement('img');
  var imagePaths = [
    { path: 'pic/tele.png', alt: '../pic/tele.png' },
    { path: 'pic/feed.png', alt: '../pic/feed.png' }
  ];

  var currentImageIndex = 0;

  function updateButtonImage() {
    buttonImage.src = imagePaths[currentImageIndex].path;
    buttonImage.alt = imagePaths[currentImageIndex].alt;
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  }

  updateButtonImage();

  setInterval(updateButtonImage, 1000);
  button.appendChild(buttonImage);
  document.body.appendChild(button);
}
createCircularButton();
