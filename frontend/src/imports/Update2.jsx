import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

const Update2 = () => {
    //  const navigate = useNavigate(); 
//     const [Funitureid, setFunitureid] = useState("");
    const [Importdate, setImportdate] = useState(""); 
    const [quantity, setQuantity] = useState(""); 
    const { Funitureid } = useParams(); 

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/update/${Funitureid}`, { username, Password }) // use capital P
            .then((res) => {
                alert("Record updated successfully");
                // navigate('/select2'); 
            })
            .catch((err) => {
                alert("Update failed");
                console.error("Update error:", err);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !Password) {
            alert("Please fill in all fields");
            return;
        }
        handleUpdate();
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/selectimp/${Funitureid}`)
            .then((res) => {
                
                setFuniture(res.data.Funitureid);
                setImportdate(res.data.importdate);
                setQuantity(res.data.quantity);
            })
            .catch((err) => {
                alert("Failed to fetch data");
                console.error("Fetch error:", err);
            });
    }, [ManagerId]);

    return (
        <div>
            <h2>Updated Imports</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Imported date
                    <input
                        type="text"
                        value={importdate}
                        onChange={e => setImportdate(e.target.value)}
                    />
                </label>
                <br />
                <label>
                  Quantity
                    <input
                        type="password"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update Imports</button>
            </form>
        </div>
    );
};

export default Update2;
