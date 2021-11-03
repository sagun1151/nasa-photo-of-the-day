import React, { useState ,useEffect } from "react";
import "./App.css";
import axios from 'axios'

import Top from './top'

function App() {
  const [info, setInfo] = useState('')
  
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=B9BDTofVTdhv2MzGTanTybhignDGNtcYtRUp5pJS')
  .then(res => {
    // console.log(res.data)
    setInfo(res.data)
  })
  .catch(err => {
    console.error(err)
  })
  }, [])
  
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Top data={info} />
    </div>
  );
}

export default App;
