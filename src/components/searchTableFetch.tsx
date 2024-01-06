import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SearchTableFetch = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responseData => responseData.json())
        .then(res => setData(res))
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            <div className='container'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {data.length > 0 && (
                            <>
                                <br />
                                <div className="form-group pull-right">
                                    <input 
                                        type="text" 
                                        className="search form-control" 
                                        placeholder="Search" 
                                        onChange={(event) => setSearch(event.target.value)}
                                    />
                                </div>
                                <br />
                                <table className="table table-hover table-bordered results table table-striped">
                                <thead>
                                    <tr>
                                    <th className="col-md-1 col-xs-1">id</th>
                                    <th className="col-md-2 col-xs-2">Name</th>
                                    <th className="col-md-3 col-xs-3">Email</th>
                                    <th className="col-md-3 col-xs-3">Website</th>
                                    <th className="col-md-4 col-xs-3">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    data.filter((item : any) => {
                                        return search.toLowerCase() === '' 
                                        ? true 
                                        : item.name.toLowerCase().includes(search);
                                    }).map((item: any, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.website}</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    )

}

export default SearchTableFetch;