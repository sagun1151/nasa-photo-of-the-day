import React, { useState ,useEffect } from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'
import { BASE_URL, API_KEY} from './constants/index'

import Top from './top'

const StyledAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  background-color: #7EF5F9;
`

function App() {
  const [info, setInfo] = useState('')
  
  useEffect(()=> {
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
  .then(res => {
    // console.log(res.data)
    setInfo(res.data)
  })
  .catch(err => {
    console.error(err)
  })
  }, [])
  
  
  
  return (
    <StyledAll className="App">
      <p>NASA PICTURE OF SPACE </p>
      <Top data={info} />
    </StyledAll>
  );
}

export default App;
