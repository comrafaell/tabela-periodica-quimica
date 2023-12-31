import { Elemento } from "./Elemento";

import { getElementos1, getElementos2 } from '../utils/elementos';

const elementos = getElementos1()
const elementos2 = getElementos2()


const periodos = ['1', '2', '3', '4', '5', '6', '7']
const grupos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']

export function Tabela() {
    return (
        <main>

            <div className="w-full flex">
                <div className="grid grid-rows-1 grid-flow-col mr-2">
                    <div className="h-7 w-7" />
                    <div className="h-7 w-7" />
                </div>
                <span className="w-full flex justify-start items-center text-med font-bold">GRUPO</span> 
            </div>          

            <div className="w-full flex justify-evenly mb-2">
                <div className="grid grid-rows-1 grid-flow-col mr-2">
                    <div className="h-7 w-7" />
                    <div className="h-7 w-7" />
                </div>

                <div className="w-full grid grid-rows-1 grid-flow-col gap-1 bg-zinc-300" >
                
                    {grupos.map((grupo, i) => {
                        return (
                            <div key={`${grupo}-${i}`} className="text-black text-med h-7 w-8 px-2 font-bold flex items-center justify-center box-content">
                                {grupo}
                            </div>
                        )
                    })} 
                </div>               
            </div>

            <div className="w-full flex justify-center">

                <div className="w-7">
                    <div className="h-7 w-7" />
                    <span className="text-med font-bold flex -rotate-90">PERÍODO</span>
                </div>

                <div className="grid grid-rows-7 gap-1 mr-2 bg-zinc-300">
                    
                    {periodos.map((periodo, i) => {
                        return (
                            <div key={`${periodo}-${i}`} className="text-black text-med h-7 w-7 font-bold flex items-center justify-center m-auto">
                                {periodo}
                            </div>
                        )
                    })}                
                </div>     

                <div className='grid grid-rows-7 grid-flow-col gap-1'>
                    {
                        elementos.map(elemento => {
                            return <Elemento
                                key={`${elemento.numAtomico}-${elemento.simbQuimico}`}
                                numAtomico={elemento.numAtomico}
                                simbQuimico={elemento.simbQuimico}
                                nome={elemento.nome}
                                pesoAtomico={elemento.pesoAtomico}
                                cor={elemento.cor}
                                imagem={elemento.imagem} 
                            />
                        })
                    }
                </div>

            </div>

            <div className='w-full flex justify-center mt-6'>
                <div className="grid grid-rows-2 gap-1 mr-9">
                    <div className="h-7 w-7" />
                    <div className="h-7 w-7" />
                </div>

                <div className='grid grid-rows-2 grid-flow-col gap-1'>
                    {
                        elementos2.map(elemento => {
                            return <Elemento
                                key={`${elemento.numAtomico}-${elemento.simbQuimico}`}
                                numAtomico={elemento.numAtomico}
                                simbQuimico={elemento.simbQuimico}
                                nome={elemento.nome}
                                pesoAtomico={elemento.pesoAtomico}
                                cor={elemento.cor}
                                imagem={elemento.imagem} 
                            />
                        })
                    }
                </div>
            </div>

        </main>
    )
}