import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navv from './Nav.tsx';
import Rpc from './reusable-persentaion-component.tsx';
import Home from './Home.tsx';
import Contacts from './Contacts.tsx';
import About from './About.tsx';

import Addnote from './add-note.tsx';
import {AuthPage} from './Auth';

function App() {
  const [count, setCount] = useState(0);

  // Define the list of pages with names and addresses
  const pages = [
    { name: "Home", address: "/" },
    { name: "Contacts", address: "/contacts" },
    { name: "About Us", address: "/about" },
    {name:"Add Notes", address:"/add-notes"},
    {name:"Login/Sign Up", address:"/auth"}
  ];

  return (
    <Router>
      <Navv pages={pages} />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-notes" element={<Addnote />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
