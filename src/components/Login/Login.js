import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
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
      profile: []
    };
  }

  render() {
    return (
      <div>
        <div>
          <h3>
            {this.state.value}
            <small>
              {" "}
              una React App connessa alle API di Spotify{" "}
            </small>
          </h3>
          <hr/>
        </div>
        <div>
          <div>
            <p>
              {this.state.authorized
                ? "Autorizzato con successo! Clicca giù per entrare"
                : "Clicca il bottone per autorizzare il tuo account Spotify ad utilizzare Get Music!"}
            </p>
              <Button onClick={this.handleAuthFlow}>
              {
                this.state.authorized
                ? "Vai a Get Music"
                : "Log in con Spotify"
              }
              </Button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    let url = window.location.href;
    console.log(url);
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
      console.log(authToken)
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
          console.log(this.state);
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
      window.location="https://get-music-mybackend.herokuapp.com/login";
    }
  };
}

export default Login;