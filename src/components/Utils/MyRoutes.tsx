import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { About } from "../About";
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Projects } from '../Projects';


export function MyRoutes(){
  return(
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>

  )
}