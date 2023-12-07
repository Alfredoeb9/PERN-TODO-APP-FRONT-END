import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<any>(null);
  const getData = async () => {
    const userEmail = 'alftest@test.com'
    try {
      const response = await fetch(`http://localhost:8000/todo/${userEmail}`)
      const json = await response.json()
      setTasks(json);
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getData()
  }, [tasks])

  // SORT BY DATE 
  const sortedTasks: any = tasks?.sort((a: any,b: any) => new Date(a.date).valueOf() - new Date(b.date).valueOf()) as unknown

  return (
    <div className="App">
      <h1>Barebones application built with React, Webpack, and babel </h1>
      {sortedTasks?.map((task: any, i: number) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
