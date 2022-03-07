import { useEffect, useState } from 'react';
import api from '../api';

const useImages = (query) => {
    const [errors, setErrors] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if (typeof query === 'string' && query.length) {
            const fetchData = async () => {
                try {
                    // reset state
                    setErrors(false);

                    const fetchedData = await api.get(`/images/q=${query}&num=100`);
                    // set new data
                    setData(fetchedData.data);
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
        imagesError: errors,
        imagesData: data,
    };
};

export default useImages;
