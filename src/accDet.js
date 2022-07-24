import { useState, useEffect } from 'react';
import { lottery, web3 } from './lotteryControl.js';
import PickingWinner from './pickingWinner.js';

const AccDetails = () => {

    const [ walletAddr, setWalletAddr ] = useState("");
    const [ walletBal, setWalletBal ] = useState("");
    const [ ipName, setIpName ] = useState('');
    const [ ipEth, setIpEth ] = useState('');
    const [ managerAddr, setManagerAddr ] = useState('');
    const [ message, setMessage ] = useState('');

    
    const getWalletDetails = async () => {
        try{
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            accountChanger(accounts[0]);
            balSet(accounts[0]);
            setManagerAddr(await lottery.methods.manager().call());

            // window.ethereum.on('accountsChanged', accountChanger);
            //The above is to look for the active account in metamask
             
            // window.ethereum.on('chainChanged', () => {window.location.reload();})
            //The above will reload the page when account is changed in metamask
        } catch (e) {
            console.log(e);
        }
    };

    // const IsManager = () => {
    //     if(managerAddr.toLowerCase() === walletAddr.toLowerCase()) {
    //         return (
    //             // <PickingWinner prevWinner={prevWinner} />
    //             {}
    //         )
    //     }
// }
    
    const accountChanger = (newAcc) => {
        setWalletAddr(newAcc);
        balSet(newAcc)
    };

    const balSet = (Acc) => {
        const q = async (Acc) => {
            const bal = await window.ethereum.request({method: 'eth_getBalance', params: [Acc, 'latest']});
            setWalletBal(web3.utils.fromWei(bal));
        }
        q(Acc);
    };
    
    const makeTransaction = async (e) => {
        e.preventDefault();
        setMessage('Transaction is under Process...');
        const x = await lottery.methods.enter(ipName).send({
            from: walletAddr,
            value: web3.utils.toWei(ipEth),
        });
        if(x.transactionHash){
            setMessage("You've entered into the contract");
        } else {
            setMessage("OOPS.. Transaction Failed");
        }
        window.location.reload();
    }

    useEffect(() => {
        getWalletDetails();
    })
    
    return (
        <div>
            <form onSubmit={(e) => {makeTransaction(e)}}>
                <label>Name: </label>
                <input id={'name'} onChange={(e) => {
                    setIpName(e.target.value)
                }} value={ipName} />
                <br />
                <label>Amount: </label>
                <input id={'ethe'} onChange={(e) => {
                    setIpEth(e.target.value)
                }} value={ipEth} type={"number"} />
                <br />
                <input type={"submit"}/>
            </form>
            <PickingWinner walletAddr={walletAddr} managerAddr={managerAddr} />
            <hr />
            <h3>Wallet address: {walletAddr}</h3>
            <h3>Wallet balance: {walletBal}</h3>
            <h3>{message}</h3>
        </div>
    );

    
}

export default AccDetails;