import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchResults:[{name:'name1',artist:'artist1',album:'album1',id:1},{name:'name2',artist:'artist2',album:'album2',id:2},
      {name:'name3',artist:'artist3',album:'album3',id:3}],
      playlistName:'playlistName',
      playlistTracks:[{name:'playlistname1',artist:'playlistartist1',album:'playlistalbum1',id:1},
      {name:'playlistname2',artist:'playlistartist2',album:'playlistalbum2',id:2},
      {name:'playlistname3',artist:'playlistartist3',album:'playlistalbum3',id:3},]

    };
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
  }
  addTrack(track){
    if (this.state.playlistTracks.find(
      savedTrack => savedTrack.id === track.id)) {
      return ;
    }
    this.state.playlistTracks.push(track);
    this.setState({playlistTracks:this.state.playlistTracks});
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(
      savedTrack => savedTrack.id === track.id)) {
        this.state.playlistTracks.pop(track);
        this.setState({playlistTracks:this.state.playlistTracks});
    }
    
  }
  render(){
   return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
      </div>
    </div>
  </div>
   );
  }
}

export default App;
