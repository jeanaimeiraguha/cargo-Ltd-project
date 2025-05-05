import React from 'react'
import Select from './Select'
import Insert from './Insert'
import Update from './Update'
import Sf from './Sf'
import Insf from './Insf'
import Updatefun from './Updatefun'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Select />} />
        <Route path='/sf' element={<Sf />} />
        <Route path='/insf' element={<Insf />} />
        <Route path='/updatefun/:Funitureid' element={<Updatefun />} />
        
        <Route path='/insert' element={<Insert />} />
        {/* <Route path='/delete/:ManagerId' element={<Delete />} /> */}
        <Route path='/update/:ManagerId' element={<Update />} />
        <Route path='/select' element={<Select />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
