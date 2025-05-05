import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const Updatefun = () => {
     const Navigate = useNavigate();
  const { Funitureid } = useParams();
  const [furniturename, setFurniturename] = useState('');
  const [furnitureowner, setFurnitureowner] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/selectfun/${Funitureid}`)
      .then((res) => {
        console.log("Fetched data:", res.data);
        const funiture = res.data[0]; 
      
          setFurniturename(funiture.furniturename);
          setFurnitureowner(funiture.furnitureowner);
        
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        alert("Data failed to be fetched");
      });
  }, [Funitureid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/updatefn/${Funitureid}`, { furniturename, furnitureowner })
      .then((res) => {
        alert("Record updated successfully");
        Navigate('/sf'); 
      })
      .catch((err) => {
        console.error("Update error:", err);
        alert("Record failed to be updated");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Furniture Name:</label>
        <input type="text" value={furniturename} onChange={(e) => setFurniturename(e.target.value)} /> <br />
        
        <label>Furniture Owner:</label>
        <input type="text" value={furnitureowner} onChange={(e) => setFurnitureowner(e.target.value)} /> <br />
        
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Updatefun;
