import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1MONAr9zsAaSb0luXvkVJmUVehmjjSrO6QJO3zApsoifeoFrujucO6BF52pbUzBk5FQMeRa47f1oiNJOy3hWTj00nrr79eyR');


const Payment = () => {
    const { id } = useParams();
    const url = `https://ancient-hollows-89745.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery("booking", () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello {appointment.patientName},</p>
                    <h2 class="card-title">Please Pay for{appointment.treatment}</h2>
                    <p>Your appointment <span className='text-orange-600'>{appointment.date}</span> at <span className='text-orange-600'>{appointment.slot}</span></p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;