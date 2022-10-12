import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { ListItems } from './Utils/Database'
import Logo from '/Logo.svg'


export function Header(){



    const [showNav, setShowNav] = useState(false)
    const handleClick = ()=> setShowNav(!showNav)

    return(
        <header className='flex justify-around mt-5 py-5 items-center'>
            <div>
                <img src={Logo} alt="logo escrito GX" />
            </div>

            <nav className='text-gray-100'>

                <ul className='flex gap-4'>

                    {ListItems.map((item)=>{
                        return(
                            <li key={item.name} className='hover:bg-cian-500 hover:rounded-xl hover:text-gray-900 transition duration-500 rounded-xl py-1 px-4 cursor-pointer font-semibold
                            hidden md:flex
                            '>

                                <a href={item.route}>{item.name}</a>

                            </li>
                        )
                    })}

                </ul>

            </nav>

            <div className='md:hidden fixed right-6 z-10' onClick={handleClick}>
                    {!showNav ?  <List size={32} className='text-gray-100' /> : <X size={32} className='text-gray-100' />}
               
            </div>
            <ul className={!showNav ? 'hidden' : 'fixed w-[100%] px-8 py-10  bg-black-20/40 backdrop-blur-sm rounded-lg md:hidden'}>

                {ListItems.map((item)=>{
                    return(
                        <li key={item.name} className='text-center text-lg text-gray-100 font-semibold '
                        >

                            <a className='' href={item.route}>{item.name}</a>

                        </li>
                    )
                })}

            </ul>

        </header>
        
    )
}