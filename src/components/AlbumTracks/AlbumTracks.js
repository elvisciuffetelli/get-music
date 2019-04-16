import React, { Component } from 'react'
import ReactPlayer from 'react-player'; 
import Navbar from '../Navbar';
import { Button } from 'semantic-ui-react';
import CustomCard from "../Common/CustomCard";
import './AlbumTracks.css';

class AlbumTracks extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
    
  render() {
    console.log("this.props in Tracks", this.props);
    const { data: { tracks }, current_user: { user: { images, display_name } } } = this.props.location.state;
    const albumNameCleanedUp = this.props.match.params.albumName.replace(/[-]/g," ").trim();
    return (
      <div>
        <Navbar 
          imageURL={images[0].url}  
          display_name={display_name} 
          {...this.props}
        />
        <div className="back-button-container-albums">
          <Button onClick={this.routeBack} color="yellow" size="tiny" className="btn btn-outline-success">Back</Button>
        </div>
        <div className="justify-content-center mt-5 row">
          <p className="text-center display-5">
            Tracce dell'album { albumNameCleanedUp }
          </p>
        </div>
        <div className="show-tracks-container">
          {this.showTracks(tracks)}
        </div>
      </div>
    )
  }

  routeBack = (event) => {
    event.preventDefault();
    this.props.history.goBack()
  }

  showTracks = (tracks) => {
    if (tracks !== undefined) {
      console.log('tracks inside showTracks',tracks)
      let results = [];
      let inherit = 'inherit';
      tracks.map((track, index) => { 
        results.push(
          <div className="tracks-card-container" key={index}>
            <CustomCard 
              name={track.name}
              id={track.id}                                                                                                         
            />
            <ReactPlayer 
              url={track.preview_url} 
              playing={false}
              width={inherit}
              height={80}
              style={{backgroundColor: '#2185d0', padding: '10px'}}                            
              controls={true}
              config={{
                file:{
                  forceAudio: true
                }
              }}                            
            />                        
          </div>
        )                          
      })
      return results
    } else {
      return <p></p>
    }
  }
}

export default AlbumTracks;