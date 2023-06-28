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

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.menu')
})