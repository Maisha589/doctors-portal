import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary mt-10">{children}</button>
        </div>
    );
};

export default PrimaryBtn;