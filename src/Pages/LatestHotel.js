import React, { useState } from "react";
import TextData from "../Components/TextData";
import { NewHotelRooms } from '../Data';
// import { Select } from '../Action/index';
// import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const LatestHotel = () => {

    // const dispatch = useDispatch();
    // const MainHotel = useSelector((state) => state.Filter.list)

    const [FilterHotelData, setFilterHotelData] = useState(NewHotelRooms);
    const NewHotel = (change) => {
        const UpdatedHotel = NewHotelRooms.filter((NewHotelRooms) => {
            return NewHotelRooms.change === change;
        })
        setFilterHotelData(UpdatedHotel);
    }


    return (
        <>
            <div className="hotel-center text-center mt-4">
                <TextData heading='Select Hotel - 3 Nights Maldives' />
            </div>

            {/* FILTER BUTTON */}
            <div className="container drop-menu d-flex justify-content-between">

                <Link to='/FreeEasy'>
                    <button type="button" className="btn btn-danger btn-sm rounded-0">
                        <BiArrowBack /> Back To Main Hotel
                    </button>
                </Link>

                <div className="dropdown">
                    <button
                        className="btn btn-danger btn-sm  rounded-0 dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Short: Recommended
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                            <button className="dropdown-item" type="button"
                                onClick={() => NewHotel('Preferred')}
                            >
                                Preferred
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button"
                                onClick={() => NewHotel('NonPreferred')}
                            >
                                Non-Preferred
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


            {/* HOTELS */}
            <div className="container latest-hotel mt-4">
                <div className="row justify-content-center">
                    {
                        FilterHotelData && FilterHotelData.map((Data, id) => {
                            return (
                                <div className="card mb-3 mt-3 border-0" style={{ maxWidth: 540 }} key={id}>
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">{Data.change}</span>
                                            <img src={Data.Images} className='img-fluid' alt="..." />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{Data.hotel}</h5>
                                                <p className="card-text text-sm">{Data.text}</p>
                                                <p className="card-text text-sm">{Data.rate}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">{Data.price}</small>
                                                </p>
                                            </div>
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

export default LatestHotel;
