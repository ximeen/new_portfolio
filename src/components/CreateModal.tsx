import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface PropsChild{
    children: ReactNode,
    
}

export function ModalContent(Props: PropsChild){
    return(
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/50 fixed inset-0'/>
        <Dialog.Content className='z-50 fixed bg-gray-900 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:w-[668px] w-[80%] shadow-lg shadow-black/25'>
            {Props.children}
        </Dialog.Content>
      </Dialog.Portal>
        
    )
}
