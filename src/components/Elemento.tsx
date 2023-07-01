interface propsElemento {
    numAtomico: number,
    simbQuimico: string,
    nome: string,
    pesoAtomico: string,
    cor: string,
    imagem: string,
}

export function Elemento(props: propsElemento) {
    if(props.numAtomico !== 0) {
        return (
            <div className={props.cor + ' flex-col cursor-pointer w-14 h-14 m-1 p-2 rounded box-content hover:bg-slate-600 hover:text-white'}>
                <p className="text-peq flex justify-start">{props.numAtomico}</p>
                <h1 className="font-bold flex justify-center">{props.simbQuimico}</h1>
                <p className="text-peq flex justify-center">{props.nome}</p>
                <p className="text-peq flex justify-center">{props.pesoAtomico}</p>
            </div>
        )
    }

    return (
        <div className={`${props.cor} flex-col w-14 h-14 m-1 p-2 rounded box-content`}>
        
        </div>
    )

    
}