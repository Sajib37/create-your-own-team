import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';

const Players = ({handleSelectedPlayers}) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                players.map((player,index)=><Player key={index} player={player} handleSelectedPlayers={handleSelectedPlayers}></Player>)
            }
        </div>
    );
};

Players.propTypes = {
    handleSelectedPlayers: PropTypes.func,
};

export default Players;