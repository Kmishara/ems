import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    console.log("email is:",email);
    console.log("password is:",password);
    setEmail("")
    setPassword("")
    
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e)=>{submitHandler(e)}}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="border-2 border-emerald-600 py-2 px-6 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="enter ypur email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="border-2 mt-3 border-emerald-600 py-2 px-6 text-xl  outline-none bg-transparent rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="enter password"
          />
          <button className="border-2 mt-7 bg-emerald-600 py-2 px-8 font-semibold text-lg hover:bg-emerald-700 w-full  text-white outline-none  border-none rounded-full placeholder:text-white">
            {" "}
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
