import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import Loader from '../Common/Loader';
import axios from "axios";
import {
  spotifyProfileURL
} from "../../constants";
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Get Music",
      authToken: "",
      authorized: false,
      profile: [],
      loading: false
    };
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <Header as='h1' color="yellow">
            {this.state.value}
          </Header>
          <span className="subtitle">
            una React App connessa alle API di Spotify
          </span>
        </div>
        <div>
          <div className="login_button-container">
            <p>
              {this.state.authorized
                ? "Autorizzato con successo! Clicca per entrare"
                : "Clicca il bottone per autorizzare il tuo account Spotify ad utilizzare Get Music!"}
            </p>
              <Button color='teal' onClick={this.handleAuthFlow}>
              {
                this.state.authorized
                ? "Vai a Get Music"
                : "Log in con Spotify"
              }
              </Button>
              {
                this.state.loading ?
               <Loader/> :
               null
              }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    let url = window.location.href;
    if (url.indexOf("token=") > -1) {
      let authToken = url
        .split("token=")[1]
        .split("&")[0]
        .trim();
      let authorized = true;
      this.setState({
        authToken,
        authorized
      });
      window.localStorage.setItem('token', authToken);
    }
  };

  handleAuthFlow = event => {
    event.preventDefault();
    if (this.state.authorized) {
      const { authToken } = this.state;
      let user;
      axios
        .get(spotifyProfileURL + authToken)
        .then(response => {
          this.setState({ profile: response.data });
          user = response.data;
          //console.log(this.state);
        })
        .then(() => this.props.history.push('/get-music', {
          current_user: { user },
          auth: { authToken }
        }))
        .catch(error => {
          console.log(error);
          window.location.assign("https://get-music-mybackend.herokuapp.com/login");
        });
    } else {
      this.setState({ loading: true });
      window.location="https://get-music-mybackend.herokuapp.com/login";
    }
  };
}

export default Login;