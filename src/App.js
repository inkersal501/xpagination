
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
      return data.data;
    } catch (error) {
      console.log(`Error Occured while fetching data ${error}`);
    }   
  };

  useEffect(()=>{
    async function fetchData() { 
      const response = await getData();
      setApiData(response);
    } 
    fetchData();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Data Table</h1>
      </header>
      <Table data={apiData}/>
      
    </div>
  );
}

export default App;
