import {useState} from 'react'
import axios from 'axios'
import {SingleMeal} from './SingleMeal'

const AllMeals = (props)=>{
  let [meals, setMeals] = useState([])
  let [meal, setMeal] = useState([])
  
  axios.get('http://localhost:3000/meals').then(response =>{
    let filteredMeals = response.data
    if(props.catToDisplay !== 'all'){
      filteredMeals = response.data.filter(meal => meal.type.includes(props.catToDisplay))
    }
    setMeals(filteredMeals)
  })
  
  
  
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
    props.DisplayAll(false)
  }
  
  return(
      props.displayAll &&
      <div className={'flex allmeals'}>
        {meals.map((meal, index) => (
                     <SingleMeal key={index} meal={meal} click={handleClick}/>
                   )
        )}
      </div>
          || <DisplayMealChoice />
  )
}

export {AllMeals}