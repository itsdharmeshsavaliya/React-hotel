import React, { useEffect, useState } from "react";
import MainSlider from "../Components/MainSlider";
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import TextData from "../Components/TextData";
import { Destinations, Information } from '../Data';
import { Link } from "react-router-dom";
import { HotelRoom, Remove } from "../Action/index";
import { useDispatch, useSelector } from 'react-redux';
import { GoPlus, GoTrashcan } from "react-icons/go";
import axios from 'axios';
import { FlightButton } from '../Action/index';


const Home = () => {

    const dispatch = useDispatch();
    const NewRoom = useSelector((state) => state.MoreData.list);

    // ADULT COUNTER
    const [Total, setTotal] = useState(1);
    // CHILDREN COUNTER
    const [Two, setTwo] = useState(0);
    const [Count, setCount] = useState(1);

    // HOTEL SELECTION OPTION
    const [Option, setOption] = useState('');
    const options = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
    ];

    const [OtherOptions, setOtherOptions] = useState('');
    const newOption = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
    ];


    // Flights Validation
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [FlightList, setFlightList] = useState([]);
    const flightInputData = (e) => {
        e.preventDefault()
        if (From && To && StartDate && EndDate) {
            const Alllist = { From: From, To: To, StartDate: StartDate, EndDate: EndDate };
            setFlightList([Alllist]);
            setFrom('');
            setTo('');
            setStartDate('');
            setEndDate('');
        }
        else {
            alert('Fill Data');
        }
    }

    // Flights Api Validation
    const [FlightData, setFlightsData] = useState([]);
    // const baseApi = "https://api.travelfundaa.com/wp-content/plugins/adivaha//apps/modules/adivaha-fly-smart/apiflight_update_rates.php?action=Show_OutBoundFlights&pid=77A406&agent_id=&search_id=63ca0daf0b8d4";
    // const FilterFlight = `&Cri_Price=&Cri_stopages=&airline=&fareType=&LccType=&airports=&destiairports=&agency=&payment=&departure_time=&arrival_time=&travel_time=&duration_time_slider=undefined&orderby_fild=price&orderby_val=ASC&currency=INR&language=en&page=1&pageval=1&adults=1&children=0&infants=0`
    const getFlight = () => {
        axios.get(`https://api.travelfundaa.com/wp-content/plugins/adivaha//apps/modules/adivaha-fly-smart/apiflight_update_rates.php?action=Show_OutBoundFlights&pid=77A406&agent_id=&search_id=63cf9257c2026&Cri_Price=&Cri_stopages=&airline=&fareType=&LccType=&airports=&destiairports=&agency=&payment=&departure_time=&arrival_time=&travel_time=&duration_time_slider=undefined&orderby_fild=price&orderby_val=ASC&currency=INR&language=en&page=1&pageval=1&adults=1&children=0&infants=0`)
            .then(Response => {
                setFlightsData(Response.data.result);
            })
    }

    useEffect(() => {
        getFlight()
    }, []);


    const Success = useSelector((state) => state.FlightBook);
    const [BookingSuccess, setBookingSucces] = useState('Book Now');






    return (
        <>
            <MainSlider
                firstimage='image/1.jpg'
                secondimage='image/2.jpg'
                thirdimage='image/3.jpg'
            />

            {/* Search Section */}
            <div className="container upper-space">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container button-button">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Flights
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Hotels
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            {/* FLIGHTS FIELD */}
                            <div
                                className="tab-pane fade active show bg-white"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                            >
                                <form onSubmit={flightInputData}>
                                    <div className="row g-3">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="From"
                                                aria-label="First name"
                                                value={From}
                                                onChange={(event) => setFrom(event.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="To"
                                                aria-label="Last name"
                                                value={To}
                                                onChange={(event) => setTo(event.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Last name"
                                                aria-label="Last name"
                                                value={StartDate}
                                                onChange={(event) => setStartDate(event.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Last name"
                                                aria-label="Last name"
                                                value={EndDate}
                                                onChange={(event) => setEndDate(event.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-light dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton2"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    {Total}  Passenger
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-light"
                                                    aria-labelledby="dropdownMenuButton2"
                                                >
                                                    <li>
                                                        <div className="counter text-center">
                                                            <div className="btn btn-light">
                                                                <AiOutlineMinusCircle style={{ 'fontSize': '20px' }}
                                                                    onClick={() => {
                                                                        setCount((preCount) => (Math.max(preCount - 1, 1)))
                                                                        setTotal(Total - 1)
                                                                    }}
                                                                />
                                                            </div>
                                                            {Count}
                                                            <div className="btn btn-light">
                                                                <AiOutlinePlusCircle style={{ 'fontSize': '20px' }}
                                                                    onClick={() => {
                                                                        setCount(Count + 1)
                                                                        setTotal(Total + 1)
                                                                    }} />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-center" href="%">
                                                            Adults
                                                        </a>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <div className="counter text-center">
                                                            <div className="btn btn-light">
                                                                <AiOutlineMinusCircle style={{ 'fontSize': '20px' }}
                                                                    onClick={() => {
                                                                        setTwo((preTwo) => (Math.max(preTwo - 1, 1)))
                                                                        setTotal(Total - 1)
                                                                    }}
                                                                />
                                                            </div>
                                                            {Two}
                                                            <div className="btn btn-light">
                                                                <AiOutlinePlusCircle style={{ 'fontSize': '20px' }}
                                                                    onClick={() => {
                                                                        setTwo(Two + 1)
                                                                        setTotal(Total + 1)
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-center" href="%">
                                                            Children
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* <Link to='/FlightsInfo'> */}
                                                <button type="submit" className="btn btn-dark">
                                                    <AiOutlineSearch />
                                                </button>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                        {
                                            FlightList && FlightList.map((Data, id) => {
                                                return (
                                                    <>
                                                        {
                                                            FlightList === `${From && To && StartDate && EndDate} ` ? null
                                                                :
                                                                FlightData.map((Data, id) => {
                                                                    return (
                                                                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                                                            <div className="d-flex justify-content-between">
                                                                                <h4 key={id}>{Data.departure_time}</h4>
                                                                                <strong className="text-gray-dark">{Data.origon_airport}</strong>
                                                                                <p className="pl_fa_plane"><span className="round_boder displaynone"> </span><FaPlaneDeparture /><span className="round_boder1 displaynone"></span></p>
                                                                                <strong className="text-gray-dark">{Data.destination_airport}</strong>
                                                                                <h4 className="text-gray-dark">{Data.arrival_time}</h4>
                                                                                <h4 className="text-warning" href="!?">₹{Data.actual_price}</h4>
                                                                                {
                                                                                    BookingSuccess === 'Book Now' ?
                                                                                        <Link to={`/SingleFlights/${Data.id}`}>
                                                                                            <button className="btn btn-outline-danger" onClick={() => dispatch(FlightButton(BookingSuccess), setBookingSucces('Your Flight is Booked'))}>
                                                                                                {Success}
                                                                                            </button>
                                                                                        </Link>
                                                                                        :
                                                                                        <div className="alert alert-success" role="alert">
                                                                                            Successfully Booked Your Flights
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                            <span className="d-block">{Data.fly_duration}</span>
                                                                        </div>

                                                                    )
                                                                })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </form>
                            </div>

                            <div
                                className="tab-pane fade bg-white"
                                id="pills-profile"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                            >
                                <div className="row g-3">
                                    <h6>Room 1</h6>
                                    <div className="col-6">
                                        <h6>Adult</h6>
                                        <select className="form-select" value={Option} onChange={(event) => setOption(event.target.value)}>
                                            {options.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.text}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <h6>Children</h6>
                                        <select className="form-select" value={OtherOptions} onChange={(event) => setOtherOptions(event.target.value)}>
                                            {newOption.map(newOption => (
                                                <option key={newOption.value} value={newOption.value}>
                                                    {newOption.text}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-primary btn-sm"
                                            onClick={() => dispatch(HotelRoom(options))}
                                        >
                                            <GoPlus /> Add Room
                                        </button>
                                    </div>
                                    {
                                        NewRoom && NewRoom.map((NewRoom, id) => {
                                            return (
                                                <>
                                                    <form class="was-validated" key={id}>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="mb-3">
                                                                    <select className="form-select" required="" aria-label="select example">
                                                                        <option value="">Adult</option>
                                                                        <option value={1}>One</option>
                                                                        <option value={2}>Two</option>
                                                                        <option value={3}>Three</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">Example invalid select feedback</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="mb-3">
                                                                    <select className="form-select" required="" aria-label="select example">
                                                                        <option value="">Children</option>
                                                                        <option value={1}>One</option>
                                                                        <option value={2}>Two</option>
                                                                        <option value={3}>Three</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">Example invalid select feedback</div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <button type="button" className="btn btn-secondary btn-sm"
                                                                    onClick={() => dispatch(Remove(NewRoom.id))}>
                                                                    <GoTrashcan /> Remove Room
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* TRENDING DESTINATION */}
            <div className="Destinatoion text-center mt-5" >
                <TextData text='Choose From' heading='Trending Destinations...' />
            </div>


            <div className="container image-loop">
                <div className="row">
                    {
                        Destinations && Destinations.map((Data, id) => {
                            return (
                                <div className="col-md-3 text-center mt-3" key={id}>
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


            {/* ABOUT */}

            <div className="about text-center mt-5">
                <TextData heading='Why Choose Us ?' />
            </div>


            <div className="container choose-us">
                <div className="row">
                    {
                        Information && Information.map((Data, id) => {
                            return (
                                <>
                                    <div className="col-md-3" key={id}>
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content rounded-6 shadow align-items-center border-0" style={{ 'height': '200px' }}>
                                                <div className="modal-header border-bottom-0">
                                                    <h5 className="modal-title">{Data.tophearder}</h5>
                                                </div>
                                                <div className="modal-body py-0">
                                                    <p>
                                                        {Data.paragraph}
                                                    </p>
                                                </div>
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

export default Home;
