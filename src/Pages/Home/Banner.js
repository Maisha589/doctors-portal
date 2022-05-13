import React from 'react';
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="hero min-h-screen ">
            <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12">
                < img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-[#3A4256]">Your New Smile Starts Here</h1>
                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div >
        </div >
    );
};

export default Banner;