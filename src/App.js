import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Home} from './Home.js'
import { Videos } from './Videos';
import { About } from './About';

function App() {
  return (
    <> 
    <header>
      <img class="youtube-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"/>
      <form id="searchBoxForm">
        <input
        type="text"
        id="searchBox"
        />
        <input
        type="button"
        id="searchButton"
        value="Search..."
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
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos/:id" element={<Videos/>}/>
      <Route path="/videos/*" element={<Videos/>}/>
      <Route path="/about/" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
