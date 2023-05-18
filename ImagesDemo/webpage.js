const allP = document.getElementsByTagName("p");
Array.from(allP).forEach((allP) => {
  allP.style.border = " 1px solid black";
});
let i =1;
const imgs = document.getElementsByTagName("img");
Array.from(imgs).forEach((img) => {
  img.classList.add("roundedImg");

  const altText = 'Rotated Rounded Image' + i;
  img.alt = altText
  i++
});
