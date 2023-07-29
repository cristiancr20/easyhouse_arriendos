import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegistrarArriendosForm from './pages/CrearArriendoForm';
import ListarArriendo from './pages/Listar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/obtener/arriendo' element = {<ListarArriendo/>}/>
          <Route path="/registrar/arriendo" element={<RegistrarArriendosForm/>} />
          
          <Route path='*' element="Error 404"></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
