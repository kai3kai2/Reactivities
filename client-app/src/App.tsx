import './App.css'
import DuckItem from './DuckItem'
import { ducks } from './doem'

function App() {
  return (
    
    <div>
      <h1>Reactivities</h1>
      {ducks.map(duck => (
        <DuckItem key = {duck.name} duck={duck}/>
      ))}
    </div>
  )
}

export default App
