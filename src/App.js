import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch("http://localhost:8080/apis")
      .then(res=>res.json())
      .then(data=>console.log(data));
  });
  return(
    <div className='App'>
      Test
    </div>
  )
}

export default App;
