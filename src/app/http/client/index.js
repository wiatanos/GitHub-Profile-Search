import React, {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const {loading, setLoading} = useState(true);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
    }, []);

    return { data, loading  }
}

export default useFetch;