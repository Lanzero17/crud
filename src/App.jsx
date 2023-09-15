import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
