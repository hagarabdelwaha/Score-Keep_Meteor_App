import React from 'react'
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render(){
      return(
        <div className="title-bar">
            <div className="wrapper">
                 <h1>{this.props.title}</h1>
                 {this.props.subtitle ? <h2 className="subtitle--title-bar">{this.props.subtitle}</h2> :<p></p>}
                 
            </div>
        </div>
        )
    }
}

//props type checking only for development 

TitleBar.propTypes = {
    title : PropTypes.string
}

// TitleBar.defaultProps = {
//   title = 'default title'
// }