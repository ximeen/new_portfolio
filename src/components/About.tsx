import { Footer } from './Footer'
import { Header } from './Header'
import Eu from '/ximeen_foto.jpg'
import circle from '/circulos.svg'

export function About(){
    return(
        <>
        <Header/>
        <section className="h-[668px] lg:flex justify-center items-center">
            <div className='lg:pr-40 items-center lg:items-start flex flex-col my-10'>
                <h1 className="text-gray-100 font-semibold text-3xl px-10 lg:px-0">GABRIEL XIMENES <br/> <span className="text-cian-500">WEB ENGINEER</span></h1>
                <p className='max-w-lg text-gray-100 mt-9 px-10 lg:px-0 text-lg'>Tenho 18 anos,  comecei a estudar programação em março de 2021,
                    hoje em dia minhas principais técnologias são ReactJS, TailwindCSS
                    e também me aprofundando em design pois penso em seguir com o cargo de web engineer.</p>
            </div>

            <div className='flex justify-center pb-10'>
                <div className='lg:w-96 lg:h-96 w-56 h-56 relative rounded-[50%] overflow-hidden '>
                    <img className='absolute h-full w-full object-cover ' src={Eu} alt="Minha foto" />
                </div>
            </div>
            <div className='hidden xl:flex fixed -left-2 bottom-0 z-20'>
                <img src={circle} alt="Circulos" />
            </div>
        </section>
        <Footer/>
        </>
    )
}