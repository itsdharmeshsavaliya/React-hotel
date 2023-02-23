import React from "react";
import TextData from "../Components/TextData";
import ThailandImage from "../Components/ThailandImage";
import { ThailandHotel } from "../Data";
import { Link } from "react-router-dom";

const ThaiLand = () => {
    return (
        <>
            <ThailandImage
                image='image/34.jpg'
                text='Thailand'
            />

            <div className="container">
                <TextData text='Thailand on Budget' />
            </div>

            {/* THAILAND HOTELS */}
            <div className="container thailand-hotel">
                <div className="row">
                    {
                        ThailandHotel && ThailandHotel.map((Data, id) => {
                            return (
                                <div className="col-md-3" key={id}>
                                    <div className="card border-0 h-100" >
                                        <Link to={Data.link}>
                                            <img src={Data.Images} className="card-img-top" alt="..." height={200} style={{ 'borderRadius': '2rem' }} />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title mt-2">{Data.hotel}</h5>
                                            <p className="card-text">{Data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ThaiLand;
