import React from 'react';
import treatment from "../../assets/images/treatment.png";

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12">
                <div>
                    <img className='rounded' src={treatment} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;