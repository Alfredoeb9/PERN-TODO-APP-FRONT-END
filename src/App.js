import React, {useEffect} from 'react';
import './App.css';

function App() {
  const getData = async () => {
    const userEmail = 'alftest@test.com'
    try {
      const response = await fetch(`http://localhost:8000/todo/${userEmail}`)
      const json = await response.json()
      console.log(json);
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <h1>Barebones application built with React, Webpack, and babel </h1>
    </div>
  );
}

export default App;
