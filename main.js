function debounce(func, timeout = 10) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const sliderImages = document.querySelectorAll("img");

function handleSlideIn(e) {
  sliderImages.forEach(sliderImage => {
    const starting = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.height + sliderImage.offsetTop;
    const isHalfShown = starting > sliderImage.offsetTop;
    const isNotPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  })
}

window.addEventListener("scroll", debounce(handleSlideIn));
