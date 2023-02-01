import {useState} from 'react'
import axios from 'axios'

const AllMeals = ()=>{
  let [meals, setMeals] = useState([])
  axios.get('http://localhost:3000/meals').then(response =>{
    setMeals(response.data)
  })
  
  
  return(
    <div className={'flex allmeals'}>
  
      {meals.map((meal, index)=>{
        return(
          <article className={'card'} key={index}>
            <img className={'foodpic'} src={meal.imageSrc} alt={meal.title}/>
            <div>
              <h3 className={'title'}>{meal.title}</h3>
              <p className={'content'}>{meal.content}</p>
              <h4 className={'price'}>{meal.price}</h4>
            </div>
            <p className={'rating'}>⭐{meal.rating}<span className={'reviews'}>({meal.reviews})</span></p>
          </article>
        )
      })}
      
      
      
    </div>
  )
}

export {AllMeals}