interface propsElemento {
    numAtomico: number,
    simbQuimico: string,
    nome: string,
    pesoAtomico: string,
    cor?: string,
    imagem: string,
}

export function Elemento(props: propsElemento) {
    if(props.numAtomico !== 0) {
        return (
            <div className={props.cor + ' flex justify-center flex-col cursor-pointer w-12 h-12 p-2 m-[0.15rem] box-content hover:bg-slate-600 hover:text-white'}>
                <p className="text-peq flex justify-start">{props.numAtomico}</p>
                <h1 className="text-med font-bold flex justify-center">{props.simbQuimico}</h1>
                <p className="text-peq flex justify-center">{props.nome}</p>
                <p className="text-peq flex justify-center">{props.pesoAtomico}</p>
            </div>
        )
    }

    return (
        <div className={`flex-col w-12 h-12 p-2 m-[0.15rem] box-content`}>
        
        </div>
    )

    
}