import React from 'react'
import Select from './Select'
import Insert from './Insert'
import Update from './Update'
import Sf from './Sf'
import Insf from './Insf'
import Updatefun from './Updatefun'
import Select2 from './imports/Select2'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Insert2 from './imports/Insert2'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        //Route for the main page 
        <Route path='/' element={<Select />} />
        //route for the furniture page
        <Route path='/sf' element={<Sf />} />
        //route for the insert page
        <Route path='/insf' element={<Insf />} />
        //route for the imports page
        <Route path='/selectimp' element={<Select2 />} />
        //route for the update page funiture
        <Route path='/updatefun/:Funitureid' element={<Updatefun />} />
        //route for the insert page imports
        <Route path='/insertimp' element={<Insert2 />} />
        //route for the insert page funiture
        <Route path='/insert' element={<Insert />} />
        {/* <Route path='/delete/:ManagerId' element={<Delete />} /> */}
        //route for the update page
        <Route path='/update/:ManagerId' element={<Update />} />
        //route for the select page
        <Route path='/select' element={<Select />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
