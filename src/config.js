import axios from "axios";

const key = "AIzaSyCv6CTmpIAUF08FFBqRaatq-SbZHFB-olM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key,
    },
});