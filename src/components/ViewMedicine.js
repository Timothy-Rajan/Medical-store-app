import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ViewMedicine() {
    var user = useSelector(store => store.auth.user);
    var { medId } = useParams();
    var [med, setMed] = useState({ name: '', company: '', expiry_date: '' });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://medicalstore.mashupstack.com/api/medicine/' + medId, {
            headers: { 'Authorization': "Bearer " + user.token }
        }).then(response => {
            setMed(response.data);
        });
    }, [medId, user.token]);

    function handleEdit() {
        navigate(`/medicines/${medId}/edit`);
    }

    function handleDelete() {
        axios.delete(`https://medicalstore.mashupstack.com/api/medicine/${medId}`, {
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
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>{med.name}</h3>
                            <div>
                                <button className="btn btn-sm btn-primary mr-2" onClick={handleEdit}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p><strong>Company:</strong> {med.company}</p>
                            <p><strong>Expiry Date:</strong> {med.expiry_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewMedicine;
