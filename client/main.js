import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Players, calculatePlayerPositions} from './../imports/api/players' 
import {Tracker} from 'meteor/tracker'
import './main.html'
import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'
import PlayerList from './../imports/ui/PlayerList'
import App from './../imports/ui/App'

// the following line will print empty array []
// console.log('minimongo playersssssssssss',Players.find().fetch()); 

// when we start minimogo has no data as ddp take time to send data
//  so we need to run some functions after DDP sent data that is why we use Tracker



Meteor.startup(() => {

  Tracker.autorun(() => {
    // get all players
    let players = Players.find({},{sort: {score:-1} }).fetch();
    let positionedPlayers=calculatePlayerPositions(players);
    console.log(positionedPlayers);
    let title= 'Score Keeper';

  ReactDOM.render(<App title={title} players={positionedPlayers}/>,document.getElementById('app'))

  });

 

});