class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     videoList: exampleVideoData,
     currentVideo : window.exampleVideoData[0]
    }
  }


// make a function
  // change the video to be played in videoPlayer 
  selectedVideoPlayer(video) {
    this.setState({
      currentVideo: video
    })
  }

  handleSearchChange(videoOptions) {
    var {q: 'pandas'} = videoOptions;
    
    if ('pandas' !== '') {
      window.searchYouTube(options, (responses) =>
        this.setState({
          videoList: responses,
          currentVideo:responses
        })
      )
    }
  }
  
  // var options = {
  //   q: 'pandas',
  //   key: window.AIzaSyBxmSPjyte6mX82_G3bsJwU7BJdYoMEgqo,
  //   max: 5,
  //   videoEmbeddable: true
  // }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchChange={this.handleSearchChange.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer videos={this.state.videoList} selectedVideo={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} clickedList={this.selectedVideoPlayer.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
