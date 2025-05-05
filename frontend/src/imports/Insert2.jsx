
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert2 = () => {
     const[Funitureid, setFunitureid] = useState('')
     const[importdate, setImportdate] = useState('')
     const[quantity, setQuantity] = useState('')
     const navigate = useNavigate() //
     const handleSubmit=(event)=>{
event.preventDefault();
if(!Funitureid || !quantity || !importdate){
     alert('Please fill in all fields')
     return;
}
axios.post('http://localhost:3000/insertimp', {Funitureid, importdate,quantity})
.then((res)=>{
     alert('Data inserted successfully')
     navigate('/select2')
})   
.catch((err)=>{
     alert('Error inserting data');
}) 
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
         Furniture ID <input type="text" value={Funitureid} onChange={e=>setFunitureid(e.target.value)} /> <br />
         Import Date <input type="date" value={importdate} onChange={e=>setImportdate(e.target.value)} /> <br />
        Quantity <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} /> <br />
          <button type='submit'>Add Imported goods</button>
      </form>
    </div>
  )
}

export default Insert2
