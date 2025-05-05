import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Select = () => {
  const [manager, setManager] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:3000/select')
      .then((res) => {
        setManager(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (ManagerId) => {  
    axios.delete(`http://localhost:3000/delete/${ManagerId}`)
      .then((res) => {
        alert("User deleted successfully");
        navigate('/select'); // 
        // Optionally, remove the deleted manager from the state to re-render
        // setManager(manager.filter((data) => data.ManagerId !== ManagerId));
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
            <th>Manager ID</th>
            <th>Username</th>
            <th>Password</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {manager.map((data) => (
            <tr key={data.ManagerId}>
              <td>{data.ManagerId}</td>
              <td>{data.username}</td>
              <td>{data.Password}</td>

              <td><button onClick={() => handleDelete(data.ManagerId)}>Delete</button></td>
              <td><Link to={`/update/${data.ManagerId}`}>Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select;
