import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register';
import Admin from './component/Admin/Admin';
import Error from './component/Error/Error';
import Counter from './component/Counter/Counter';
import './App.css'
import Terms from './component/Terms/Terms';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='terms' element={<Terms/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
