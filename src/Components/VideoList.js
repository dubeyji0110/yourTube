import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

function VideoList({ videos, onVideoSelect }) {
	return (
		<div className='list'>
			{videos.map((video) => {
				if (video === videos[0])
					return null;
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
