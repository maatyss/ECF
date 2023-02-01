import {useEffect, useState} from 'react'

const Header = (props)=>{
  let [category, setCategory] = useState('all')
  
  const HandleFilter = (cat)=>{
    props.filter(cat)
    handleMenuHighlight()
  }
  
  const handleMenuHighlight = ()=>{
    let menu = document.querySelectorAll('.filters')
    menu.forEach((item)=>{
      if(item.dataset.filter === category){
        item.classList.add('selected')
      }else{
        item.classList.remove('selected')
      }
    })
  }
  
  useEffect(()=>{
    handleMenuHighlight()
  },[])
  
  useEffect(()=>{
    HandleFilter(category)
  },[category])
  
  return(
    <header>
      <div id={'discover'}>
        <h1>Découvrez notre </h1><h1 className={'skew'}>menu.</h1>
      </div>
      <ul className={'menu'}>
        <li data-filter={'all'} className={'filters'} onClick={() => setCategory('all')}>tout</li>
        <li data-filter={'meat'} className={'filters'} onClick={() => setCategory('meat')}>viandes</li>
        <li data-filter={'flower'} className={'filters'} onClick={() => setCategory('flower')}>légumes</li>
      </ul>
    </header>
  )
}

export {Header}