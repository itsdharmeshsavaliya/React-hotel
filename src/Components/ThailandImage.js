import React from "react";

const ThailandImage = ({ image, text }) => {
    return (
        <>
            <img src={image} alt="" width={'100%'} />
            <h1 className="text-center mt-4">{text}</h1>
        </>
    );
};

export default ThailandImage;
