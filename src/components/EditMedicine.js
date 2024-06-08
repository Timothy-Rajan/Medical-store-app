import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function EditMedicine() {
    var user = useSelector(store => store.auth.user);

    const { medId } = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            axios.get('https://medicalstore.mashupstack.com/api/medicine/' + medId, {
                headers: { 'Authorization': "Bearer " + user.token }
            }).then(response => {
                setName(response.data.name);
                setCompany(response.data.company);
                setDate(response.data.expiry_date);
            });
        }
    }, [medId]);

    function updatemed() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine/' + medId, {
            name: name,
            company: company,
            expiry_date: date
        },
        {
            headers: { 'Authorization': "Bearer " + user.token }
        }).then(response => {
            alert(response.data.message);
            navigate('/medicines');
        });
    }

    return (
        <div style={{ background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
                <div className="container" style={{ maxWidth: '600px', width: '100%', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                    <h1 className="text-center">Edit Med Details</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={company}
                            onChange={(event) => setCompany(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Expiry:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updatemed}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(EditMedicine);
