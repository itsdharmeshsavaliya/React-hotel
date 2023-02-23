import React from "react";
import MaldivesImage from '../Components/MaldivesImage';
import TextData from "../Components/TextData";
import { MaldivesHotel, ExpensiveHotel } from "../Data";
import { Link } from "react-router-dom";


const Maldives = () => {
    return (
        <>
            <MaldivesImage
                image='image/5.jpg'
                text='Maldives'
            />

            {/* HOTELS */}
            <div className="container">
                <TextData text='Maldives on Budget' />
            </div>

            <div className="container hotel-info text-center">
                <div className="row">
                    {
                        MaldivesHotel.map((hotel, id) => {
                            return (
                                <>
                                    <div className="col-md-3">
                                        <div className="card border-0 h-100" key={id} >
                                            <Link to={hotel.link}>
                                                <img src={hotel.Images} className="card-img-top" alt="..." height={200} style={{ 'borderRadius': '2rem' }} />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title mt-2">{hotel.hotel}</h5>
                                                <p className="card-text">{hotel.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>

            {/* WATER VILLAS */}
            <div className="container stay-water mt-4">
                <TextData text='Stay with Water Villas' />
            </div>


            <div className="container Expensive-hotel">
                <div className="row">
                    {
                        ExpensiveHotel.map((Expensive, id) => {
                            return (
                                <>
                                    <div className="col-md-3">
                                        <div className="card border-0 h-100" key={id}>
                                            <Link to={Expensive.link}>
                                                <img src={Expensive.Images} className="card-img-top" alt="..." height={200} style={{ 'borderRadius': '2rem' }} />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title mt-2">{Expensive.hotel}</h5>
                                                <p className="card-text">{Expensive.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>


        </>
    );
};

export default Maldives;
