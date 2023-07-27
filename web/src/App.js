import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegistrarArriendosForm from './pages/CrearArriendoForm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrarArriendosForm/>} />
          
          <Route path='*' element="Error 404"></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
