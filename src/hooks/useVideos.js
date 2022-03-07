import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import api from '../api';

const useVideos = (query) => {
    const [errors, setErrors] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if (typeof query === 'string' && query.length) {
            const fetchData = async () => {
                try {
                    // reset state
                    setErrors(false);

                    const fetchedData = await api.get(`/search/q=${query}+video&num=100`);

                    console.log(fetchedData);
                    const filterData = await fetchedData.data.results.map((item) => {
                        let videoLink = null;

                        if (ReactPlayer.canPlay(item.link)) {
                            videoLink = item.link;
                        }

                        if (!videoLink && item.additional_links instanceof Array && item.length) {
                            const findVideoLink = item.additional_links.find((link) =>
                                ReactPlayer.canPlay(link.href)
                            );
                            videoLink = findVideoLink ? findVideoLink.href : null;
                        }

                        return { ...item, videoLink };
                    });

                    // set new data
                    setData({ ...fetchedData.data, results: filterData });
                    setErrors(false);
                } catch (error) {
                    setErrors(true);
                    console.log(error);
                }
            };
            fetchData();
        }

        // cleanup
        return () => {
            setData([]);
            setErrors(false);
        };
    }, [query]);

    return {
        videosError: errors,
        videosData: data,
    };
};

export default useVideos;
