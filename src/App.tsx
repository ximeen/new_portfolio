import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MyRoutes } from "./components/Utils/MyRoutes";



export function App(){
  return( 
    <>
      <Header/>
      <MyRoutes/>
      <Footer/>
    </>
  )
}