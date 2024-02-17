import { useState } from "react";
import "./App.css";
//import components from the separate jsx files
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenicate";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    //after importing add tags for the repective files signupform and authenticate
    <>
      {/* passing the set token funvtion to authenticate & signup form*/}
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

export default App;
