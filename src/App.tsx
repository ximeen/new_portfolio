import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from './components/Projects';


export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}