const DisplayingBurgerMenu = () => {
  let burgermenu = document.querySelector('#burgered')
  let menu = document.querySelector('#menu')
  burgermenu.addEventListener('click', () => {
    if (burgermenu.checked && window.innerWidth <= 950) {
      menu.style.display = 'revert'
    } else if (window.innerWidth <= 950) {
      menu.style.display = 'none'
    }
  })
}

export {DisplayingBurgerMenu}