import {useState} from 'react'
import axios from 'axios'
import slugify from 'slugify'

const AllMeals = ()=>{
  let [meals, setMeals] = useState([])
  axios.get('http://localhost:3000/meals').then(response =>{
    setMeals(response.data)
  })
  
  const hoverHandle = (cardId, buttonId)=>{
    let card = document.querySelector('#'+cardId)
    let orderButton = document.querySelector('#'+buttonId)
    card.classList.toggle('hovered')
    orderButton.classList.toggle('hidden')
  }
  
  return(
    <div className={'flex allmeals'}>
  
      {meals.map((meal, index)=>{
        let cardId = slugify(meal.title)
        let buttonId = slugify(meal.title) + '_Button'
        return(
          <article id={cardId} className={'card'} key={index}
                   onMouseEnter={() => hoverHandle(cardId, buttonId)}
                   onMouseLeave={() => hoverHandle(cardId, buttonId)}
          
          >
            <img className={'foodpic'} src={meal.imageSrc} alt={meal.title}/>
            <div>
              <h3 className={'title'}>{meal.title}</h3>
              <p className={'content'}>{meal.content}</p>
              <h4 className={'price'}>{meal.price}</h4>
            </div>
            <p className={'rating'}>⭐{meal.rating}<span className={'reviews'}>({meal.reviews})</span></p>
            <p id={buttonId} className={'orderButton hidden'}>Commander</p>
            <div className={'greyfilter'}></div>
          </article>
        )
      })}
      
      
      
    </div>
  )
}

export {AllMeals}