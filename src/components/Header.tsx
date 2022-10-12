import Logo from '/Logo.svg'


export function Header(){

    const li = [
        {
            name:'Sobre',
            route: '/'
        },
        {
            name:'Projects',
            route: '/Projects'
        }

    ]

    return(
        <header className='md:flex justify-around mt-5 py-5 items-center'>
            <div>
                <img src={Logo} alt="logo escrito GX" />
            </div>

            <nav className='text-gray-100'>

                <ul className='flex gap-4'>

                    {li.map((item)=>{
                        return(
                            <li key={item.name} className='hover:bg-cian-500 hover:rounded-xl hover:text-gray-900 transition duration-500 rounded-xl py-1 px-4 cursor-pointer font-semibold'>

                                <a href={item.route}>{item.name} </a>

                            </li>

                        )
                    })}

                </ul>

            </nav>
        </header>
        
    )
}