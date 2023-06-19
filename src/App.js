import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Home} from './Home.js'
import { Videos } from './Videos';
import { About } from './About';
import { WatchVideo } from './WatchVideo';


function App() {
  const [search , setSearch] = useState('')
  const navigate = useNavigate()



  function searchVideo(){
    navigate(`/videos/${document.querySelector('#searchBox').value}`)
  }
  return (
    <> 
    <header>
      <img class="youtube-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"/>
      <form id="searchBoxForm">
        <input
        type="text"
        id="searchBox"
        onChange={(x) => setSearch(x)}
        />
        <input 
        type="button" 
        id="searchButton"
        value="Search..."
        onClick={() => searchVideo()}
        />
      </form>
      <div id="headerButtons">
        <button class="headerButton">
          <Link to="/">Home</Link>
        </button>
        <button class="headerButton">
          <Link to="/about">About</Link>
        </button>
      </div>
    </header>
    {navigate(`/`)}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos/:id" element={<Videos/>}/>
      <Route path="/videos/*" element={<Videos/>}/>
      <Route path="/about/" element={<About/>}/>
      <Route path="/watch/:id" element={<WatchVideo/>}/>
    </Routes>
    </>
  );
}

export default App;
