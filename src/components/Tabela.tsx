import { Elemento } from "./Elemento";

import { getElementos } from '../data/elementos';

const elementos = getElementos()

export function Tabela() {

    return (
        
        <div className="bg-gray-500 flex justify-center items-center flex-col h-full">

            <header className="bg-orange-400 w-full h-10 p-10 flex justify-center items-center">
                <h1 className="font-bold text-white">Tabela Periódica</h1>
            </header>

            <div className="p-10">

                <main className="bg-slate-300 grid grid-rows-7 grid-cols-18">
                
                    {
                        elementos.map(linhas => (
                            <div key={`periodo-${elementos.indexOf(linhas)+1}`} id={`periodo-${elementos.indexOf(linhas)+1}`} className="flex flex-row">
                                {
                                    linhas.map(elemento => (
                                        <Elemento
                                            key={`${elemento.simbQuimico}`}
                                            numAtomico={elemento.numAtomico}
                                            simbQuimico={elemento.simbQuimico}
                                            nome={elemento.nome}
                                            pesoAtomico={elemento.pesoAtomico}
                                            cor={elemento.cor}
                                            imagem={elemento.imagem}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                    
                </main>

            </div>
        </div>
    )
}