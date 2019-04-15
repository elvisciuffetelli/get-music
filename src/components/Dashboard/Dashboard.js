import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Button, Input, Header } from 'semantic-ui-react';
import { spotifySearchURL, spotifyArtistURL } from '../../constants';
import CustomCard from '../Common/CustomCard';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        current_user: [],
        query: '',
        artists: [],
        albums: [],
        error: ''
      }        
    }

  render() {
    const { images, display_name } = this.props.location.state.current_user.user;
    //console.log(this.props.location.state)
    return (
      <div className="main-container">
        <Navbar
          imageURL={images[0].url || 'https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_1280.jpg'} 
          display_name={display_name}
          {...this.props}
        />
        <div className="form-container">
          <Header as="h1" className="">Cerca artista</Header>
          <div className="">
            <form onSubmit={this.searchSpotifyArtists} className="">
              <div className="input-container">
                <Input 
                  type="text"
                  icon='search' 
                  placeholder="enter artist name" 
                  onChange={event => {
                      this.captureSearch(event.target.value);
                      this.setState({ error: ''});
                    }
                  }
                  value={this.state.query} 
                />
              </div>
              <div className="form-group">
                <Button 
                  type="submit"
                  color='teal'
                >
                  Invia
                </Button>
              </div>
              <div className="form-group">
                <p style={{color: '#e74c3c', marginTop: '20px'}}>
                  {this.state.error}
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {this.showArtistResults(this.state.artists.items)}
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    const { current_user } = this.props.location.state;
    console.log(current_user)
    if (current_user) {
      this.setState({ current_user })
    } else {
      this.props.history.push('/')
    }
  }

  captureSearch = (searchTerm) => {
    this.setState({ query: searchTerm });
  }

  searchSpotifyArtists = (event) => {
    event.preventDefault();
    const { authToken } = this.props.location.state.auth;
    let artists;
    axios.get(`${spotifySearchURL}${this.state.query}&type=artist&access_token=${authToken}`)
    .then(response => {
        artists = response.data.artists;
        if (artists.items.length !== 0) {
          this.setState({artists, error: ''});
        } else {
          this.setState({artists, error: 'La ricerca non ha prodotto nessun risultato'});
        }
    })
    .catch(error => {
        this.setState({ 
            error: 'Errore! Riprova più tardi',
            artists: []
        })
    })
  }

  showArtistResults = (artists) => {
    if (artists !== undefined) {            
        let results = [];
        artists.map((artist, index) => {
          if (artist.images[0] !== undefined) {
            let hasImage = artist.images[0];
            results.push(
              <div className="card-container" key={index}>
                <CustomCard 
                  name={artist.name}
                  id={artist.id}
                  imageURL={hasImage.url}
                  onClick={(event) => this.searchAlbums(event, artist.id, artist.name)}
                  text="Mostra Albums"                                                     
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

  searchAlbums = (event, artistId, name) => {
    event.preventDefault();
    const { authToken } = this.props.location.state.auth;        
    let albums;
    let cleanName = name.replace(/[ ]/g,"-").replace(/[()]/g,"").trim();
    axios.get(`${spotifyArtistURL}${artistId}/albums?album_type=album&access_token=${authToken}`)
      .then(response => {            
        this.setState({ albums: response.data.items });
        albums = response.data.items;            
      })
      .then(()=> this.props.history.push(`/artist-albums/${artistId}/${cleanName}`, { 
          data: { albums },
          current_user: { user: this.state.current_user.user },
          auth: { authToken }
        }
      ))
    .catch(error => console.log(error));
  }
}

export default Dashboard;