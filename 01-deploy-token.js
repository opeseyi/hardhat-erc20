const {network} = require('hardhat')
async function({deployment, getNamedAccounts}){
    const {depoly, log} = deployment
    const {deployer} = getNamedAccounts()
    const chainId = network.config.chainId

    
}