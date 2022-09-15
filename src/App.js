
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  const pageSize=15;
  const apikey=process.env.REACT_APP_NEWS_API

    return (
      <BrowserRouter>
      <div>
          <Navbar/>
          
          <Routes>
          <Route exact path="/" element={<News  apikey={apikey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News  apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News  apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News  apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News  apikey={apikey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News  apikey={apikey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News  apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News  apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
            
          </Routes>
      </div>
     </BrowserRouter>
      
    )
  
}

export default App