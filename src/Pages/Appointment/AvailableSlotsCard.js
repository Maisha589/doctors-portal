import React from 'react';

const AvailableSlotsCard = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions">
                    <label disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-primary btn-sm text-white text-bold bg-gradient-to-r from-secondary to-primary mt-10">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AvailableSlotsCard;