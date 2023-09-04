import { Elemento } from "./Elemento";

import { getElementos1, getElementos2 } from '../utils/elementos';

const elementos = getElementos1()
const elementos2 = getElementos2()


const periodos = ['1', '2', '3', '4', '5', '6', '7']
const grupos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']

export function Tabela() {
    return (
        <main>

           {/*  <div className="grid grid-cols-19">
                {grupos.map((grupo, i) => {
                    return (
                        <div key={`${grupo}-${i}`} className="text-zinc-400 text-xl h-12 w-12 font-bold flex items-center justify-center mx-auto">
                            {grupo}
                        </div>
                    )
                })}                
            </div>  */}

            <div className="w-full flex">
                <div className="grid grid-rows-7 gap-1">
                    {periodos.map((periodo, i) => {
                        return (
                            <div key={`${periodo}-${i}`} className="text-zinc-400 text-xl h-7 w-7 font-bold flex items-center justify-center m-auto">
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

            <div className='w-full flex mt-6'>
                <div className="grid grid-rows-2 gap-1">
                    <div className="text-zinc-400 text-xl h-7 w-7 font-bold flex items-center justify-center m-auto"></div>
                    <div className="text-zinc-400 text-xl h-7 w-7 font-bold flex items-center justify-center m-auto"></div>
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