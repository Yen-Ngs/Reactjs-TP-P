import React, {Fragment, useState, useEffect, useRef} from 'react';
import "./Ad.css"


const fakeFetch = person => {
    return new Promise(res => {
        console.log("call fetch")
        setTimeout(() => res(`${person}'s data`), 3000);
    });
};

export default function AdvoidingRC() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const isMount = useRef(true)

    useEffect(async () => {
        setLoading(true);
        fakeFetch(person).then(data => {
            if (!isMount.current) return;
            setData(data);
            setLoading(false);
            console.log("finish fetch")
        });
        return () => isMount.current = false
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
