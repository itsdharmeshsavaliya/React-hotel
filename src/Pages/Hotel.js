import React from "react";
import TextData from "../Components/TextData";
import { Destinations } from "../Data";
import { Link } from "react-router-dom";


const Hotel = () => {
    return (
        <>
            <div className="Destinatoion text-center mt-5">
                <TextData text='Choose From' heading='Trending Destinations...' />
            </div>


            <div className="container image-loop">
                <div className="row">
                    {
                        Destinations.map((Data, id) => {
                            return (
                                <div className="col-3 text-center mt-3" key={id}>
                                    <Link to={Data.link}>
                                        <img className="cursor-pointer" src={Data.Images} alt="" width={'100%'} style={{ 'borderRadius': '2rem' }} />
                                    </Link>
                                    <h6 className=" mt-2">{Data.text}</h6>
                                    <h5 className="mt-2">{Data.heading}</h5>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Hotel;
