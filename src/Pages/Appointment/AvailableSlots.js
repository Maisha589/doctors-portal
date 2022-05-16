import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AvailableSlotsCard from './AvailableSlotsCard';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const AvailableSlots = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-xl text-secondary font-bold text-center hidden lg:block my-10'>Available slots for Teeth Orthodontics.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service =>
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableSlots;