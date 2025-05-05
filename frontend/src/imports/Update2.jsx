import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const Update = () => {
     const navigate = useNavigate(); 
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState(""); 
    const { ManagerId } = useParams(); 

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/update/${ManagerId}`, { username, Password }) // use capital P
            .then((res) => {
                alert("Record updated successfully");
                navigate('/select'); 
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
        axios.get(`http://localhost:3000/select/${ManagerId}`)
            .then((res) => {
                
                setUsername(res.data.username);
                setPassword(res.data.Password);
            })
            .catch((err) => {
                alert("Failed to fetch data");
                console.error("Fetch error:", err);
            });
    }, [ManagerId]);

    return (
        <div>
            <h2>Update Manager</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update Manager</button>
            </form>
        </div>
    );
};

export default Update;
