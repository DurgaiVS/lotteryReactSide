import Web3 from 'web3';

const abi = [{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMinAmount","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"managerName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
const addr = "0x9Fb455fa1e45ca81ECeb7d6e39fC99739acAd78c";

const web3 = new Web3(window.ethereum);
// const provider =  new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/37ba19b722a04834aae33c7505c1bd53');

const lottery = new web3.eth.Contract(abi, addr);

export { web3, lottery };