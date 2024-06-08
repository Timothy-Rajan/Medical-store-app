import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function ListMedicine() {
    const user = useSelector(store => store.auth.user);
    const [meds, setMeds] = useState([]);
    const [filteredMeds, setFilteredMeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === "") {
            setFilteredMeds(meds);
        } else {
            const filteredItems = meds.filter(
                item =>
                    item.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase()) ||
                    item.company.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
            );
            setFilteredMeds(filteredItems);
        }
    };

    const fetchMeds = () => {
        if (user) {
            axios.get("https://medicalstore.mashupstack.com/api/medicine", {
                headers: { Authorization: "Bearer " + user.token }
            }).then(response => {
                setMeds(response.data);
                setFilteredMeds(response.data);
            }).catch(error => {
                console.error("An error occurred:", error.message);
            });
        } else {
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchMeds();
    }, []);

    return (
        <div style={{ background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)', minHeight: '100vh' }}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center my-4">MEDICINES</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <Link to="/medicines/add" className="btn btn-block mb-5" style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                            Add New Medicine
                        </Link>
                        <form onSubmit={handleSearch}>
                            <label>Search Medicines:&nbsp;</label>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchInputChange}
                            />
                            <button className="btn btn-small btn-info mb-1" type="submit">
                                Search
                            </button>
                        </form>
                        <div className="table-wrapper" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <table className="table mt-5" style={{ backgroundColor: 'white' }}>
                                <thead>
                                    <tr>
                                        <th>Medicine</th>
                                        <th>Company</th>
                                        <th>Expiry Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMeds.length === 0 ? (
                                        <tr>
                                            <td colSpan="3">No matching medicines found.</td>
                                        </tr>
                                    ) : (
                                        filteredMeds.map(med => (
                                            <tr key={med.id}>
                                                <ListItem medicine={med} refresh={fetchMeds} />
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(ListMedicine);
