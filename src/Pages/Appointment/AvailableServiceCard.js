import React from 'react';

const AvailableServiceCard = ({ availableService }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10 mt-10 hidden lg:block">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{availableService.name}</h2>
            </div>
        </div>
    );
};

export default AvailableServiceCard;