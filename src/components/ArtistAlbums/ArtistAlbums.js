import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import CustomCard from '../Common/CustomCard';
import { spotifyAlbumURL } from '../../constants';
import './ArtistAlbums.css';

class ArtistAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: [],
      tracks: []
  };
}

render() {
  const { 
    data: { 
      albums 
    }, 
    current_user: { 
      user: { 
        images, 
        display_name 
      } 
    } 
  } = this.props.location.state;

  return (
    <div>
      <Navbar 
        imageURL={images[0].url} 
        display_name={display_name}
        {...this.props} 
      />
      <div className="row">
        <p>
          Risultati album per { albums[0].artists[0].name}
        </p>
      </div>
      <div className="row">
        {this.showAlbums(albums)}
      </div>
    </div>
    )
  }

  componentDidMount = () => {
    const { current_user } = this.props.location.state;
    if (current_user) {
      this.setState({ current_user })
    } else {
      this.props.history.push('/')
    }
  }

  showAlbums = (albums) => {
    if (albums !== undefined) {           
      let results = [];
      albums.map((album, index) => {
        if(album.images[0] !== undefined) {
          let hasImage = album.images[0];
          results.push(
            <div className="card-container" key={index}>
              <CustomCard 
                name={album.name}
                id={album.id}
                imageURL={hasImage.url || 'https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_1280.jpg'}
                onClick={event => this.getAlbumTracks(event, album.id, album.name)}
                text="Mostra tracce"                                                     
              />
            </div>
          )
        }             
      })
      return results
    } else {
      return <p></p>
    }
  }

getAlbumTracks = (event, albumId, name) => {
    event.preventDefault();
    const { authToken } = this.props.location.state.auth;     
    let tracks;
    let cleanName = name.replace(/[ ]/g,"-").replace(/[()]/g,"").trim();
    axios.get(`${spotifyAlbumURL}${albumId}/tracks?access_token=${authToken}`)
    .then(response => {            
      this.setState({ tracks: response.data.items });
      tracks = response.data.items;            
    })
    .then(()=> this.props.history.push(`/album-tracks/${albumId}/${cleanName}`, { 
        data: { tracks },
        current_user: { user: this.state.current_user.user },
        auth: { authToken }
      }
    ))
    .catch(error => console.log(error));
  }
}

export default ArtistAlbums;
