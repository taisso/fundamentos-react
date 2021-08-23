const Sub = (props: any) => {
    return (
        <div>
            <button onClick={() => props.quandoClicar(Math.random())}>Alterar</button>
        </div>
    )
}

export default Sub