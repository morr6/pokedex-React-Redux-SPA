import React, {Component} from 'react'

const mainBoxStyle= { 
    margin: '0 0 0 20%',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    width:'60%',
    fontSize:'25px',
    textAlign: 'center'
}

const pokemonNameStyle = { 
    fontSize:'45px',
    color:'red', 
    fontFamily: '"Lucida Console", Monaco, monospace',
    margin:'0 20px 0 20px' 
}
const imageStyle = {
    margin:'15% 0 0 0',
    height: '50%',
    width: '50%',
}

export class PokemonNotFound extends Component {
    
    render() {
        return (
            <div style={ mainBoxStyle } >
                <h1> 
                    pokemon 
                    <span style={ pokemonNameStyle }> 
                        { this.props.name.toUpperCase() } 
                    </span> 
                    not found!
                </h1>
                <img style={ imageStyle } src={ require('../../img/pikachu.png') } alt='Pikachu'/>

            </div>
        )
    }
}