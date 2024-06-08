import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
    var user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        if (user) {
            axios.post(
                "https://medicalstore.mashupstack.com/api/logout",
                {},
                {
                    headers: { Authorization: "Bearer " + user.token },
                }
            ).then(() => {
                dispatch(removeUser());
                navigate("/login");
            }).catch((error) => {
                // Handle error if logout request fails
                console.error("Logout failed:", error);
            });
        }
    }

    function goToHome() {
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <div className="navbar-brand d-flex align-items-center">
                    <img 
                        src="https://i.pinimg.com/736x/f6/09/e9/f609e93d5ef415153304ab703b29b607.jpg" 
                        alt="Logo" 
                        style={{ width: '40px', height: '40px', marginRight: '10px', cursor: 'pointer' }} 
                        onClick={goToHome} 
                    />
                    <h4
                        className="mb-0 mr-3"
                        onClick={goToHome}
                        style={{ cursor: 'pointer' }}
                    >
                        <b>MEDICAL STORE</b>
                    </h4>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink
                                to={"/"}
                                className={"nav-link " + ((status) => (status.isActive ? "active" : ""))}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={"/medicines"}
                                className={"nav-link " + ((status) => (status.isActive ? "active" : ""))}
                            >
                                MEDICINE
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={"/register"}
                                className={"nav-link " + ((status) => (status.isActive ? "active" : ""))}
                            >
                                REGISTER
                            </NavLink>
                        </li>
                        {!user ? (
                            <li className="nav-item">
                                <NavLink
                                    to={"/login"}
                                    className={"nav-link " + ((status) => (status.isActive ? "active" : ""))}
                                >
                                    LOGIN
                                </NavLink>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    onClick={logout}
                                >
                                    LOGOUT
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
