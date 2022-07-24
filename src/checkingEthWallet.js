import LotteryDetails from "./contractDetails.js";
import AccDetails from "./accDet.js";

const IsEthAvailable = () => {
    if(window.ethereum) {
        return (
        <div>
        <LotteryDetails />
        <hr />
        <AccDetails />
        </div>        
        )
    } else {
        return (
        <div>
            <h3>
            Please install any ethereum wallet extension on your browser to continue
            <br />
            RECOMMENDED: Use METAMASK for best experience
            </h3>
        </div>
        )
    }
}

export default IsEthAvailable;