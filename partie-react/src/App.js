import './App.css'
import {Header} from './components/Header'
import {AllMeals} from './components/AllMeals'
import {useEffect, useState} from 'react'

function App() {
  let [filter, setFilter] = useState('all')
  
  useEffect(()=>{
  },[filter])
  
  return (
    <div className={'container'}>
      <Header filter={setFilter}/>
      <AllMeals catToDisplay={filter}/>
    </div>
  )
}

export default App;
