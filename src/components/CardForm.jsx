import React from 'react';
import axios from 'axios';

export default class CardForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            attack: 0,
            defense: 0,
            origin: '',
            card_type: '',
            image: '',
            description: ''
        }
    }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const card = {
        id: this.state.id,
        name: this.state.name,
        attack: this.state.attack,
        defense: this.state.defense,
        origin: this.state.origin,
        card_type: this.state.card_type,
        image: this.state.image,
        description: this.state.description
    };

    axios.post(`http://127.0.0.1:3000/cards`, { card })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange} />
            <input type="integer" name="attack" placeholder="attack" onChange={this.handleChange} />
            <input type="integer" name="defense" placeholder="defense" onChange={this.handleChange} />
            <input type="text" name="origin" placeholder="origin" onChange={this.handleChange} />
            <input type="text" name="card_type" placeholder="card_type" onChange={this.handleChange} />
            <input type="text" name="image" placeholder="image" onChange={this.handleChange} />
            <input type="text" name="description" placeholder="description" onChange={this.handleChange} />
          </label>
          <button type="submit">Add Card</button>
        </form>
      </div>
    )
  }
}