
import React, { Fragment, useState, useEffect } from 'react';
import "./Ad.css"


const fakeFetch = person => {
  return new Promise(res => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};

export default function AdvoidingRC() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fakeFetch(person).then(data => {
        setData(data);
        setLoading(false);
      });
    }, [person]);
    // useEffect(() => {
    //     let canceled = false;
      
    //     setLoading(true);
    //     fakeFetch(person).then(data => {
    //       if (!canceled) {
    //         setData(data);
    //         setLoading(false);
    //       }
    //     });
      
    //     return () => (canceled = true);
    //   }, [person]);
  
    return (
      <div className='Avoid'>
        <div className="buttons">
        <button onClick={() => setPerson('Nick')}>Nick's Profile</button>
        <button onClick={() => setPerson('Deb')}>Deb's Profile</button>
        <button onClick={() => setPerson('Joe')}>Joe's Profile</button>
        </div>
        {person && (
          <div className="content">
            <h1>{person}</h1>
            <p>{loading ? 'Loading...' : data}</p>
          </div>
        )}
      </div>
    );
}
