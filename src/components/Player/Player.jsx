import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';


const Player = ({ player ,handleSelectedPlayers}) => {
    const { name, batsman_type, bowler_type, details, age, stamina, price, image,id } = player;
    const [isSelected, setIsSelected] = useState(false);
    const handleSelectbutton = () => {
        setIsSelected(true)
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-lg">
            <figure><img className='w-full h-60 object-cover' src={image}></img></figure>
            <div className="card-body py-2">
                <h1 className='text-lg font-semibold'>{name}</h1>
                <h1 className='text-lg font-semibold text-red-400'>Price: ${price}M</h1>
                <Modal player={player}></Modal>
            </div>
            
            <button className={`btn btn-success rounded-t-none ${isSelected ? 'bg-green-600' : 'bg-teal-400'}`} onClick={() => { handleSelectedPlayers(player); handleSelectbutton(); }}>{ isSelected?'selected':'select'}</button>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
};

export default Player;