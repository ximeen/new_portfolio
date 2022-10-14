import { Footer } from "./Footer";
import { Header } from "./Header";
import { ListProjects } from './Utils/Database'
import circle from '../../public/circulos.svg'


export function Projects(){

    return(
        <>
            <Header/>
            <section className="lg:h-[334px] lg:flex justify-center items-center z-50">
                <div className="flex px-8 gap-12 flex-col lg:flex-row items-center py-10 lg:py-0 " >
                    {ListProjects.map((item)=>{
                        return(
                            <div key={item.name} className="cursor-pointer relative h-64 w-56 flex justify-center items-center text-center group ">
                                <div className="h-full w-full">
                                    <img className=" h-full w-full object-cover rounded-lg brightness-75 group-hover:brightness-[.3] group-hover:transition-all group-hover:duration-700" src={item.banner} alt="" />
                                </div>

                                <div className="absolute justify-center w-full h-full flex flex-col gap-4 items-center opacity-0 hover:opacity-100 transition-all duration-500 ">

                                    <span className="text-gray-100 font-semibold text-lg">{item.name}</span>

                                    <button className="p-2 bg-cian-500 rounded-md w-32"><span className="text-lg text-gray-900">Ver!</span></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='hidden lg:flex fixed -left-2 bottom-0 z-30'>
                    <img src={circle} alt="Circulos" />
                </div>
            </section>
            <Footer/>
        </>
    )
}