import React from 'react';
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from '../Shared/PrimaryBtn';

const Connected = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
        >
            <div className="p-5 text-center">
                <h4 className="text-xl text-primary font-bold">Contact Us</h4>
                <h2 className='text-3xl mb-10 text-white'>Stay connected with Us</h2>

                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <PrimaryBtn>Submit</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Connected;