window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu')
  burger.addEventListener('click', () => {
    if (parseInt(getComputedStyle(document.body).width) <= 895) {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      document.body.classList.toggle('lock')
    }
  })
})