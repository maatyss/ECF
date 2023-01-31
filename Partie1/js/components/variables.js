const select = (item)=>{
  return document.querySelector(item)
}
const selectAll = (item)=>{
  return document.querySelectorAll(item)
}

const ran = (max)=>{
  return Math.floor(Math.random()*(max+1))
}

export {select, selectAll, ran}