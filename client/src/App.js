import React, { useEffect, useState } from 'react'
import BlockchainMessage from './contracts/BlockchainMessage.json'
import getWeb3 from './getWeb3'

import './App.css'

const App = () => {
  const [dependencies, setDependencies] = useState({
    web3: null,
    accounts: null,
    contract: null,
  })

  useEffect(() => {
    (async function() {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3()
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts()
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId()
        const deployedNetwork = BlockchainMessage.networks[networkId]
        const contract = new web3.eth.Contract(
          BlockchainMessage.abi,
          deployedNetwork && deployedNetwork.address,
        )
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setDependencies({ web3, accounts, contract })
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        )
        console.error(error)
      }
    })()
  }, [])

  if (!dependencies.web3) {
    return <div>Loading Web3, accounts, and contract...</div>
  }

  return (
    <div className="app">
      <h1>Blockchain Message:</h1>
    </div>
  )
}

export default App
