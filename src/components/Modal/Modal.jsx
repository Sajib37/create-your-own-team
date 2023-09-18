import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ player }) => {
    const { name, batsman_type, bowler_type, details, age, stamina, price, image } = player;
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <div>
        <button className=" w-full py-1 font-semibold text-sky-400" onClick={openModal}>See More...</button>
        {showModal && (
            <div className="modal" open={showModal}>
                <div className="modal-box p-1 rounded-lg">
                        <img className=' rounded-t-lg' src={image}></img>
                        <div className='p-2'>
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p><span className='text-base font-semibold'>Born on:</span> {details}</p>
                            <p><span className='text-base font-semibold'>Age:</span> {age} Yeras</p>
                            <p><span className='text-base font-semibold'>Bat Style:</span> {batsman_type}</p>
                            <p><span className='text-base font-semibold'>Bowl Style:</span> {bowler_type}</p>
                            <p><span className='text-base font-semibold'>Stamina :</span> {stamina}</p>
                            <h1 className='text-lg font-semibold text-red-400'>Price: ${ price}M</h1>
                            <button class="btn btn-active btn-secondary w-[50%]" onClick={closeModal}>Close</button>
                        </div>
                </div>
            </div>
        )}
    </div>
    );
};

Modal.propTypes = {
    // player: PropTypes.object.isRequired,
};

export default Modal;