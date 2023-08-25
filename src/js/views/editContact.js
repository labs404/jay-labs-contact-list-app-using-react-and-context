import React, { useContext, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const EditContact = (props) => {
    const location = useLocation();
    const { fullname, emailaddress, phonenumber, mailingaddress, id, agendaslug} = location.state;

    const { store, actions } = useContext(Context);
    const [editFullName, setEditFullName] = useState(fullname);
    const [editEmailAddress, setEditEmailAddress] = useState(emailaddress);
    const [editPhoneNumber, setEditPhoneNumber] = useState(phonenumber);
    const [editMailingAddress, setEditMailingAddress] = useState(mailingaddress);

    return (
        <>
            <div className="addContactContainer">
                <div className="row">
                    <div className="col-2">&nbsp;</div>
                    <div className="col-8 text-center mb-4">
                        <h1>Enter New Contact Details Below</h1>
                    </div>
                    <div className="col-2">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-3">&nbsp;</div>
                    <div className="col-6 border border-dark border-3 px-5 pt-3 pb-4 text-start">
                        <h2>Full Name</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="name"
                            value={editFullName}
                            onChange={(e) => setEditFullName(e.target.value)}
                            placeholder="Enter full name" />
                        <h2>Email Address</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="email"
                            value={editEmailAddress}
                            onChange={(e) => setEditEmailAddress(e.target.value)}
                            placeholder="Enter email" />
                        <h2>Phone Number</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="phone"
                            value={editPhoneNumber}
                            onChange={(e) => setEditPhoneNumber(e.target.value)}
                            placeholder="Enter phone" />
                        <h2>Mailing Address</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="address"
                            value={editMailingAddress}
                            onChange={(e) => setEditMailingAddress(e.target.value)}
                            placeholder="Enter address" />
                    </div>
                    <div className="col-3">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-3">&nbsp;</div>
                    <div className="col-6 text-center mt-4">
                        <Link to="/">
                            <button className="btn btn-danger btn-lg m-1" id="saveButton" onClick={() => actions.editContact(editFullName, editEmailAddress, editPhoneNumber, editMailingAddress, id)}>Save</button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-primary btn-lg m-1">Go to back to Contacts</button>
                        </Link>
                    </div>
                    <div className="col-3">&nbsp;</div>
                </div>
            </div>
            {/* <div className="addContactContainer">
                <h1>Edit Contact</h1>
                <div className="contact-form">
                    <label>
                        Full Name:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="name"
                            value={editFullName}
                            onChange={(e) => setEditFullName(e.target.value)}
                            placeholder="Enter full name"></input>
                    </label>

                    <label>
                        Email:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="email"
                            value={editEmailAddress}
                            onChange={(e) => setEditEmailAddress(e.target.value)}
                            placeholder="Enter email"></input>
                    </label>

                    <label>
                        Phone:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="phone"
                            value={editPhoneNumber}
                            onChange={(e) => setEditPhoneNumber(e.target.value)}
                            placeholder="Enter phone"></input>
                    </label>

                    <label>
                        Address:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="address"
                            value={editMailingAddress}
                            onChange={(e) => setEditMailingAddress(e.target.value)}
                            placeholder="Enter address"></input>
                    </label>
                    
                </div>
                <Link to="/">
                    <button className="btn btn-danger btn-lg m-1" id="saveButton" onClick={() => actions.editContact(editFullName, editEmailAddress, editPhoneNumber, editMailingAddress, id)}>Save</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-primary btn-lg m-1">Go to back to Contacts</button>
                </Link>
            </div> */}
        </>
    )
};

export default EditContact;


{/* <div className="addContactContainer">
    <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-8 text-center mb-4">
            <h1>Enter New Contact Details Below</h1>
        </div>
        <div className="col-2">&nbsp;</div>
    </div>
    <div className="row">
        <div className="col-3">&nbsp;</div>
        <div className="col-6 border border-dark border-3 px-5 pt-3 pb-4 text-start">
            <h2>Full Name</h2>
            <input
                type="text"
                className="inputField"
                name="name"
                value={editFullName}
                onChange={(e) => setEditFullName(e.target.value)}
                placeholder="Enter full name" />
            <h2>Email Address</h2>
            <input
                type="text"
                className="inputField"
                name="email"
                value={editEmailAddress}
                onChange={(e) => setEditEmailAddress(e.target.value)}
                placeholder="Enter email" />
            <h2>Phone Number</h2>
            <input
                type="text"
                className="inputField"
                name="phone"
                value={editPhoneNumber}
                onChange={(e) => setEditPhoneNumber(e.target.value)}
                placeholder="Enter phone" />
            <h2>Mailing Address</h2>
            <input
                type="text"
                className="inputField"
                name="address"
                value={editMailingAddress}
                onChange={(e) => setEditMailingAddress(e.target.value)}
                placeholder="Enter address" />
        </div>
        <div className="col-3">&nbsp;</div>
    </div>
    <div className="row">
        <div className="col-3">&nbsp;</div>
        <div className="col-6 text-center mt-4">
            <Link to="/">
                <button className="btn btn-danger btn-lg m-1" id="saveButton" onClick={() => actions.editContact(editFullName, editEmailAddress, editPhoneNumber, editMailingAddress, id)}>Save</button>
            </Link>
            <Link to="/">
                <button className="btn btn-primary btn-lg m-1">Go to back to Contacts</button>
            </Link>
        </div>
        <div className="col-3">&nbsp;</div>
    </div>
</div> */}