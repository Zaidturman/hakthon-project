
const content = document.querySelector(".paragraph");
const readMoreBtn = document.querySelector("#readMoreBtn");



readMoreBtn.addEventListener('click',(e)=>{
  content.classList.toggle("show-more");
  if (content.classList.contains("show-more")) {
    readMoreBtn.textContent = "Read Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
  
});
