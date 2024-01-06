import React, {useState} from 'react';
import {data} from './data/data';

const SearchTable = () => {
    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <>
            {data.length > 0 && (
                <div className='container'>
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
                        <th className="col-md-2 col-xs-2">First Name</th>
                        <th className="col-md-3 col-xs-3">Last Name</th>
                        <th className="col-md-3 col-xs-3">Email</th>
                        <th className="col-md-4 col-xs-3">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.filter((item) => {
                            return search.toLowerCase() === '' 
                            ? true 
                            : item.first_name.toLowerCase().includes(search);
                        }).map((item) => {
                            return <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
                </div>
            )}
        </>
    )

}

export default SearchTable;