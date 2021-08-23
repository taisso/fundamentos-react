import Filho from "./Filho"

const Pai = (props: any) => {
    return (
        <div>
            <Filho {...props}>João</Filho>
            <Filho sobrenome="Silva">Maria</Filho>
            <Filho sobrenome="Silva">Pedro</Filho>
        </div>
    )
}

export default Pai