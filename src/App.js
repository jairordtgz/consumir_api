import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes> 
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/> {/*ruta y renderizar archivo*/} 
        </Routes>

      </Router>

    </React.Fragment>
  );
}

export default App;
