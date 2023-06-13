const ref = {
  button: document.querySelectorAll('.list__link.decor')
}
 

for (let i = 0; i < ref.button.length; i++) {
  const element = ref.button[i];

  element.addEventListener('click', () => {
    ref.button[i].nextElementSibling.classList.toggle('active')
    ref.button[i].classList.toggle('deg')
  })

}

