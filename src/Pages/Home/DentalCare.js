import React from 'react';
import treatment from "../../assets/images/treatment.png";
import PrimaryBtn from '../Shared/PrimaryBtn';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen mb-10">
            <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12">
                <div>
                    <img className='rounded' src={treatment} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;