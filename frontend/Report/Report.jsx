import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/furniture-exports-imports')
      .then((res) => {
        setReport(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='text-center'>List of Activities along Cargo Company</h2>
      <table border={2} className='table table-bordered table-hover bg-dark mb-5 py-4'>
        <thead className='table-dark'>
          <tr>
            <th>Furniture Id</th>
            <th>Furniture Name</th>
            <th>Furniture Owner</th>
            <th>Export Date</th>
            <th>Export Quantity</th>
            <th>Import Date</th>
            <th>Import Quantity</th>
          </tr>
        </thead>
        <tbody>
          {report.map((data) => (
            <tr key={data.Funitureid}>
              <td>{data.Funitureid}</td>
              <td>{data.furniturename}</td>
              <td>{data.furnitureowner}</td>
              <td>{data.exportdate}</td>
              <td>{data.export_quantity}</td>
              <td>{data.importdate}</td>
              <td>{data.import_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
