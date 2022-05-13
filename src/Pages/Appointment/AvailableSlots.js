import React, { useEffect, useState } from 'react';
import AvailableSlotsCard from './AvailableSlotsCard';
import BookingModal from './BookingModal';

const AvailableSlots = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <h2 className='text-xl text-secondary font-bold text-center hidden lg:block my-10'>Available slots for Teeth Orthodontics.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <AvailableSlotsCard key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AvailableSlotsCard>
                    )
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableSlots;