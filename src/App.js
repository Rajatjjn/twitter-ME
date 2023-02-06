import { useState } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import SignInForm from "./component/signIn/SignInForm";
import SignUpForm from "./component/signUp/SignUpForm";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
<Route path="/" element={<SignInForm />}></Route>
<Route path="/SignUP" element={<SignUpForm />}></Route>

    
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
