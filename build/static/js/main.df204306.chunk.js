(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a.p+"static/media/Spinner-1s-200px.5a3498d4.gif"},170:function(e,t,a){e.exports=a(335)},175:function(e,t,a){},176:function(e,t,a){},196:function(e,t,a){},316:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),s=a.n(c),o=a(47),i=(a(175),a(17)),l=a(18),u=a(20),m=a(19),p=a(21),h=a(42),d=a(344),f=a(336),v=a(151),E=a.n(v),b=(a(176),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader-text"},r.a.createElement("img",{src:E.a,alt:"loader spinner"})))}),g=a(34),y=a.n(g),k="https://api.spotify.com/v1/me?access_token=",N="https://api.spotify.com/v1/search?q=",w="https://api.spotify.com/v1/artists/",j="https://api.spotify.com/v1/albums/",O="https://api.spotify.com/v1/me/playlists?access_token=",_=(a(196),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=window.location.href;if(e.indexOf("token=")>-1){var t=e.split("token=")[1].split("&")[0].trim();a.setState({authToken:t,authorized:!0}),window.localStorage.setItem("token",t)}},a.handleAuthFlow=function(e){if(e.preventDefault(),a.state.authorized){var t,n=a.state.authToken;y.a.get(k+n).then(function(e){a.setState({profile:e.data}),t=e.data}).then(function(){return a.props.history.push("/get-music",{current_user:{user:t},auth:{authToken:n}})}).catch(function(e){console.log(e),window.location.assign("https://get-music-mybackend.herokuapp.com/login")})}else a.setState({loading:!0}),window.location="https://get-music-mybackend.herokuapp.com/login"},a.state={value:"Get Music",authToken:"",authorized:!1,profile:[],loading:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header-container"},r.a.createElement(d.a,{as:"h1",color:"yellow"},this.state.value),r.a.createElement("span",{className:"subtitle"},"una React App connessa alle API di Spotify")),r.a.createElement("div",null,r.a.createElement("div",{className:"login_button-container"},r.a.createElement("p",null,this.state.authorized?"Autorizzato con successo! Clicca per entrare":"Clicca il bottone per autorizzare il tuo account Spotify ad utilizzare Get Music!"),r.a.createElement(f.a,{color:"teal",onClick:this.handleAuthFlow},this.state.authorized?"Vai a Get Music":"Log in con Spotify"),this.state.loading?r.a.createElement(b,null):null)))}}]),t}(n.Component)),S=a(161),x=a(342),C=(a(316),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-content-container"},r.a.createElement(S.a,{className:"nav-image",src:this.props.imageURL,avatar:!0}),r.a.createElement(x.a,{as:"ul",link:!0,className:"ul-list"},r.a.createElement(x.a.Item,{className:"nav-link"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Get Music")),r.a.createElement(x.a.Item,{className:"nav-link"},r.a.createElement(o.b,{className:"nav-link",to:{pathname:"/user-profile",state:{userData:this.props.location.state.current_user.user,auth:this.props.location.state.auth}}},"Il mio profilo")))))}}]),t}(n.Component)),T=a(341),A=a(343),D=(a(322),{imageStyles:{maxWidth:280,minHeight:200,maxHeight:200},trackStyles:{minHeight:60,overFlow:"hidden"}}),z=function(e){var t=e.imageURL,a=e.name,n=e.id,c=e.onClick,s=e.text;return t?r.a.createElement(A.a,{className:"card",key:n},r.a.createElement(S.a,{className:"card-img-top",src:t,style:D.imageStyles}),r.a.createElement(A.a.Content,{className:"content-container"},r.a.createElement(A.a.Header,{className:"card-header"},a),r.a.createElement(f.a,{href:"#",className:"card-btn",onClick:c,color:"blue"},s))):r.a.createElement("div",{className:"card-container",key:n},r.a.createElement("div",{className:"card-body",style:D.trackStyles},r.a.createElement("h4",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"})))},R=(a(323),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.location.state.current_user;e?a.setState({current_user:e}):a.props.history.push("/")},a.captureSearch=function(e){a.setState({query:e})},a.searchSpotifyArtists=function(e){e.preventDefault();var t,n=a.props.location.state.auth.authToken;y.a.get("".concat(N).concat(a.state.query,"&type=artist&access_token=").concat(n)).then(function(e){0!==(t=e.data.artists).items.length?a.setState({artists:t,error:""}):a.setState({artists:t,error:"La ricerca non ha prodotto nessun risultato"})}).catch(function(e){a.setState({error:"Errore! Riprova pi\xf9 tardi",artists:[]})})},a.showArtistResults=function(e){if(void 0!==e){var t=[];return e.map(function(e,n){if(void 0!==e.images[0]){var c=e.images[0];t.push(r.a.createElement("div",{className:"card-container",key:n},r.a.createElement(z,{name:e.name,id:e.id,imageURL:c.url,onClick:function(t){return a.searchAlbums(t,e.id,e.name)},text:"Mostra Albums"})))}}),t}return r.a.createElement("p",null)},a.searchAlbums=function(e,t,n){e.preventDefault();var r,c=a.props.location.state.auth.authToken,s=n.replace(/[ ]/g,"-").replace(/[()]/g,"").trim();y.a.get("".concat(w).concat(t,"/albums?album_type=album&access_token=").concat(c)).then(function(e){a.setState({albums:e.data.items}),r=e.data.items}).then(function(){return a.props.history.push("/artist-albums/".concat(t,"/").concat(s),{data:{albums:r},current_user:{user:a.state.current_user.user},auth:{authToken:c}})}).catch(function(e){return console.log(e)})},a.state={current_user:[],query:"",artists:[],albums:[],error:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.location.state.current_user.user,a=t.images,n=t.display_name;return r.a.createElement("div",{className:"main-container"},r.a.createElement(C,Object.assign({imageURL:a[0].url,display_name:n},this.props)),r.a.createElement("div",{className:"form-container"},r.a.createElement(d.a,{as:"h1",className:""},"Cerca artista"),r.a.createElement("div",{className:""},r.a.createElement("form",{onSubmit:this.searchSpotifyArtists,className:""},r.a.createElement("div",{className:"input-container"},r.a.createElement(T.a,{type:"text",icon:"search",placeholder:"enter artist name",onChange:function(t){e.captureSearch(t.target.value),e.setState({error:""})},value:this.state.query})),r.a.createElement("div",{className:"form-group"},r.a.createElement(f.a,{type:"submit",color:"teal"},"Invia")),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{style:{color:"#e74c3c",marginTop:"20px"}},this.state.error))))),r.a.createElement("div",{className:"row"},this.showArtistResults(this.state.artists.items)))}}]),t}(n.Component)),M=a(56),I=a.n(M),L=(a(324),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.location.state.current_user;e?a.setState({current_user:e}):a.props.history.push("/")},a.showAlbums=function(e){if(void 0!==e){var t=[];return e.map(function(e,n){if(void 0!==e.images[0]){var c=e.images[0];t.push(r.a.createElement("div",{className:"card-container",key:n},r.a.createElement(z,{name:e.name,id:e.id,imageURL:c.url||I.a,onClick:function(t){return a.getAlbumTracks(t,e.id,e.name)},text:"Mostra tracce"})))}}),t}return r.a.createElement("p",null)},a.getAlbumTracks=function(e,t,n){e.preventDefault();var r,c=a.props.location.state.auth.authToken,s=n.replace(/[ ]/g,"-").replace(/[()]/g,"").trim();y.a.get("".concat(j).concat(t,"/tracks?access_token=").concat(c)).then(function(e){a.setState({tracks:e.data.items}),r=e.data.items}).then(function(){return a.props.history.push("/album-tracks/".concat(t,"/").concat(s),{data:{tracks:r},current_user:{user:a.state.current_user.user},auth:{authToken:c}})}).catch(function(e){return console.log(e)})},a.state={current_user:[],tracks:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=e.data.albums,a=e.current_user.user,n=a.images,c=a.display_name;return r.a.createElement("div",null,r.a.createElement(C,Object.assign({imageURL:n[0].url,display_name:c},this.props)),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Risultati album per ",t[0].artists[0].name)),r.a.createElement("div",{className:"row"},this.showAlbums(t)))}}]),t}(n.Component)),U=a(160),B=a.n(U),P=(a(330),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).showTracks=function(e){if(void 0!==e){console.log("tracks inside showTracks",e);var t=[];return e.map(function(e,a){t.push(r.a.createElement("div",{className:"tracks-card-container",key:a},r.a.createElement(z,{name:e.name,id:e.id}),r.a.createElement(B.a,{url:e.preview_url,playing:!1,width:"inherit",height:80,style:{backgroundColor:"#2185d0",padding:"10px"},controls:!0,config:{file:{forceAudio:!0}}})))}),t}return r.a.createElement("p",null)},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log("this.props in Tracks",this.props);var e=this.props.location.state,t=e.data.tracks,a=e.current_user.user,n=a.images,c=a.display_name,s=this.props.match.params.albumName.replace(/[-]/g," ").trim();return r.a.createElement("div",null,r.a.createElement(C,Object.assign({imageURL:n[0].url,display_name:c},this.props)),r.a.createElement("div",{className:"justify-content-center mt-5 row"},r.a.createElement("p",{className:"text-center display-5"},"Tracce dell'album ",s)),r.a.createElement("div",{className:"show-tracks-container"},this.showTracks(t)))}}]),t}(n.Component)),q=(a(331),function(e){var t=e.text;return r.a.createElement(A.a.Group,{className:"profile-row"},r.a.createElement(A.a,{color:"teal",fluid:!0,header:t}))}),G=(a(332),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){y.a.get("".concat(O).concat(a.state.auth.authToken)).then(function(e){a.setState({play_lists:e.data.items})}).catch(function(e){console.log(e),a.setState({error:e})})},a.componentWillMount=function(){a.setState({userData:a.props.location.state.userData,auth:a.props.location.state.auth})},a.routeBack=function(e){e.preventDefault(),a.props.history.goBack()},a.renderPlaylist=function(){if(a.state.play_lists.length){var e=a.state.play_lists,t=[];return e.map(function(e,a){t.push(r.a.createElement("div",{className:"",key:a},r.a.createElement(S.a,{src:e.images[0].url||I.a,className:"",style:{maxWidth:300,maxHeight:300}})))}),t}return r.a.createElement("p",null,"Nessuna Playlist trovata...")},a.state={userData:[],auth:"",play_lists:[],error:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.location.state.userData,t=e.images,a=e.display_name,n=e.email,c=e.followers.total;return r.a.createElement("div",null,r.a.createElement("div",{className:"back-button-container"},r.a.createElement(f.a,{onClick:this.routeBack,color:"yellow",size:"tiny",className:"btn btn-outline-success"},"Back")),r.a.createElement("div",{className:"user-heading-container"},t.length?r.a.createElement(S.a,{avatar:!0,src:t[0].url||I.a,alt:"spotify user profile image",className:""}):r.a.createElement("p",null),r.a.createElement(d.a,{as:"h1",className:"user-name-text"},a)),r.a.createElement("div",{className:"profile-rows"},r.a.createElement(q,{text:n||"email non disponibile"}),r.a.createElement(q,{text:"".concat(c||0," followers")}),r.a.createElement(d.a,{as:"h1",className:"playlists-text"},"Public Playlists")),r.a.createElement("div",{className:"row mt-3"},this.renderPlaylist()))}}]),t}(n.Component)),H=function(){return r.a.createElement("main",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:_}),r.a.createElement(h.a,{path:"/get-music",component:R}),r.a.createElement(h.a,{path:"/artist-albums/:artistId/:artistName",component:L}),r.a.createElement(h.a,{path:"/album-tracks/:albumId/:albumName",component:P}),r.a.createElement(h.a,{path:"/user-profile",component:G})))},W=(a(333),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(334);s.a.render(r.a.createElement(o.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a.p+"static/media/image-not-found.6017e4da.jpg"}},[[170,1,2]]]);
//# sourceMappingURL=main.df204306.chunk.js.map