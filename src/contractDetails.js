import { lottery, web3 } from './lotteryControl.js';
import { useState, useEffect } from 'react';

const LotteryDetails = () => {
    
    const [ manager, setManager ] = useState('');
    const [ players, setPlayers ] = useState('');
    const [ balance, setBalance ] = useState('');
    const [ entry, setEntry ] = useState('');
    
    const f = async () => {
        setManager(await lottery.methods.managerName().call()); 
        const playerLength = await lottery.methods.getPlayersCount().call();
        setPlayers(playerLength);
        const bal = await web3.eth.getBalance(lottery.options.address)
        setBalance(web3.utils.fromWei(bal));
        setEntry(await lottery.methods.getMinAmount().call())
    };

    useEffect(() => {
        f()
    });
    
    return(
        <div>
            <h2>LOTTERY CONTRACT</h2>
            <hr />
            <h3>This contract is managed by {manager}</h3>
            <h3>There are currently {players} players in the lottery</h3>
            <h3>Currently {balance} ethers in the bet</h3>
            <h3>The minimum entry fee is {entry}</h3>
        </div>
    );
};

export default LotteryDetails;