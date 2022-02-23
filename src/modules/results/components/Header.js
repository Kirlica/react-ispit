import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
        <div className='headerWrap'>
            <div className='imgAndName'>
                <img src={this.props.avatar} />
                {this.props.name}
            </div>
            <div className='info'>
                <div><span>BIO: </span>{this.props.bio}</div>
                <div><span>LOCATION: </span>{this.props.location}</div>
            </div>
        </div>

    )
  }
}

export default Header;

Header.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string
}