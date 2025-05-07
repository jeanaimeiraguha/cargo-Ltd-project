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
        navigate('/select'); // Redirect to the updated list
        // Optionally, remove the deleted manager from the state to re-render
        // setManager(manager.filter((data) => data.ManagerId !== ManagerId));
      })
      .catch((err) => {
        alert("Delete Failed");
      });
  };

  return (
    <div className="container my-4">
      <Link to="/insertimp">Add Manager</Link>
      <h3 className="mb-4">Manager List</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
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
              <td>
                <button 
                  onClick={() => handleDelete(data.ManagerId)} 
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link 
                  to={`/update/${data.ManagerId}`} 
                  className="btn btn-warning btn-sm"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select;
