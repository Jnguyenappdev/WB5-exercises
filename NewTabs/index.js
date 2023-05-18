
const googleBtnEl = document.getElementById('googleBtn');
googleBtnEl.onclick = function () {
  window.open('https://google.com', 'google');
};

const w3BtnEl = document.getElementById('w3sBtn');
w3BtnEl.onclick = function () {
  window.open('https://www.w3schools.com/js');
};

const imagesEl = document.getElementById('imgBtn');
imagesEl.onclick = function () {
  // these two are equivalent
  // location.href = './images.html';
  window.open('./images.html', '_self');

  // This one replaces the current page in the browser's history
  // with the specified location when it redirects
  // location.replace('./images.html');
};

const imageGroupEl = document.getElementsByClassName('imageGroup')

Array.from(imageGroupEl).forEach((imageGroupEl) => {
    imageGroupEl.style.border = '2px solid red';
    imageGroupEl.style.marginBottom ='2em'
})

const imagesWithoutAltEl = document.querySelectorAll('img:not([alt])');

Array.from(imagesWithoutAltEl).forEach((imgEl) => {
    imgEl.alt ='graffiti image';
})