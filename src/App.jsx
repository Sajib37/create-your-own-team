import { useState } from "react";
import "./App.css";
import Calculation from "./components/Calculation/Calculation";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import swal from 'sweetalert';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  const [Remaining, setRemaining] = useState(3000);

  const handleSelectedPlayers = (player) => {
    const isExist = selectedPlayer.find(item => item.id === player.id);
    if (isExist) {
      swal("Opps.!!!", `You have already selected ${player.name}`, "error");
    }
    else {
      let newTotalCost = player.price;
      let remainBalance = 3000 - player.price;

      selectedPlayer.forEach(player => newTotalCost += player.price);
      if (newTotalCost > 3300) {
        swal("Opps.!!!", `You have not enough budget to buy him.`, "error");
      }
      else {
        let newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer)
        setTotalCost(newTotalCost)
        remainBalance  -=totalCost;
        setRemaining(remainBalance);
      }
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto px-2 flex gap-2 flex-col-reverse lg:flex-row">
        <Players handleSelectedPlayers={handleSelectedPlayers}></Players>
        <Calculation selectedPlayer={selectedPlayer} totalCost={totalCost} Remaining={Remaining}></Calculation>
      </div>
    </>
  )
}

export default App;
