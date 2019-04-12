import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ArtistAlbums from "./ArtistAlbums";
import AlbumTracks from './AlbumTracks';
import UserProfile from "./UserProfile";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/get-music' component={Dashboard}/>
      <Route path='/artist-albums/:artistId/:artistName' component={ArtistAlbums} />
      <Route path='/album-tracks/:albumId/:albumName' component={AlbumTracks} />
      <Route path='/user-profile' component={UserProfile} />
    </Switch>
  </main>
)

export default Main;