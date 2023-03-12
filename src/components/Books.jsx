import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useUserStore } from "../store/Store";

export default function Books() {
  let { setUserName } = useContext(UserContext);

  let increasePopulation = useUserStore((state) => state.increasePopulation);
  let decreasePopulation = useUserStore((state) => state.decreasePopulation);
  return (
    <div>
      <button onClick={increasePopulation}>Increase Users</button>
      <button onClick={decreasePopulation}>Decrease Users</button>
    </div>
  );
}
