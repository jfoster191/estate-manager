import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";
//import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

export default function AuthPage({setUser, user}) {
  let [switchShowing, setSwitch] = useState(-1)
  function handleSwitch(evt){
    if (switchShowing === 1) switchShowing = -1
    else if (switchShowing === -1) switchShowing = 1
    setSwitch(switchShowing)
  }
  return (
    <main>
      <h1>Auth Page</h1>
      { switchShowing === 1 ? 
        <>
          <LoginForm setUser={setUser} />
          <div>New here,  
            <Link to='#' onClick={handleSwitch}> Sign Up</Link>
          </div>
        </>
        :
        <>
          <SignUpFormFunc setUser={setUser} />
          <div>Already have an account,  
            <Link to='#' onClick={handleSwitch}> Login</Link>
          </div>
        </>
      }
    </main>
  )
}