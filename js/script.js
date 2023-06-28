function burger(burgerSel, menuSel) {
  const burger = document.querySelector(burgerSel),
        menu = document.querySelector(menuSel)
  burger.addEventListener('click', () => {
    if (parseInt(getComputedStyle(document.body).width) <= 895) {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      document.body.classList.toggle('lock')
    }
  })
}

function scrollToTop(btnSelector) {
  const btn = document.querySelector(btnSelector)
  btn.addEventListener('click', scroll)

  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}

function slider(slidesSel, prevBtnSel, nextBtnSel) {
  const slides = document.querySelectorAll(slidesSel),
        prev = document.querySelector(prevBtnSel),
        next = document.querySelector(nextBtnSel)

  let slideIndex = 1

  function showSlide(n) {
    if (n < 1) {
      slideIndex = slides.length
    } else if (n > slides.length) {
      slideIndex = 1
    }

    slides.forEach(slide => slide.style.display = 'none')
    slides[slideIndex-1].style.display = 'flex'
  }

  function plusSlide(n) {showSlide(slideIndex += n)}

  showSlide(slideIndex)

  if (prev && next) {
    prev.addEventListener('click', () => {
      plusSlide(-1)
      slides.forEach(slide => {
        slide.classList.add('fadeInLeft')
        slide.classList.remove('fadeInRight')
      })
    })
    next.addEventListener('click', () => {
      plusSlide(1)
      slides.forEach(slide => {
        slide.classList.add('fadeInRight')
        slide.classList.remove('fadeInLeft')
      })
    })
  }
}

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.menu')
  scrollToTop('.footer__btn')
  slider('.slide', '#prev', '#next')
})