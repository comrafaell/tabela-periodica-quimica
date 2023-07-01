interface propsDetalhes {
    caminho?: string,
}

export function Detalhes(props: propsDetalhes) {
    return (
        <div id='detalhes' className="absolute flex justify-center items-center z-30">
            <h1>Ouro</h1>
            <img src='src/assets/gold-not-background-.png' alt="" />
        </div>
    )
}