import React from 'react'
import { IOrderEntryprops } from '../types/IOrderEntryprops'

const OrderEntryComp = (props:IOrderEntryprops) => {
  return (
    <div style={{ backgroundColor: props.nBuySell === 1 ? "green" : "red" }}>      
      <h1>Order Entry {props.nBuySell===1 ? "BUY" : "SELL"}</h1>
      
    </div>
  )
}

export default OrderEntryComp

