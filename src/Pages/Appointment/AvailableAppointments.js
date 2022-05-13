import { format } from 'date-fns';
import React from 'react';
import AvailableServiceCard from './AvailableServiceCard';

const AvailableAppointments = ({ date }) => {
    const availableServices = [
        {
            _id: 1,
            name: "Teeth Orthodontics"
        },
        {
            _id: 2,
            name: "Cosmetic Dentistry"
        },
        {
            _id: 3,
            name: "Teeth Cleaning"
        },
        {
            _id: 4,
            name: "Cavity Protection"
        },
        {
            _id: 5,
            name: "Pediatric Dental"
        },
        {
            _id: 6,
            name: "Oral Surgery"
        },
    ]
    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center my-10'>Available appointments on: {format(date, "PP")}</h4>
            <h3 className='text-center font-semibold'>Please select a service</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    availableServices.map(availableService => <AvailableServiceCard
                        key={availableService._id}
                        availableService={availableService}
                    ></AvailableServiceCard>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;