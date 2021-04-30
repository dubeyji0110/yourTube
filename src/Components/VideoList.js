import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

function VideoList({ videos, onVideoSelect }) {
	return (
		<div className='list'>
			{videos.map((video) => {
                return (<VideoItem
                    onVideoSelect={onVideoSelect}
                    video={video}
                    key={video.id.videoId}
                />);
			})}
		</div>
	);
}

export default VideoList;
