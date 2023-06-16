import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home.js'
import {Videos} from './pages/Videos.js'

function App() {
  return (
    <> 
    <header>
      <img
      class="youtube-header"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"
      onClick={() => console.log("Back to menu")}
      />
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
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos/*" element={<Videos/>}/>
    </Routes>
    </>
  );
}

export default App;
