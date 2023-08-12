import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Contact = () => {
    const { store, actions } = useContext(Context);

    // // this bit of code already occurs ad appContext.js useEffect();
    // useEffect(() => {
    //     actions.fetchAllContacts();
    // }, []);

    return (
        <>
        <ul className="list-group">
            {store.contacts.map((contact, index) => {
                return (
                    <li key={contact.id}>
                        <div><b>Full Name:</b> {contact.full_name}</div>
                        <div><b>Email Address:</b> {contact.email}</div>
                        <div><b>Containing Address Book:</b> {contact.agenda_slug}</div>
                        <div><b>Street Address:</b> {contact.address}</div>
                        <div><b>Phone Number:</b> {contact.phone}</div>
                    </li>
                )
            })}
        </ul>
        <h1>Hello from Contact.js</h1>
        </>
    );
};

export default Contact;