import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Select3 = () => {
  const [exports, setExports] = useState([]);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:3000/selectexpo')
      .then((res) => {
        setExports(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (Funitureid) => {  
    axios.delete(`http://localhost:3000/dexpo/${Funitureid}`)
      .then((res) => {
        alert("User deleted successfully");
        navigate('/select3'); // Refresh the page after deletion
      })
      .catch((err) => {
        alert("Delete Failed");
      });
  };

  return (
    <div className="container my-4">
      <Link to="/insert3">Add New Export</Link>
      <h3 className="mb-4">Exported Furniture List</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Furniture ID</th>
            <th>Export Date</th>
            <th>Quantity</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {exports.map((data) => (
            <tr key={data.Funitureid}>
              <td>{data.Funitureid}</td>
              <td>{data.exportdate}</td>
              <td>{data.quantity}</td>
              <td>
                <button 
                  onClick={() => handleDelete(data.Funitureid)} 
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link 
                  to={`/update2/${data.Funitureid}`} 
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

export default Select3;
