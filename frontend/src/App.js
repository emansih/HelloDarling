import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import User from './components/User';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
          </div>
        </Router>
    );
  }
}
export default App;