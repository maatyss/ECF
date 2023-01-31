import {select} from './variables.js'

const ordering = ()=>{
  
  let buttonOrder = select('#order')
  
  buttonOrder.addEventListener('click', () => {
    let toHide = select('#ordered')
    toHide.innerHTML='<p class="taken">Votre commande a été prise en compte</p>'
    
  })
  
}

export {ordering}
