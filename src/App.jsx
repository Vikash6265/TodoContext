import './App.css'
import Navbar from './components/Navbar'
import { TodosProvider } from './context/TodosContext'
import Form from './Form'
import ListGroup from './ListGroup'

const App = () => {
  
  return(
    <TodosProvider>
    <div className="container">

      <Navbar/>

      <Form/>

      <ListGroup/>

    </div>

    </TodosProvider>
  )

}

export default App
