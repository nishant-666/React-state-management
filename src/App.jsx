import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Users from "./components/Users";
import Books from "./components/Books";
import "./App.css";

function App() {
  const [username, setUserName] = useState("Nishant");
  return (
    <div className="App">
      <UserContext.Provider value={{ username, setUserName }}>
        <Users />
        <Books />
      </UserContext.Provider>
    </div>
  );
}

export default App;
