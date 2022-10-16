
import { ListProjects} from './Utils/Database'
import { ModalContent} from "./CreateModal";

import circle from '/circulos.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { EnvelopeSimple, GithubLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react';

export function Projects(){

    
    return(
        <>
        <section className="lg:h-[334px] lg:flex flex-col justify-center items-center z-50 ">
            <div className="flex px-8 gap-12 flex-col lg:flex-row items-center py-10 lg:py-0 " >
                {ListProjects.map((item)=>{
                    return(
                        <Dialog.Root key={item.id}>
                                            
                            <div className="cursor-pointer relative h-64 w-56 flex justify-center items-center text-center group">
                                <div className="h-full w-full">
                                    <img className=" h-full w-full object-cover rounded-lg brightness-75 group-hover:brightness-[.3] group-hover:transition-all group-hover:duration-700" src={item.banner} alt="" />
                                </div>

                                <div className="absolute justify-center w-full h-full flex flex-col gap-4 items-center opacity-0 hover:opacity-100 transition-all duration-500 ">

                                    <span className="text-gray-100 font-semibold text-lg">{item.name}</span>

                                    <Dialog.Trigger className="p-2 bg-cian-500 rounded-md w-32 text-lg text-gray-900">Ver!</Dialog.Trigger>
                                                            
                                </div>
                                                    
                            </div>
                            <ModalContent >
                                <div>
                                    <img src={item.banner} alt="Imagem banner do projeto" />
                                </div>

                                <div className="flex flex-col place-items-center mt-5 text-xl gap-4">
                                    <h2>{item.name}</h2>
                                    <p className="text-base">{item.description}</p>
                                </div>

                                <div className="items-center justify-end gap-2 flex mt-5">
                                    <Dialog.Close className="bg-gray-100 text-gray-900 py-3 px-8 rounded-md">
                                        <button>Fechar</button>
                                    </Dialog.Close>
                                    <a target={"_blank"} href={item.url} className="bg-cian-500 text-gray-900 py-3 px-8 rounded-md">Acesse</a>
                                </div>
                                                    
                            </ModalContent>
                                            
                        </Dialog.Root>
                                    )
                                })}
                            </div>
                          
                    
                        <div className='hidden lg:flex fixed -left-2 bottom-0 z-30'>
                            <img src={circle} alt="Circulos" />
                        </div>
                        
                    </section>

                    <section className='flex flex-col py-5 lg:flex-col lg:mt-10'>
                        <h1 className='text-3xl text-gray-100 flex justify-center'>Contatos</h1>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-28 gap-10 lg:my-16 my-10'>
                            <div>
                                <a 
                                    href='https://t.me/MONGEX' 
                                    target={'_blank'} 
                                    className='flex gap-2 items-center text-gray-100 text-lg hover:text-cian-500 transition-all duration-400'
                                >
                                    <TelegramLogo size={32} className='text-cian-500'/>
                                    Telegram
                                </a>
                            </div>
                            <div>
                                <a 
                                    href='mailto:gabriximenes100@gmail.com?subject=Portfolio' 
                                    target={'_blank'} 
                                    className='flex gap-2 items-center text-gray-100 text-lg hover:text-cian-500 transition-all duration-400'
                                >
                                    <EnvelopeSimple size={32} className='text-cian-500'/>
                                    Email
                                </a>
                            </div>
                            <div>
                                <a 
                                    href='https://www.linkedin.com/in/gabriel-ximenes-350168211/' 
                                    target={'_blank'} 
                                    className='flex gap-2 items-center text-gray-100 text-lg hover:text-cian-500 transition-all duration-400'
                                >
                                    <LinkedinLogo size={32} className='text-cian-500'/>
                                    Linkedin
                                </a>
                            </div>
                            <div>
                                <a 
                                    href='https://github.com/ximeen' 
                                    target={'_blank'} 
                                    className='flex gap-2 items-center text-gray-100 text-lg hover:text-cian-500 transition-all duration-400'
                                >
                                    <GithubLogo size={32} className='text-cian-500'/>
                                    Github
                                </a>
                            </div>
                           
                        </div>
                    </section>

                    </>
                            
     
    )
}