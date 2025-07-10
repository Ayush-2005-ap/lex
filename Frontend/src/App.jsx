import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home';
import Archives from './pages/Archives/Archives';
import EdBoard from './pages/Editorial-board/EdBoard';
import Submission from './pages/Submission Guidelines/Submission';
import Indexing from './pages/Indexing/Indexing';



function App() {
  return (
    <>
    <div className="container">
      <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/editorial-board" element={<EdBoard />} />
          <Route path="/submission-guidelines" element={<Submission />} />
          <Route path="/indexing" element={<Indexing />} />
        </Routes>
        
      </Router>

      </div>
      <Footer />
    

    </div>
      
    </>


  );
}
export default App;
