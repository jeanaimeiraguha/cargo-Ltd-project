import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Select2 = () => {
  const [imports, setImports] = useState([]);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:3000/selectimp')
      .then((res) => {
        setImports(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (Funitureid) => {  
    axios.delete(`http://localhost:3000/deleteimp/${Funitureid}`)
      .then((res) => {
        alert("User deleted successfully");
        navigate('/selectimp'); // 
       
     //    setManager(mana.filter((data) => data.ManagerId !== ManagerId));
      })
      .catch((err) => {
        alert("Delete Failed");
      });
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Furniture ID</th>
            <th>Import Date</th>
            <th>Quantity</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>  
        <tbody>
          {imports.map((data) => (
            <tr key={data.Funitureid}>
              <td>{data.Funitureid}</td>
              <td>{data.importdate}</td>
              <td>{data.quantity}</td>

              <td><button onClick={() => handleDelete(data.Funitureid)}>Delete</button></td>
              <td><Link to={`/update2/${data.Funitureid}`}>Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select2;
