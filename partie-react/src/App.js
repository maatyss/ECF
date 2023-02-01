import './App.css'
import {Header} from './components/Header'
import {AllMeals} from './components/AllMeals'
import {useState} from 'react'

function App() {
  let [filter, setFilter] = useState('all')
  let [displayAll, setDisplayAll] = useState(true)
  
  
  return (
    <div className={'container'}>
      <Header filter={setFilter} DisplayAll={setDisplayAll}/>
      <AllMeals catToDisplay={filter} displayAll={displayAll} DisplayAll={setDisplayAll}/>
    </div>
  )
}

export default App;
