
const Header = ()=>{
  
  return(
    <header>
      <div id={'discover'}>
        <h1>Découvrez notre </h1><h1 className={'skew'}>menu.</h1>
      </div>
      <ul className={'menu'}>
        <li className={'selected'}>tout</li>
        <li>viandes</li>
        <li>légumes</li>
      </ul>
    </header>
  )
}

export {Header}