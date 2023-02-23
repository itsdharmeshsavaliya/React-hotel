import React, { useState } from "react";
import MaldivesImage from "../Components/MaldivesImage";
import TextData from "../Components/TextData";
// import { MdVerified } from "react-icons/md";
import GoogleMaps from '../Components/GoogleMaps';
import Modal from "../Components/Modal";


const Contact = () => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [TextBox, setTextBox] = useState('');
    const [UserInfo, setUserInfo] = useState([]);
    const UserData = (e) => {
        e.preventDefault();
        if (Name && Email && TextBox) {
            const InputForm = { Name: Name, Email: Email, TextBox: TextBox };
            setUserInfo([InputForm]);
            setName('');
            setEmail('');
            setTextBox('');
        }
        else {
            alert('Please Fill The All The Data');
        }
    }



    return (
        <>
            <MaldivesImage
                ContactText='PLAN YOUR HOLIDAYS WITH OUR ASSISTANCE !!'
                Contactimage='image/33.jpg'
            />

            {/* CONTACT HEADING */}
            <div className="Destinatoion text-center mt-5">
                <TextData text='Simply fill in the form providing your contact details and some information about your query and well do our best to get back to you as soon as we can.' heading='Contact Us' />
            </div>


            {/* CONTACT FOROM */}
            <div className="container fill-form">
                <div className="row">
                    <div className="col-md-6">
                        <GoogleMaps />
                    </div>


                    <div className="col-md-6">
                        <form onSubmit={UserData}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    value={Name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={Email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    value={TextBox}
                                    onChange={(event) => setTextBox(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-danger" onClick={UserData}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            {
                UserInfo && UserInfo.map((Data, id) => {
                    return (
                        <>
                            {
                                UserInfo === `${Name && Email && TextBox}` ? null
                                    :
                                    // <div className="modal-dialog" role="document">
                                    //     <div className="modal-content rounded-6 shadow" aria-hidden="true">
                                    //         <div className="modal-header border-bottom-0">
                                    //             <h5 className="modal-title"> <MdVerified /> Success</h5>
                                    //             <button
                                    //                 type="button"
                                    //                 className="btn-close"
                                    //                 data-bs-dismiss="modal"
                                    //                 aria-label="Close"
                                    //             />
                                    //         </div>
                                    //         <div className="modal-body py-0">
                                    //             <p>
                                    //                 Thanks for reaching out. Someone from our Team will be in touch soon.
                                    //             </p>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <Modal />
                            }

                        </>
                    )
                })
            }
        </>
    );
};

export default Contact;
