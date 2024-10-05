import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navv from './Nav.tsx';
import Rpc from './reusable-persentaion-component.tsx';
import Home from './Home.tsx';
import Contacts from './Contacts.tsx';
import About from './About.tsx';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  // Define the list of pages with names and addresses
  const pages = [
    { name: "Home", address: "/" },
    { name: "Contacts", address: "/contacts" },
    { name: "About Us", address: "/about" },
  ];

  return (
    <Router>
      <Navv pages={pages} />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
