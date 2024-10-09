
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from './Table'; 

function App() {
  const API = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
  const [apiData, setApiData] = useState([]); 

  const getData = async ()=>{
    try {
      const data = await axios.get(API);
      setApiData(data.data);
    } catch (error) {
      window.alert(`failed to fetch data`); 
    }   
  };

  useEffect(()=>{
    async function fetchData() { 
      await getData();      
    } 
    fetchData();
    console.log(apiData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (   
    <div className="App">
      <header className="App-header">
        <h1>Employee Data Table</h1>
      </header>
      {apiData.length>0 && <Table data={apiData}/>}       
    </div> 
  );
}

export default App;
