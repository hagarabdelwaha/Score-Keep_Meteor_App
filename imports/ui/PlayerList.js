import React from 'react'
import Player from './Player'
import PropTypes from 'prop-types';
import  FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component{
    renderPlayers(){
        if(this.props.players.length === 0){
            return (
                <div className="item">
                    <p className="item__message">Add Your first Player to get started</p>
                </div>
            )
        }else{
            return this.props.players.map( (player) => <Player key={player._id} player={player}/>)
        }
    }
    render(){
        return(
            <div>
              <FlipMove maintainContainerHeight>
                {this.renderPlayers()}  
              </FlipMove>
            </div>
        )
    }
};

PlayerList.propTypes = {
   players : PropTypes.array
}