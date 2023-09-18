import React from 'react';
import PropTypes from 'prop-types';

const Calculation = ({ selectedPlayer, totalCost, Remaining }) => {
    let count = 1;
    return (
        <div className='w-full lg:w-2/5 border-2 p-1 bg-purple-100'>
            <h1 className='text-2xl font-bold text-green-600 my-2'>Remaining Budget: $<span>{ Remaining}</span>M</h1>
            <hr></hr>
            <h1 className='text-2xl font-bold text-green-600 my-2'>Total Cost: $<span>{ totalCost}</span>M</h1>
            <hr></hr>
            <div>
                <h1 className='text-xl font-bold'>Selected Players are: </h1>
                <ul>
                    {
                        selectedPlayer.map((player, index) => <li className=' bg-green-600 rounded-xl py-1 mb-1 font-medium text-center' key={index}>{count++}. {player.name}</li>)
                        
                    }
                </ul>
            </div>
        </div>
    );
};

Calculation.propTypes = {
    handleSelectedPlayers: PropTypes.func,
};

export default Calculation;