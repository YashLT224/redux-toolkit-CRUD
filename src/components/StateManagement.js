import React from 'react'
import Coin from '../features/coin/coin'
import Counter from '../features/Counter/Counter'
import Theme from '../features/theme/Theme'
const StateManagement = () => {
    return (
        <div>
           <Counter />
      <Coin />
      <Theme />  
        </div>
    )
}

export default StateManagement
