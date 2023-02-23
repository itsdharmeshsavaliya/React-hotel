import React from "react";

const TextData = ({ text, heading, information, triptext, letter, sent, possible, small }) => {
    return (
        <>
            <h6>{text}</h6>
            <h1><b>{heading}</b></h1>
            <h2>{information}</h2>
            <p>{small}</p>

            {/* HELP COMPONENTS */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-10">
                        <h3><b>{triptext}</b></h3>
                        <h6>{letter}</h6>
                    </div>
                    <div className="col-2 d-flex justify-content-end"></div>
                </div>
            </div>

            <div className="container mail-sent">
                <h3>{sent}</h3>
                <h5>{possible}</h5>
            </div>
        </>
    );
};

export default TextData;
