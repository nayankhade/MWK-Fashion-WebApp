import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/beforeLogin/Home';
import { SignIn } from './components/beforeLogin/SignIn';
import { BizSignUp } from './components/biz/BizSignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<BizSignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
