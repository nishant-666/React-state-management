import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useUserStore } from "../store/Store";

export default function Users() {
  //context
  let { username } = useContext(UserContext);

  //zustand
  let users = useUserStore((state) => state.users);
  return <div>{users}</div>;
}
