import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";
import { Button, Typography } from "antd";

export const CakeView = () => {
  const { no_of_cakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch()
  const {order, restock} = cakeActions;
  return (
    <div>
      <Typography.Title level={2}>Number of Cakes - {no_of_cakes}</Typography.Title>
      <Button onClick={()=>{dispatch(order())}}>Order Cake</Button>
      <Button onClick={()=>{dispatch(restock(5))}}>Restock Cake</Button>
    </div>
  );
};
