import { useState, useEffect } from "react";
import { lottery } from "./lotteryControl.js";


const PickingWinner = (props) => {
    
    const [ prevWinner, setPrevWinner ] = useState('');
    const { walletAddr, managerAddr } = props;
    const [ msg, setMsg ] = useState('');
    
    useEffect(() => {
        lottery.methods.winner().call().then(res => {setPrevWinner(res)})
    })

    const pickWinner = async () => {
        setMsg('Picking Winner...');
        await lottery.methods.pickWinner().send({
            from: walletAddr
        });
        setMsg('Winner Picked');
        window.location.reload();
    }
    
    if(walletAddr.toLowerCase() === managerAddr.toLowerCase()) {
        return (
            <div>
                <button onClick={pickWinner}>PickWinner</button>
                <h3>Previous Winner: {prevWinner}</h3>
                <h3>{msg}</h3>
            </div>
        )
    } else {
        <div>
            <h3>Previous Winner: {prevWinner}</h3>
        </div>
    }
}

export default PickingWinner