import React from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../../styles/singlecontact.css";

const SingleContact = () => {
    const location = useLocation();
    const {fullname, emailaddress, phonenumber, mailingaddress, id, agendaslug} = location.state;

    return (
        <>
            <div className="container-fluid">
                <div className="row text-center">
                    <h1>INDIVIDUAL CONTACT CARD</h1>
                </div>
                <div className="row">
                    <div className="col-2">&nbsp;</div>
                    <div className="single-contact-container col-8 text-center p-4">
                        <p><img className="contact-image-photo-large" src={`https://xsgames.co/randomusers/assets/avatars/male/`+(String(id).slice(0,1))+`.jpg`} /></p>
                        <h1>{fullname}</h1>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="single-contact-details-svg bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                            {emailaddress}
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="single-contact-details-svg bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            {phonenumber}
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="single-contact-details-svg bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            {mailingaddress}
                        </h4>
                    </div>
                    <div className="col-2">&nbsp;</div>
                </div>
                <div className="row text-center">
                    <div className="col-12 mt-3">
                        <Link to="/editcontact" 
                        state={{
                            fullname: fullname,
                            emailaddress: emailaddress,
                            agendaslug: agendaslug,
                            mailingaddress: mailingaddress,
                            phonenumber: phonenumber,
                            id: id
                        }}
                        >
                            <button className="btn btn-danger btn-lg m-1">Edit this contact</button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-primary btn-lg m-1">Go to back to Contacts</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SingleContact;