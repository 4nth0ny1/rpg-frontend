import React from 'react';
import axios from 'axios';
import Card from './Card';

export default class CardList extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3000/cards`)
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
      })
  }

  render() {

    const cardArray = this.state.cards.map(card => 
        <Card key={card.id} card={card} />
    )

    return (
      <ul>
        { cardArray }
      </ul>
    )
  }
}