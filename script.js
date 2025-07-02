class Hero {
  constructor() {
    this.crrSlide = 0;
    this.slideInterval = null;
    this.autoSlideDelay = 2000;
    this.heroSlides = document.querySelectorAll(".hero__slide");
    this.heroDots = document.querySelectorAll(".hero__dots span");
    this.hero = document.querySelector(".hero");

    this.init();
  }

  init() {
    this.heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goToSlide(index);
        this.resetAutoSlide();
      });
    });

    this.hero.addEventListener("mouseenter", () => {
      this.pauseAutoSlide();
    });
    this.hero.addEventListener("mouseleave", () => {
      this.startAutoSlide();
    });

    this.startAutoSlide();
  }

  goToSlide(slideIndex) {
    this.heroSlides[this.crrSlide].classList.remove("active");
    this.heroSlides[this.crrSlide].classList.add("inactive");
    this.heroDots[this.crrSlide].classList.remove("hero__dot--active");
    this.heroDots[this.crrSlide].classList.add("hero__dot--inactive");
    this.crrSlide = slideIndex;
    this.heroSlides[this.crrSlide].classList.remove("inactive");
    this.heroSlides[this.crrSlide].classList.add("active");
    this.heroDots[this.crrSlide].classList.remove("hero__dot--inactive");
    this.heroDots[this.crrSlide].classList.add("hero__dot--active");
  }

  nextSlide() {
    const nextIndex = (this.crrSlide + 1) % this.heroSlides.length;
    this.goToSlide(nextIndex);
  }

  startAutoSlide() {
    if (this.slideInterval === null) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoSlideDelay);
    }
  }

  pauseAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  resetAutoSlide() {
    this.pauseAutoSlide();
    this.startAutoSlide();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Hero();
});
