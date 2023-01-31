import {select} from './variables.js'

let video = '<iframe id="rickRoll" width="560" height="315"' +
  ' src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>'

const MeetTheChiefs = ()=>{
  let buttonMeet = select('#meet')
  let elementToChange = select('#meetingPoint')
  buttonMeet.addEventListener('click',()=>{
  elementToChange.innerHTML = video
    
    setTimeout(() =>{
      select('#rickRoll').click()
    },3000)
  })
}

export {MeetTheChiefs}