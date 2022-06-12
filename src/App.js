import axios from 'axios'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import React , { useState , useEffect} from 'react'
import './App.css';
import Buttons from './components/Buttons'
import Header from './components/Header'
import Card from './components/Card'

const  App=()=> {
   const [data,setData]=useState([]);
  
   const fetchMyAPI= async() =>{
    let response = await axios.get(`https://reqres.in/api/users?page=2`)
    setData(response.data.data)}

useEffect(() => {
 fetchMyAPI()
}, [])
  
 console.log(data)
return (
  <Router>
   
     <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <div className="buttonContainer"><Buttons data={data}/></div>
        </Route>
        <Route path='/user/:id'>
          <Card />
        </Route>
        
      </Switch>
     </div>

  </Router>
  );
}

export default App;
