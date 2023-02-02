import {useEffect, useState} from 'react'
import axios from 'axios'
import {SingleMeal} from './SingleMeal'

const AllMeals = (props)=> {
  let [meals, setMeals] = useState([])
  let [meal, setMeal] = useState([])
  let [filteredMeals, setFilteredMeals] = useState([])
  
  
  useEffect(() => {
    axios.get('http://localhost:3000/meals').then(response => {
      setMeals(response.data)
      setFilteredMeals(response.data)
    })
  }, [])
  
  useEffect(() => {
    console.log('ici')
    console.log(props.catToDisplay)
    if (props.catToDisplay !== 'all') {
      let filtered = meals.filter(meal => meal.type.includes(props.catToDisplay))
      setFilteredMeals(filtered)
    } else {
      setFilteredMeals(meals)
    }
    setFilteredMeals(filteredMeals)
  }, [props.catToDisplay])
  
  
  const DisplayMealChoice = () => {
    return (
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
        {filteredMeals.map((meal, index) => (
                             <SingleMeal key={index} meal={meal} click={handleClick}/>
                           ),
        )}
      </div>
          || <DisplayMealChoice />
  )
}

export {AllMeals}