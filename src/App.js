
import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [temp, setTemp] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/user')
    .then(res => res.text())
    .then(res => setTemp(res))
  }, [])

  
  

  return (
    
    <div className="App">
      {temp}
      
    </div>
  );
}

export default App;
