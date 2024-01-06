import React, { useState } from 'react';

const GetDataOnClick = () => {
    const [data, setData] = useState([]);
    const [err, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const getUserInfo  = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            });

            if(!response.ok){
                throw new Error(`Error is ${response.status}`)
            }

            const result =  await response.json();
            setData(result);
        } catch(err: any){
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }


    return(
        <>
            <div className='container'>
                <button onClick={getUserInfo}>Call APi</button>
                {
                    isLoading 
                        ? (<div>Loading...</div>) 
                        : data.length > 0 && (
                            <>
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
                                            data.map((item:any, index) => {
                                                return <tr key={index}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.website}</td>
                                                    <td>{item.phone}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default GetDataOnClick;