import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    //console.log('props in nav', this.props)
    return (
        <nav className="navbar">
          <div className="nav-content-container">
            <Image className="nav-image" src={this.props.imageURL} avatar />
            <List as="ul" link className="ul-list">
              <List.Item className="nav-link">
                <Link 
                  className="nav-link" 
                  to={{
                    pathname: "/user-profile",
                    state: { 
                      userData: this.props.location.state.current_user.user,
                      auth: this.props.location.state.auth
                    }
                  }}
                >
                  Il mio profilo
                </Link>
              </List.Item>
            </List>
          </div>
        </nav>
    );
  }
}

export default Navbar;