import React from "react";

const MaldivesImage = ({ image, text, Contactimage, ContactText }) => {
    return (
        <>
            <img src={image} alt="" width={'100%'} />
            <h1 className="text-center mt-4">{text}</h1>

            {/* Contact Section */}
            <div className="container contact-page mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="Main mt-4">
                            <h2 style={{ 'fontSize': '60px' }}>{ContactText}</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={Contactimage} alt="" width={'100%'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MaldivesImage;
