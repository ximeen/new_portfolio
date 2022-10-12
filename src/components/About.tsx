import { Header } from './Header'
import Eu from '/ximeen_foto.jpg'

export function About(){
    return(
        <>
        <Header/>
        <section className="h-[80vh] flex justify-center  items-center">
            <div className='pr-40'>
                <h1 className="text-gray-100 font-semibold text-3xl">GABRIEL XIMENES <br/> <span className="text-cian-500">WEB ENGINEER</span></h1>
                <p className='max-w-lg text-gray-100 mt-8'>Tenho 18 anos,  comecei a estudar programação em março de 2021,
                    hoje em dia minhas principais técnologias são ReactJS, TailwindCSS
                    e também me aprofundando em design pois penso em seguir com o cargo de web engineer.</p>
            </div>

            <div className='w-96 h-96 relative rounded-[50%] overflow-hidden'>
                <img className='absolute h-full w-full object-cover ' src={Eu} alt="Minha foto" />
            </div>
        </section>
        </>
    )
}