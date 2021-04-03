import React,{useState} from 'react'
import Web3 from 'web3'
import {BrowserRouter as Router} from 'react-router-dom'

import {UserList} from './Contract/UserList'
import {Context} from './Contract/Context'
import Routers from './router'

const App=()=>{
  const [web3] =useState(new Web3('HTTP://127.0.0.1:8545'));
  const AddressContract='0xf68767eAa6A8c4ea5E6D11e6F654E938A560Ce6c'
  const [Contract] = useState(new web3.eth.Contract(UserList,AddressContract))
  
  return(
      <Router>
       <Context.Provider value={{web3,Contract}}>
      <Routers/>
       </Context.Provider>
      </Router>
  )
}
export default App

