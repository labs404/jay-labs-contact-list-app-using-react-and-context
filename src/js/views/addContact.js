import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = ({ saveContact }) => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [mailingAddress, setMailingAddress] = useState("");

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
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter full name" />                                    

                        <h2>Email Address</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder="Enter email" />

                        <h2>Phone Number</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter phone" />

                        <h2>Mailing Address</h2>
                        <input
                            type="text"
                            className="inputField w-100"
                            name="address"
                            value={mailingAddress}
                            onChange={(e) => setMailingAddress(e.target.value)}
                            placeholder="Enter address" />
                    </div>
                    <div className="col-3">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-3">&nbsp;</div>
                    <div className="col-6 text-center mt-4">
                        <Link to="/">
                            <button className="btn btn-danger btn-lg m-1" id="saveButton" onClick={() => actions.saveContact(fullName, emailAddress, phoneNumber, mailingAddress)}>Save Contact</button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-primary btn-lg m-1">Back to Contact List</button>
                        </Link>
                    </div>
                    <div className="col-3">&nbsp;</div>
                </div>
            </div>
        </>
    )
};

export default AddContact;