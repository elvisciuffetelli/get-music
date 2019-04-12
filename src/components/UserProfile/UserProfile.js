import React, { Component } from 'react';
import axios from 'axios';
import ProfileRow from '../Common/ProfileRow';
import { Button, Image, Header } from 'semantic-ui-react';
import img_notFound from '../../assets/images/image-not-found.jpg';
import { spotifyPlaylistURL } from '../../constants';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      auth: '',
      play_lists: [],
      error: ''
    };
  }

render() {
    const { 
      images, 
      display_name, 
      email, 
      followers: { 
        total 
      } 
    } = this.props.location.state.userData;

    return (
      <div>
        <div className="back-button-container">
          <Button onClick={this.routeBack} color="yellow" size="tiny" className="btn btn-outline-success">Back</Button>
        </div>
        <div className="user-heading-container">
        {
          images.length ?
          <Image
          avatar
          src={images[0].url || img_notFound} 
          alt="spotify user profile image" 
          className=""
          /> :
          <p></p>
        }
          <Header as='h1' className="user-name-text">
            {display_name}
          </Header>  
   
        </div>
        <div className="profile-rows">
          <ProfileRow text={email || 'email non disponibile'} />
          <ProfileRow text={`${total || 0} followers`} />
          <Header as='h1' className="playlists-text">
            Public Playlists
          </Header>   
        </div>
        <div className="row mt-3">
          {this.renderPlaylist()}
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    axios.get(`${spotifyPlaylistURL}${this.state.auth.authToken}`)
    .then(response => {
        this.setState({
          play_lists: response.data.items
        })
    })
    .catch(error => {
      console.log(error);
      this.setState({ error })
    })
  }

  componentWillMount = () => {
    this.setState({
      userData: this.props.location.state.userData,
      auth: this.props.location.state.auth
    });
  }

  routeBack = (event) => {
    event.preventDefault();
    this.props.history.goBack()
  }

  renderPlaylist = () => {
      if (this.state.play_lists.length) {
        const { play_lists } = this.state;
        let playList = [];
        play_lists.map((item, index) => {
          playList.push(
            <div className="" key={index}>
              <Image 
                src={item.images[0].url || img_notFound}
                className=""
                style={{maxWidth: 300, maxHeight: 300}}
              />
            </div>
          )
        })
        return playList
      } else {
        return <p>Nessuna Playlist trovata...</p>
      }
  }
}

export default UserProfile;