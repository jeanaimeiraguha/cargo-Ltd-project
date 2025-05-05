
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
     const[username, setUsername] = useState('')
     const[Password, setPassword] = useState('')
     const navigate = useNavigate() //
     const handleSubmit=(event)=>{
event.preventDefault();
if(!username || !Password){
     alert('Please fill in all fields')
     return;
}
axios.post('http://localhost:3000/insert', {username, Password})
.then((res)=>{
     alert('Data inserted successfully')
     navigate('/select')
})   
.catch((err)=>{
     alert('Error inserting data');
}) 
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={e=>setUsername(e.target.value)} /> <br />
          <input type="password" value={Password} onChange={e=>setPassword(e.target.value)} /> <br />
          <button type='submit'>Add New Manager</button>
      </form>
    </div>
  )
}

export default Insert
