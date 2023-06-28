import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeeList from './components/FeeList';
import AddFee  from './components/AddFee';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<FeeList/>} />
        <Route path="add" element={<AddFee/>} />
      </Routes>
    </Router>
  );
};

export default App;