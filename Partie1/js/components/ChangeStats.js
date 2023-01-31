import {select, ran} from './variables.js'

const ChangeStats = ()=>{
  let changeStatsButton = select('#changeStatsButton')
  let orderHTMLElement = select('#orderNumber')
  let customerHTMLElement = select('#customerNumber')
  let chiefHTMLElement = select('#chiefsNumber')
  
  changeStatsButton.addEventListener('click', ()=>{
    let customersNum = ran(99999)
    let ordersNum = ran(99999)
    let chiefsNum = ran(5000)
    
    while (customersNum > ordersNum){
      customersNum = ran(99999)
    }
    
    orderHTMLElement.innerText = ordersNum + '+'
    customerHTMLElement.innerText = customersNum + '+'
    chiefHTMLElement.innerText = chiefsNum + '+'
    
  })
  
  
  
}

export {ChangeStats}