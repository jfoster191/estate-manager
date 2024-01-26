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
    <main className="flex flex-col bg-floralWhite">
      <h1 className="flex justify-center items-center text-4xl font-bold text-smokeyTopaz bg-linen p-">Welcome to <div className="flex justify-center">
        <img className="w-64 p-2 mb-0" src="https://i.imgur.com/EKvTAFn.png" alt="EM-Logo" />
      </div></h1>
      <div className="flex justify-center items-center mt-24 gap-14">
        <div className="border bg-white rounded border-grey flex flex-col p-10 text-3xl gap-2 shadow-lg">
          <div>Manage your mayh<span className="text-smokeyTopaz">EM</span></div>
          <div>Predict a probl<span className="text-smokeyTopaz">EM</span></div>
          <div>Estates with este<span className="text-smokeyTopaz">EM</span></div>
          <div>Seamless support syst<span className="text-smokeyTopaz">EM</span></div>
        </div>
        { switchShowing === 1 ? 
          <div className="flex flex-col items-center">
            <LoginForm setUser={setUser} />
            <div>New here,  
              <Link className="hover:text-smokeyTopaz" to='#' onClick={handleSwitch}> Sign Up</Link>
            </div>
          </div>
          :
          <div className="flex flex-col items-center">
            <SignUpFormFunc setUser={setUser} />
            <div>Already have an account,  
              <Link className="hover:text-smokeyTopaz" to='#' onClick={handleSwitch}> Login</Link>
            </div>
          </div>
        }

      </div>
    </main>
  )
}