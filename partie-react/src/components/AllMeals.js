import {useState} from 'react'
import axios from 'axios'
import slugify from 'slugify'

const AllMeals = (props)=>{
  let [meals, setMeals] = useState([])
  let [DisplayAll, setDisplayAll] = useState(true)
  let [meal, setMeal] = useState([])
  
  axios.get('http://localhost:3000/meals').then(response =>{
    let filteredMeals = response.data
    if(props.catToDisplay !== 'all'){
      filteredMeals = response.data.filter(meal => meal.type.includes(props.catToDisplay))
    }
    setMeals(filteredMeals)
  })
  
  const DisplayingAll = ()=>{
    return (
      <div className={'flex allmeals'}>
    
        {meals.map((meal, index)=>{
          let cardId = slugify(meal.title)
          let buttonId = slugify(meal.title) + '_Button'
          return(
            <article id={cardId} className={'card'} key={index}>
              <img className={'foodpic'} src={meal.imageSrc} alt={meal.title}/>
              <div>
                <h3 className={'title'}>{meal.title}</h3>
                <p className={'content'}>{meal.content}</p>
                <h4 className={'price'}>{meal.price}</h4>
              </div>
              <p className={'rating'}>⭐{meal.rating}<span className={'reviews'}>({meal.reviews})</span></p>
              <p id={buttonId} className={'orderButton hidden'} onClick={() => handleClick(meal)}>Commander</p>
              <div className={'greyfilter'}></div>
            </article>
          )
        })}
      </div>
    )
  }
  
  const DisplayMealChoice = ()=>{
    return(
      <div className={'choosenOne'}>
        <h3 className={'choosenMeal'}>Vous avez commandé le repas {meal.title}</h3>
        <img src={meal.imageSrc} alt={meal.title}/>
      </div>
    )
  }
  
  const handleClick = (choice)=>{
    setMeal(choice)
    setDisplayAll(false)
  }
  
  return(
    <div>
      {DisplayAll && DisplayingAll() || DisplayMealChoice()}
    </div>
  )
}

export {AllMeals}