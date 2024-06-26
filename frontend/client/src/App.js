import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching the message!', error);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{message ? message : 'Loading...'}</h1>
            </header>
        </div>
    );
}

export default App;
