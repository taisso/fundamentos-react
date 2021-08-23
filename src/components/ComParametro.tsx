type ParamProps = {
    titulo: string
}

function ComParametro(param: ParamProps) {
    return (
        <>
        <h3>{param.titulo}</h3>
        <p>Subtítulo</p>
        </>
    )
}

export default ComParametro