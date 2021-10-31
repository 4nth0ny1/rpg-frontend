export default function Card (props) {
    
    return (
        <div className="card">
            <p>{props.card.id}</p>
            <h2>{props.card.name}  🗡️{props.card.attack}🛡{props.card.defense}</h2>
            <img className="card-image" src={props.card.image} alt="..."></img>
            <p>{props.card.origin} {props.card.card_type}</p>
            <p>{props.card.description}</p>
        </div>
    )
}