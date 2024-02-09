import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Booking from './components/Booking';
import ConfirmedBooking from './components/ConfirmedBooking';



function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Header/>
      <BookingForm/>
      <Menu />
      <Footer/>
      <Booking/>
      <ConfirmedBooking/>
    </div>

  );
};

export default App;
