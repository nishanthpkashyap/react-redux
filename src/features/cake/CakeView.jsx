import React from "react";
import { useSelector } from "react-redux";

export const CakeView = () => {
  const { no_of_cakes } = useSelector((state) => state.cake);
  return (
    <div>
      <h2>Number of Cakes - {no_of_cakes}</h2>
      <input type="button" value={"Order Cake"} onClick={{}} />
      <input type="button" value={"Restock Cake"} onClick={{}} />
    </div>
  );
};
