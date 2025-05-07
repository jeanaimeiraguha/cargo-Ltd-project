import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Insert3 = () => {
  const [Funitureid, setFunitureid] = useState('');
  const [exportdate, setExportdate] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!Funitureid || !exportdate || !quantity) {
      alert("Please fill in all fields.");
      return;
    }


    // Make the POST request
    axios.post('http://localhost:3000/insertexp', { Funitureid, exportdate, quantity })
      .then((res) => {
        alert("Exported record added successfully");
        navigate('/select3'); 
        
       
      })
      .catch((err) => {
        alert("Insert failed");
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Exports</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="Furniture ID" 
          value={Funitureid} 
          onChange={(e) => setFunitureid(e.target.value)} 
        /><br />
        <input 
          type="date" 
          placeholder="Exported Date" 
          value={exportdate} 
          onChange={(e) => setExportdate(e.target.value)} 
        /><br />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        /><br />
        <button type="submit">Add Exported</button>
      </form>
    </div>
  );
};

export default Insert3;
