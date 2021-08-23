import produtos from '../../data/product'


export const Repeticao = () => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} {'->'} R$ {prod.price}</li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
            {getProdutosListItem()}
            </ul>
        </div>
    )
}

export default Repeticao