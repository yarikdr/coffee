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

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.menu')
  scrollToTop('.footer__btn')
})