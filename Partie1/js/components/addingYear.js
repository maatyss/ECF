import {select} from './variables.js'

const  AddingOneYear = ()=>{
  let buttonAdd = select('#addyear')
  let displaySpan = select('#actualYear')
  let actualdisplay = displaySpan.innerText
  
  buttonAdd.addEventListener('click', ()=>{
    actualdisplay++
    displaySpan.innerText = actualdisplay
  })
}

export {AddingOneYear}