import React from 'react'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './/PlayerList'
import PropTypes from 'prop-types';

export default class App extends React.Component{
    render(){
        return(
            <div id="app">
               <TitleBar title={this.props.title} subtitle="created by hagar abdelwahab" />
               <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>
               </div> 
            </div>
        )
    }
};

App.propTypes = {
    title :PropTypes.string,
    players : PropTypes.array
}