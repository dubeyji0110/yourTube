import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import VideoDetail from "./Components/VideoDetail";
import VideoList from "./Components/VideoList";
import useVideos from "./useVideos";

function App() {
	const [videos, search] = useVideos("reactjs");
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<main className='app'>
			<Search onFormSubmit={search} />
			<section className='main'>
				<VideoDetail video={selectedVideo} />
				<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
			</section>
		</main>
	);
}

export default App;
