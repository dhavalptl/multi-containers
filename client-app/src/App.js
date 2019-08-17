import React, {useState} from 'react';
import { sendRequest } from './service';
import './App.css';

function App() {
  const [message, setMessage] = useState('No Message :(');
  
  const fetchGreetings = () => {
    sendRequest()
    .then(data => setMessage(data.message))
    .catch(error => {
      console.error("Error while fetching greetings ", error);
    });
  }
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Greetings : {message}
        </p>
        <button onClick={fetchGreetings} className="fetch-btn">Get Greetings</button>
      </div>
    </div>
  );
}

export default App;
