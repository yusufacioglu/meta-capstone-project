import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm avaiLableTimes={props.avaiLableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
    );
};

export default Booking;