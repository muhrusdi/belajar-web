console.log("cek script");

const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

const slider = document.getElementsByClassName("slider")[0];

const sliderItem = slider.children;

var width = 0
var slide = false

console.dir(slider)

buttonNext.onclick = function() {
  slide = true
  for (let i = 0; i < sliderItem.length; i++) {
    const item = sliderItem[i];

    if (slide) {
      // alert("click")
      width -= item.clientWidth;
      slide = false
    }

    item.style.transform = `translateX(${width}px)`;
  }
}

buttonPrev.addEventListener("mouseenter", function() {
  slide = true
  for (let i = 0; i < sliderItem.length; i++) {
    const item = sliderItem[i];

    if (slide) {
      console.dir(item)
      width += item.clientWidth;
      slide = false
    }
    
    item.style.transform = `translateX(${width}px)`;
  }
})



