import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItem(props) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const user = useSelector(store => store.auth.user);

    const toggleModal = (content = "") => {
        setModalContent(content);
        setShowModal(!showModal);
    };

    const deleteMed = () => {
        toggleModal("Are you sure you want to delete this post?");
    };

    const confirmDelete = () => {
        axios.delete(`https://medicalstore.mashupstack.com/api/medicine/${props.medicine.id}`, 
        {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        .then(response => {
            props.refresh();
            toggleModal(response.data.message);
        })
        .catch((error) => {
            console.error("Error deleting post:", error);
            toggleModal("Error deleting post.");
        });
    };

    return (
        <>
            <td>{props.medicine.name}</td>
            <td>{props.medicine.company}</td>
            <td>{props.medicine.expiry_date}</td>
            <td>
                <Link to={`/medicines/${props.medicine.id}/edit`} className="btn btn-outline-info">
                    <FontAwesomeIcon icon={faEdit} /> 
                </Link>
            </td>
            <td>
                <Link to={`/medicines/${props.medicine.id}/view`} className="btn btn-outline-info">
                    <FontAwesomeIcon icon={faEye} /> 
                </Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteMed}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
            {showModal && (
                <div className="modal" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="close" onClick={() => toggleModal()}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {modalContent}
                            </div>
                            <div className="modal-footer">
                                {modalContent === "Are you sure you want to delete this post?" ? (
                                    <>
                                        <button type="button" className="btn btn-secondary" onClick={() => toggleModal()}>Cancel</button>
                                        <button type="button" className="btn btn-danger" onClick={confirmDelete}>Confirm</button>
                                    </>
                                ) : (
                                    <button type="button" className="btn btn-primary" onClick={() => toggleModal()}>OK</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListItem;
