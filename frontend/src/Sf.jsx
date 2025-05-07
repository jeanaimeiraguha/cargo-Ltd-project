import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Sf = () => {
  const [funi, setFuni] = useState([]);
  const { funitureid } = useParams(); 

  useEffect(() => {
    axios.get("http://localhost:3000/selectfun")
      .then((res) => {
        setFuni(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch data");
      });
  }, []); 

  const handleDelete = (Funitureid) => { 
    console.log("Deleting furniture with ID:", Funitureid); // Debugging the ID
    axios.delete(`http://localhost:3000/furniture/${Funitureid}`)
      .then((res) => {
        alert("Furniture deleted successfully");
        // Update the state after deletion
        setFuni(funi.filter((item) => item.Funitureid !== Funitureid)); // Filter out the deleted item
      })
      .catch((err) => {
        console.log("Failed to delete furniture");
      });
  };

  return (
    <div className="container my-4">
      <Link to="/insf" className="btn btn-primary mb-3">Add New Furniture</Link>
      {funi.length === 0 ? (
        <p>No furniture found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Furniture Id</th>
              <th>Furniture Name</th>
              <th>Furniture Owner Name</th>
              <th colSpan={2}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {funi.map((data) => (
              <tr key={data.Funitureid}> 
                <td>{data.Funitureid}</td> 
                <td>{data.furniturename}</td>
                <td>{data.furnitureowner}</td>
                <td>
                  <Link to={`/updatefun/${data.Funitureid}`} className="btn btn-warning btn-sm me-2">
                    Update
                  </Link>
                  <button 
                    onClick={() => handleDelete(data.Funitureid)} 
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Sf;
