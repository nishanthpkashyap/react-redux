import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { icecreamActions } from "../ice-cream/icecreamSlice";
import { Button, Input, Typography } from 'antd';

export const IcecreamView = () => {
  const {no_of_icecreams} = useSelector((state)=>state.icecream);
  const [reStockValue, setRestockValue] = useState(1);
  const dispatch = useDispatch();
  const {order, restock} = icecreamActions;
  return (
    <div>
        <Typography.Title level={2}>Number of Icecreams - {no_of_icecreams}</Typography.Title>
        <Button onClick={()=>{dispatch(order())}}>Order Icecreams</Button>
        <Input type='number' style={{width: "12%"}} value={reStockValue} placeholder='Enter the restocking value' onChange={(e)=>{setRestockValue(()=>e.target.value)}}/>
        <Button onClick={()=>{dispatch(restock(Number(reStockValue)))}}>Restock Icecreams</Button>
    </div>
  )
}
