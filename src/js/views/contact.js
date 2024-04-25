import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/contact.css";


const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
        {/* {console.log(store.contacts)} */}

            <div className="container-container">
            {store.contacts.map((contact, index) => {
                // return (
                //     <>
                //         {console.log("contact \n",contact)}
                //         {console.log("fullname \n",contact.fullname)}
                //         {console.log("emailaddress \n",contact.email)}
                //         {console.log("mailingaddress \n",contact.address)}
                //         {console.log("phonenumber \n",contact.phone)}
                //         {console.log("id \n", contact.id)}

                //         <p>full name: {contact.fullname}</p>
                //         <p>email: {contact.email}</p>
                //         <p>street address: {contact.address}</p>
                //         <p>phone number: {contact.phone}</p>
                //         <p>id: {contact.id}</p>
                //     </>
                // )

                return (

                    <div key={contact.id + index} className="contact-container m-2">
                        <div className="contact-image-container">
                            <Link 
                                to="/singlecontact" 
                                className="covertLinks"
                                state={{
                                    fullname: contact.fullname,
                                    emailaddress: contact.email,
                                    mailingaddress: contact.address,
                                    phonenumber: contact.phone,
                                    id: contact.id
                                }}
                            >
                                <img className="contact-image-photo" src={`https://xsgames.co/randomusers/assets/avatars/male/`+(String(contact.id).slice(0,2))+`.jpg`} />
                            </Link>
                        </div>
                        <div className="contact-details">
                        <Link 
                                to="/singlecontact" 
                                className="covertLinks"
                                state={{
                                    fullname: contact.fullname,
                                    emailaddress: contact.email,
                                    mailingaddress: contact.address,
                                    phonenumber: contact.phone,
                                    id: contact.id
                                }}
                            >
                                <div className="contact-details-name">
                                    {contact.fullname}
                                </div>
                                <div className="contact-details-address">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-details-svg bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    {contact.address}
                                </div>
                                <div className="contact-details-phone">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-details-svg bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    {contact.phone}
                                </div>
                                <div className="contact-details-email">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-details-svg bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                    {contact.email}
                                </div>
                            </Link>
                        </div>

                        <div className="contact-modify-container">
                            <div className="contact-modify-edit">
                                <Link to="/editcontact" 
                                state={{
                                    fullname: contact.fullname,
                                    emailaddress: contact.email,
                                    mailingaddress: contact.address,
                                    phonenumber: contact.phone,
                                    id: contact.id}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-modify-svg bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="contact-modify-delete">
                                <button className="modify-contact-button" onClick={() => actions.deleteContact(contact.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-modify-svg bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                )


            })}
            </div>
        </>
    );
};

export default Contact;