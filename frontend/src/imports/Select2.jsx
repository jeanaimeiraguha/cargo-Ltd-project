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
        navigate('/selectimp'); // Redirect to the updated list
      })
      .catch((err) => {
        alert("Delete Failed");
      });
  };

  return (
    <div className="container my-4">
      <Link to="/insert2">Add New Import</Link>
      <h3 className="mb-4">Imported Furniture List</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
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

export default Select2;
