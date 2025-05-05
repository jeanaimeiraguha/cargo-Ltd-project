import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

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
 
    axios.delete(`http://localhost:3000/df/${Funitureid}`)
      .then((res) => {
        alert("Furniture deleted successfully");
        setFuni(funi.filter((item) => item.Funitureid !== Funitureid)); // Use 'Funitureid' to filter
      })
      .catch((err) => {
        console.log("Failed to delete furniture");
      });
  };

  return (
    <div>
      <table border={1}>
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
                <Link to={`/updatefun/${data.Funitureid}`}>Update</Link>
                <button onClick={() => handleDelete(data.Funitureid)}>Delete</button> {/* Pass 'Funitureid' */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sf;
