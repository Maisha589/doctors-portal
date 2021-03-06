import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Connected from './Connected';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare ></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Connected></Connected>
            <Footer></Footer>
        </div>
    );
};

export default Home;