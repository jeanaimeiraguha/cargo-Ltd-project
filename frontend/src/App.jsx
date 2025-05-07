import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './HomePage';
import Select from './Select';
import Insert from './Insert';
import Update from './Update';
import Sf from './Sf';
import Insf from './Insf';
import Updatefun from './Updatefun';
import Select2 from './imports/Select2';
import Insert2 from './imports/Insert2';
import Update2 from './imports/Update2';
import Select3 from './Exports.jsx/Select3';
import Notfound from './Notfound';
import Insert3 from './Exports.jsx/Insert3';
import  'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; 
import './App.css'
import Login from './Login';
import Report from '../Report/Report';
// import Select3 from './Exports.jsx/Select3';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="c">
        <div className="custom-container">
          <Link className="custom-brand" to="/">Home</Link>
          <button className="custom-toggler" type="button">
            <span className="custom-toggler-icon"></span>
          </button>
          <div className="custom-nav-collapse">
            <ul className="custom-nav">
              <li className="custom-nav-item">
                <Link className="custom-nav-link" to="/select">Managers</Link>
              </li>
              <li className="custom-nav-item">
                <Link className="custom-nav-link" to="/selectimp">Imports</Link>
              </li>
              <li className="custom-nav-item">
                <Link className="custom-nav-link" to="/sf">Furnitures</Link>
              </li>
              <li className="custom-nav-item">
                <Link className="custom-nav-link" to="/select3">Exports</Link>
                <Link className="custom-nav-link px-4" to="/report">Report</Link>
<Link to="/login" className='custom-nav-link px-4  text-danger '>Logout</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />
        //Route for report
        <Route path='/report' element={<Report/>}/>
        
        {/* Route for the furniture page */}
        <Route path="/sf" element={<Sf />} />

        {/* Route for inserting furniture */}
        <Route path="/insf" element={<Insf />} />

        {/* Routes for imports */}
        <Route path="/selectimp" element={<Select2 />} />
        <Route path="/insertimp" element={<Insert2 />} />
        <Route path="/updateimp/:Funitureid" element={<Update2 />} />

        {/* Routes for furniture management */}
        <Route path="/updatefun/:Funitureid" element={<Updatefun />} />

        {/* Routes for manager */}
        <Route path="/insert" element={<Insert />} />
        <Route path="/update/:ManagerId" element={<Update />} />
        <Route path="/select" element={<Select />} />

        {/* Route for insert exportd */}
        <Route path="/insert3" element={<Insert3 />} />
        // Route for select export
<Route path='/select3' element={<Select3/>}/>
        {/* Fallback for 404 */}
        <Route path="*" element={<Notfound />} />
        {/* Route for login */}
        <Route path="/login" element={<Login />} />
        <Route path="/insert2" element={<Insert2 />} />
        <Route path="/select3" element={<Select3 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
