import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  // console.log(props.videos[0]);

  return (
    <div className="video-list">
      {props.videos.map((video) => (<VideoListEntry onTitleClick={props.onTitleClick} key={video.etag} video={video}/>))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
