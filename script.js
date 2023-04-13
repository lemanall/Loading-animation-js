const percent = document.querySelector(".percent");
const progress = document.querySelector(".progress");

let count = 4;
let per = 16;

const animate = () => {
  if (count === 100 && per === 400) {
    clearInterval();
  } else {
    per = per + 4;
    count = count + 1;
 
    progress.style.width = per + "px";
    percent.textContent = count + "%";
  }
};

let loading = setInterval(animate, 50);
