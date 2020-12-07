import React, {useEffect, useState} from 'react'
import Splash from './components/splash'
import Dashboard from './components/dashboard/dashboard'
import './App.css';

function App() {

  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 4000);
  })

  const [loading, setLoading] = useState(true);

  const setTimePassed = () => {
    setLoading(false)
  }

  return (
  loading === true ?
    <div className="App">
      <Splash />
    </div>
    :
      <Dashboard />
  )

}

export default App;
