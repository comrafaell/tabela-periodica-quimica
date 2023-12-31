import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

interface propsElemento {
    numAtomico: number,
    simbQuimico: string,
    nome: string,
    pesoAtomico: string,
    cor?: string,
    imagem: string,
}

export function Elemento(props: propsElemento) {
    if(props.numAtomico == 222) {
        return (
            <div className={props.cor + ' border border-solid border-transparent flex justify-center flex-col cursor-pointer w-8 h-8 p-2 box-content'}>
                <p className="text-peq font-bold flex justify-start">57 - 71</p>
            </div>
        )

    } else if(props.numAtomico == 333) {
        return (
            <div className={props.cor + ' border border-solid border-transparent flex justify-center flex-col cursor-pointer w-8 h-8 p-2 box-content'}>
                <p className="text-peq font-bold flex justify-start">89 - 103</p>
            </div>
        )
        
    } else if(props.numAtomico !== 0) {
        return (
            <Dialog.Root>
                <Dialog.Trigger type='button' className={props.cor + ' border border-solid border-black flex-col flex justify-center items-center cursor-pointer w-8 h-8 p-2 box-content hover:bg-slate-600 hover:text-white'}>
                   
                    <div className="flex-col flex w-full">

                        <div>
                            <div className="flex justify-start relative top-1">
                                <span className="text-nan">{props.numAtomico}</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-med font-bold flex justify-center items-center">{props.simbQuimico}</span>
                            </div>
                            <span className="text-peq flex justify-center items-center">{props.nome}</span>
                            <span className="text-peq flex justify-center items-center">{props.pesoAtomico}</span>
                        </div>

                    </div>

                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

                    <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                            <X size={24} arial-label="Fechar" />
                        </Dialog.Close>

                        <div>
                            <div>
                                <h1 className='font-bold text-white text-sm flex justify-center items-center p-2 mb-2'>{props.nome}</h1>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={props.imagem} alt={`${props.nome}`} className='h-64 rounded-md' />
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>


            
        )}
    

    return (
        <div className={`border border-solid border-transparent flex-col w-8 h-8 p-2 box-content`}>
        
        </div>
    )

    
}