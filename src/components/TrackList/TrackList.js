import React from 'react';
import './TrackList.css';
import '../Track/Track'
class TrackList extends React.Component {
    render(){
        return(
            <div className="TrackList">
            {
                this.props.tracks.map(track=>{
                    return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemoval={this.props.onRemoval} isRemoval={this.props.isRemoval}/>
                })
            }
            </div>
        );
    }
}
export default TrackList;