import Logo from '/Logo.svg'

export function Header(){
    return(
        <header className='flex justify-around mt-5 py-5 items-center'>
            <div>
                <img src={Logo} alt="logo escrito GX" />
            </div>

            <nav className='text-gray-100'>
                <ul className='flex gap-4'>
                    {['Sobre', 'Projetos'].map((item)=>{
                        return(
                            <li key={item} className='hover:bg-cian-500 hover:rounded-xl hover:text-gray-900 transition duration-500 rounded-xl py-1 px-4 cursor-pointer font-semibold'>{item}</li>
                        )
                    })}
                </ul>
            </nav>
        </header>
        
    )
}