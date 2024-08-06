import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/beforeLogin/Home';
import { SignIn } from './components/beforeLogin/SignIn';
import { BizSignUp } from './components/biz/BizSignUp';
import { AuthProvider } from './Js/AuthContext';
import { Footer } from './components/beforeLogin/Footer';
import { AdminDashboard } from './components/biz/Admin/AdminDashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<BizSignUp />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
      <Footer/>
    </div>
  );
}



export default App;
