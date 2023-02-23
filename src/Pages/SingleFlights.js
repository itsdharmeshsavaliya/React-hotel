import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { FlightButton } from '../Action/index';
import TextData from "../Components/TextData";
import { FaPlaneDeparture } from "react-icons/fa";

const SingleFlights = () => {

    const { id } = useParams();

    // Flights Api Validation
    const [FlightDataDetail, setFlightDataDetail] = useState([]);
    // const baseApi = "https://api.travelfundaa.com/wp-content/plugins/adivaha//apps/modules/adivaha-fly-smart/apiflight_update_rates.php?action=Show_OutBoundFlights&pid=77A406&agent_id=&search_id=63ca0daf0b8d4";
    // const FilterFlight = `&Cri_Price=&Cri_stopages=&airline=&fareType=&LccType=&airports=&destiairports=&agency=&payment=&departure_time=&arrival_time=&travel_time=&duration_time_slider=undefined&orderby_fild=price&orderby_val=ASC&currency=INR&language=en&page=1&pageval=1&adults=1&children=0&infants=0`
    const getFlight = () => {
        axios.get(`https://api.travelfundaa.com/wp-content/plugins/adivaha//apps/modules/adivaha-fly-smart/apiflight_update_rates.php?action=Camouflage_Check_Flight&${id}pid=77A406&agent_id=&search_id=63cf9530aeaa6&id=4252216&rid=&isDomestic=Yes&currency=INR&language=en&is_custom=0&isCombo=`)
            .then(Response => {
                setFlightDataDetail(Response.data.OutBound.onewayFlights[0]);
                console.log(Response.data.OutBound.onewayFlights[0]);
            })
    }

    useEffect(() => {
        getFlight()
    }, []);


    const flyFrom = FlightDataDetail ? `${FlightDataDetail}${FlightDataDetail.flyFrom}` : '';
    const aTimeActual = FlightDataDetail ? `${FlightDataDetail}${FlightDataDetail.aTimeActual}` : '';
    const flyTo = FlightDataDetail ? `${FlightDataDetail}${FlightDataDetail.flyTo}` : '';
    const flight_no = FlightDataDetail ? `${FlightDataDetail}${FlightDataDetail.flight_no}` : '';
    const dTimeActual = FlightDataDetail ? `${FlightDataDetail}${FlightDataDetail.dTimeActual}` : '';

    // Button
    const Success = useSelector((state) => state.FlightBook);
    const [BookingSuccess, setBookingSucces] = useState('Book Now');
    const dispatch = useDispatch();


    return (
        <>
            <div className="container flight-info">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <TextData information='Review and book your trip' />
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div className="d-flex justify-content-between">
                            <h4 key={id}>{FlightDataDetail.aTimeActual}</h4>
                            <strong className="text-gray-dark">{FlightDataDetail.flyFrom}</strong>
                            <p className="pl_fa_plane"><span className="round_boder displaynone"> </span><FaPlaneDeparture /><span className="round_boder1 displaynone"></span></p>
                            <strong className="text-gray-dark">{FlightDataDetail.flyTo}</strong>
                            <h4 className="text-gray-dark">{FlightDataDetail.flight_no}</h4>
                            <h4 className="text-warning" href="!?">{FlightDataDetail.dTimeActual}</h4>
                        </div>
                        <span className="d-block">{FlightDataDetail.cityFrom}</span>
                    </div>
                    {
                        BookingSuccess === 'Book Now' ?
                            <div className="price d-flex justify-content-center">
                                <button className="btn btn-outline-danger mt-3" onClick={() => dispatch(FlightButton(BookingSuccess), setBookingSucces('Your Flight is Booked'))}>
                                    {Success}
                                </button>
                            </div>
                            :
                            <div className="alert alert-success" role="alert">
                                Successfully Booked Your Flights
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default SingleFlights;
