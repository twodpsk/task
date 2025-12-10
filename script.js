/* --------------------
   메인 슬라이드
--------------------- */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.style.display = i === index ? "block" : "none";
  });

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

document.querySelector(".prev").addEventListener("click", () => {
  let newIndex = currentSlide - 1;
  if (newIndex < 0) newIndex = slides.length - 1;
  showSlide(newIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  let newIndex = currentSlide + 1;
  if (newIndex >= slides.length) newIndex = 0;
  showSlide(newIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// 첫 슬라이드 표시
showSlide(0);


/* --------------------
   스르륵 이동 (부드러운 스크롤)
--------------------- */
document.querySelectorAll('[onclick]').forEach(el => {
  el.addEventListener("click", (e) => {
    const id = el.getAttribute("onclick").match(/#.+/)[0];
    const target = document.querySelector(id);

    window.scrollTo({
      top: target.offsetTop - 10,
      behavior: "smooth"
    });
  });
});
