class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.handleYouTubeVideos('shiba');
  }

  selectedVideoPlayer(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleYouTubeVideos(query) {
    var options = {
      key: "API_KEY",
      q: query,
      part: 'snippet',
      maxResults: 5
    };

    window.searchYouTube(options, (videos) =>{
      console.log(videos)
      this.setState({
        videoList: videos.items,
        currentVideo: videos.items[0]
      })

    }
    )
    
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchChange={this.handleYouTubeVideos.bind(this)}/>
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
