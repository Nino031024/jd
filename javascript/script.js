const slides = document.getElementsByClassName('slide');
let currentSlide = 0;

// 显示下一张图片
function showNextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// 每隔一定时间调用 showNextSlide() 函数
setInterval(showNextSlide, 3000);
