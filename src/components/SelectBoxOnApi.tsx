import React, { useEffect, useState } from 'react';

const SelectBoxOnApi = () => {
    const [data, setData] = useState([]);
    const [selectedVal, setSelectedVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET', headers : { accept: 'application/json'}})
        .then(res => res.json())
        .then(result => setData(result))
        .catch(err => setError(err.message))
        .finally(() => {
            setLoading(false);
        });
    }, [])

    return (
        <>
            <div className='container'>
                {
                    loading ? (<div>Loading...</div>) : 
                    data.length > 0 && (
                        <>
                            <select onChange={(e) => setSelectedVal(e.target.value)}>
                                {
                                    data.map((item: any, index) => {
                                        return (<option key={index} value={item.name}>{item.name}</option>)
                                    })
                                }
                            </select>
                            {selectedVal}
                        </>
                    )
                }
            </div>
        </>
    )
}

export default SelectBoxOnApi;