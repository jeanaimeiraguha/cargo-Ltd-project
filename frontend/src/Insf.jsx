import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Insf = () => {
  const [furniturename, setFurniturename] = useState('');
  const [furnitureowner, setFunitureowner] = useState(''); // Kept the column name as is
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!furniturename || !furnitureowner) {
      alert('Please fill in all fields');
      return;
    }

    axios.post('http://localhost:3000/insertfun', { furniturename, furnitureowner })
      .then((res) => {
        alert('Data inserted successfully');
        navigate('/sf');
      })
      .catch((err) => {
        alert('Error inserting data');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Furniture Name   <input type="text" value={furniturename} onChange={e => setFurniturename(e.target.value)} /> <br />
        Furniture Owner   <input type="text" value={furnitureowner} onChange={e => setFunitureowner(e.target.value)} /> <br />
        <button type='submit'>Add Furniture Details</button>
      </form>
    </div>
  );
};

export default Insf;
