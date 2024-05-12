import "./CardAreaAtuacao.css"

interface CardProps {
    title: string,
    imgUrl: string,
    desc: string
}

export function CardAreaAtuacao(props: CardProps) {
    return(
        <div className="card">
            <h2>{props.title}</h2>

            <img src={props.imgUrl}/>

            <p>{props.desc}</p>
        </div>
    )
}