import { useEffect, useState } from "react";
import youtube from "./config";

const useVideos = (term) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(term);
    }, []);

    const search = async (keyword) => {
        const res = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });

        setVideos(res.data.items);
    };

    return [videos, search];
};

export default useVideos;