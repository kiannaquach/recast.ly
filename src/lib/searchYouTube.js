var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {

      callback(data);
    },
    error: function(err) {
      console.log("FAILED:", err);
    }
  });
};




window.searchYouTube = searchYouTube;

  