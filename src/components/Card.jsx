import axios from 'axios';
import React from 'react'

export default function Card (props) {
    
    const handleDelete = event => {
        event.preventDefault();
    
        axios.delete(`http://127.0.0.1:3000/cards/${props.card.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    return (
        <div className="card">
            <p>{props.card.id}</p>
            <h2>{props.card.name}  🗡️{props.card.attack}🛡{props.card.defense}</h2>
            <img className="card-image" src={props.card.image} alt="..."></img>
            <p>{props.card.origin} {props.card.card_type}</p>
            <p>{props.card.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}