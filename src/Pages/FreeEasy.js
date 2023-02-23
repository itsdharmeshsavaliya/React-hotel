import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaldivesImage from "../Components/MaldivesImage";
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import { Glance } from "../Data";
import HotelPhotos from "../Components/HotelPhotos";
import TextData from "../Components/TextData";


const FreeEasy = () => {

    // OPTIONS...
    const [Options, setOption] = useState('');
    const options = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
    ];

    // OPTIONS...
    const [SecondOption, setSecondOption] = useState('')
    const Menu = [
        { value: '- Select -', text: '- Select -' },
        { value: 'Not sure if I am taking this trip', text: 'Not sure if I am taking this trip' },
        { value: 'Want to go, need to finalize destination', text: 'Want to go, need to finalize destination' },
        { value: 'Definitely going, destination is decided', text: 'Definitely going, destination is decided' },
    ]

    // TALK TO OUR EXPERT
    const [Leave, setLeave] = useState('');
    const [Email, setEmail] = useState('');
    const [Store, setStore] = useState([]);
    const Help = (e) => {
        e.preventDefault();
        if (Leave && Email) {
            const PopUp = { Leave: Leave, Email: Email };
            setStore([PopUp]);
            setLeave('');
            setEmail('');
        }
        else {
            alert('Please Fill Mendtory Data');
        }
    }


    // ADDTOCART OPTIONS...
    const [Cart, setCart] = useState('')
    const select = [
        { value: '1 night', text: '1 night' },
        { value: '2 night', text: '2 night' },
        { value: '3 night', text: '3 night' },
        { value: '4 night', text: '4 night' },
        { value: '5 night', text: '5 night' },
        { value: '6 night', text: '6 night' },
        { value: '7 night', text: '7 night' },
        { value: '8 night', text: '8 night' },
        { value: '9 night', text: '9 night' },
        { value: '10 night', text: '10 night' },
    ]


    // CART HOTEL INCREMENT
    const [TotalRooms, setTotalRooms] = useState(9438);   //HotelRoom Increment-Decrement
    const [Room, setRoom] = useState(1);  //HotelRoom Increment-Decrement
    const [Adult, setAdult] = useState(1);  //Adult Increment-Decrement



    return (
        <>
            <MaldivesImage
                image='image/14.jpg'
            />

            {/* INFORMATION ABOUT NAKAI */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <h3>Maldives Free & Easy</h3>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Need Help To Plan
                        </button>
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Talk to Our Experts
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={Help}>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">
                                                    Leaving From*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="recipient-name"
                                                    value={Leave}
                                                    onChange={(event) => setLeave(event.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message-text" className="col-form-label">
                                                    Trip Planning Stage*
                                                </label>
                                                <select className="form-select" value={SecondOption} onChange={(event) => setSecondOption(event.target.value)}>
                                                    {Menu.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">
                                                    Email Address*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="recipient-name"
                                                    value={Email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">
                                                    Adults
                                                </label>
                                                <select className="form-select" value={Options} onChange={(event) => setOption(event.target.value)}>
                                                    {options.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-warning" onClick={Help}>
                                            <Link to='/Help'>
                                                Start Planning
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* PRICE CARD */}
            <div className="container-fluid price-card p-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="alert alert-dark text-center" role="alert">
                            At a Glance
                        </div>
                        {/* INFORMATION ABOUT GLANCE */}
                        {
                            Glance && Glance.map((Data, id) => {
                                return (
                                    <>
                                        <p key={id}>{Data.top}</p>
                                        <ul>
                                            <li>{Data.link}</li>
                                        </ul>
                                    </>
                                )
                            })
                        }

                        {/* HOTELS PHOTOS */}
                        <HotelPhotos />

                        {/* HOTEL INFORMATION */}
                        <TextData
                            text='Room Included'
                            small='Meals included - Breakfast
                            Breakfast, Airport transfer [both ways], Non-Refundable'
                        />

                        {/* CHANGE HOTEL BUTTONS */}
                        <div className="topBottom" style={{ 'marginTop': '-25px' }}>
                            <Link to='/LatestHotel'>
                                <button type="button" className="btn btn-outline-danger">
                                    Change Hotel
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        {/* price */}
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-4 bg-light rounded-3 position-sticky">
                                <div className="col-md-12 col-lg-12 order-md-last">
                                    <h6 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-black"> <AiFillEdit /> Check Price and Availability</span>
                                    </h6>
                                    <ul className="list-group mb-3">
                                        <li className="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 className="my-0">STARTING FROM</h6>
                                                <small className="text-muted">per person on twin sharing</small>
                                            </div>
                                            <span className="text-black" style={{ 'fontSize': '30px' }}>₹ {TotalRooms}</span>
                                        </li>
                                    </ul>
                                    {/* Check Price and Availability */}
                                    <div className="col-md-12">
                                        <label htmlFor="cc-name" className="form-label" style={{ 'fontSize': '12px' }}>
                                            Leaving From
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cc-name"
                                            placeholder=""
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label" style={{ 'fontSize': '12px' }}>
                                            Leaving On
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="cc-name"
                                            placeholder=""
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-expiration" className="form-label" style={{ 'fontSize': '12px' }}>
                                            NIGHTS IN MALDIVES
                                        </label>
                                        <select className="col-md-6 form-select" value={Cart} onChange={(event) => setCart(event.target.value)}>
                                            {select.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.text}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="invalid-feedback">Expiration date required</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-cvv" className="form-label" style={{ 'fontSize': '12px' }}>
                                            NO. OF ROOMS
                                        </label>
                                        {/* ROOMS SELECT */}
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-danger dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {Room} Room, {Adult} Adults
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a className="dropdown-item" href="%">
                                                        <span className="text-center">Rooms</span>
                                                    </a>
                                                    <div className="counter text-center">
                                                        <div className="btn btn-light">
                                                            <AiOutlineMinusCircle style={{ 'fontSize': '20px' }}
                                                                onClick={() => {
                                                                    setRoom((preRoom) => (Math.max(preRoom - 1, 1)))
                                                                    setTotalRooms(TotalRooms - 1500)
                                                                }}
                                                            />
                                                        </div>
                                                        <span className="mt-4">{Room}</span>
                                                        <button className="btn btn-light">
                                                            <AiOutlinePlusCircle style={{ 'fontSize': '20px' }}
                                                                onClick={() => {
                                                                    setRoom(Room + 1)
                                                                    setTotalRooms(TotalRooms + 1500)
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="%">
                                                        Adults
                                                    </a>
                                                    <div className="counter text-center">
                                                        <div className="btn btn-light">
                                                            <AiOutlineMinusCircle style={{ 'fontSize': '20px' }}
                                                                onClick={() => {
                                                                    setAdult((preAdult) => (Math.max(preAdult - 1, 1)))
                                                                    setTotalRooms(TotalRooms - 1500)
                                                                }}
                                                            />
                                                        </div>
                                                        <span className="mt-4">{Adult}</span>
                                                        <button className="btn btn-light">
                                                            <AiOutlinePlusCircle style={{ 'fontSize': '20px' }}
                                                                onClick={() => {
                                                                    setAdult(Adult + 1)
                                                                    setTotalRooms(TotalRooms + 1500)
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main text-center mt-4">
                                        <button type="button" className="btn btn-warning">
                                            Reserve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreeEasy;
