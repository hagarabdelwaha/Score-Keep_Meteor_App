import React from 'react'
import {Players} from './../api/players' 
import PropTypes from 'prop-types';


export default class Player extends React.Component{

    incrementScore (e){
        Players.update({_id:this.props.player._id},{$inc:{score:1}})
    }

    decrementScore (e){
        Players.update({_id:this.props.player._id},{$inc:{score:-1}})
    }

    removePlayer(e){
        Players.remove({_id:this.props.player._id})
    }


    render(){
        let itemClassName=`item item--position-${this.props.player.rank}`;
        return(
            <div className={itemClassName} key={this.props.player._id}>
            <div className="player">
                <div>
                    <h3 className="player__name">{this.props.player.name}</h3>
                    <p className="player__stats"> {this.props.player.position} place - has {this.props.player.score} point(s) !  </p>   
                </div>

                <div className="player__actions">
                    <button className="button button--round" onClick={this.incrementScore.bind(this)}>+1</button> 
                    <button className="button button--round" onClick={this.decrementScore.bind(this)}>-1</button> 
                    <button className="button button--round" onClick={this.removePlayer.bind(this)}>X</button> 
                </div>

            </div>
            </div>
        )
    }
};

Player.propTypes ={
    player: PropTypes.object
}
