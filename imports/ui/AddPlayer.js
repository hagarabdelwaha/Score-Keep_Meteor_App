import React from 'react'
import {Players} from './../api/players' 


export default class AddPlayer extends React.Component {
    handleSubmit (e) {
        //prevent default behaviour from reload all page 
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if(playerName){
          e.target.playerName.value = '' ;
           // insert new player
          Players.insert({name: playerName,score: 0});
        }  
      };

    render(){
        return(
            <div className="item">
                 <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                  <input className="form__input" type="text" name="playerName" placeholder="player name"/>
                  <button className="button">Add Player</button>
                </form>
            </div>
        )
    }
}