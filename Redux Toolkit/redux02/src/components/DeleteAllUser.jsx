import React from "react";
import { deleteAllUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
  const dispatch = useDispatch()

  function handleDelAll() {
    dispatch(deleteAllUser())
  }
  return <button className="btn add-btn mt-8" onClick={() => handleDelAll()}>DeleteAllUser</button>;
};
