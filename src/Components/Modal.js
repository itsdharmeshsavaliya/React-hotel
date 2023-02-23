import React, { useState } from "react";

const Modal = () => {

    const [OpenModal, setOpenModal] = useState(false);

    const Close = () => setOpenModal(false);
    const Open = () => setOpenModal(true);



    return (
        <>
            {OpenModal && <Modal />}
            <div className="btn btn-danger" onClick={Close}>Close</div>
            <button className="btn btn-dark" onClick={Open}>Open</button>
            <div>Modal</div>
            <p>Successfully LogedIn</p>
        </>
    );
};

export default Modal;
