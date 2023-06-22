import React from "react";
import { fetchUsersList } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Typography } from "antd";

export const UserView = () => {
  const { data, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("user data:\n", data);
  return (
    <div>
      <Typography.Title level={2} style={{cursor: "pointer"}} onClick={() => {dispatch(fetchUsersList())}}>List of Users</Typography.Title>
      <Spin spinning={loading} tip="loading..." size="default">
        {data.length > 0 ? ( data.map((user) => <li key={user}>{user}</li>)) : (<h4 style={{ color: "red" }}>{error}</h4>)}
      </Spin>
    </div>
  );
};
