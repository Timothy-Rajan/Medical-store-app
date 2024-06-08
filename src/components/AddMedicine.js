import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function AddMedicine() {
    var user = useSelector(store => store.auth.user);
    
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');

    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine', {
            name: name,
            company: company,
            expiry_date: date
        }, {
            headers: { 'Authorization': "Bearer " + user.token }
        }).then(response => {
            navigate('/medicines')
        })
    }

    return (
        <div style={{ background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
                <div className="container" style={{ maxWidth: '600px', width: '100%', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                    <h1 className="text-center ">Add Medicine</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => { setName(event.target.value) }}
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label>Company:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={company}
                            onChange={(event) => { setCompany(event.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date of Expiry:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(event) => { setDate(event.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkAuth(AddMedicine);
