import {select} from './variables.js'

const NewsletterHandling = ()=>{
  let buttonNewsletter = select('#register')
  let mailInput = select('#mail')
  let labelNewsletter = select('#newsletterLabel')

  
  buttonNewsletter.addEventListener('click', ()=>{
    let mail = mailInput.value
    if (mail){
      labelNewsletter.innerHTML = '<p id="mailDisplay">Merci '+mail+'</p>'
    }
  })
}

export {NewsletterHandling}