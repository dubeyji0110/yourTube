import React from "react";
import "./VideoDetail.css";

function VideoDetail({ video }) {

    if (!video) return "Loading...";

    const src = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className='video'>
			<div className='embed'>
				<iframe
					src={src}
					title='YouTube video player'
					allowFullScreen></iframe>
			</div>
			<div className='detail'>
				<h4>{video.snippet.title}</h4>
				<h3>{video.snippet.channelTitle}</h3>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
