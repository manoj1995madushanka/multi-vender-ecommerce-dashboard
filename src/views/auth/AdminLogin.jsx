import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {admin_login} from "../../store/reducers/authReducer";

const AdminLogin = () => {

  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
    console.log(state)
  }

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">

          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img className="w-full h-full" src="/images/logo.png" alt="Admin"/>
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input value={state.email} onChange={inputHandle}
                     className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md" type="text"
                     name="email" placeholder="Email" id="email" required/>
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input value={state.password} onChange={inputHandle}
                     className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                     type="password" name="password" placeholder="Password" id="password" required/>
            </div>

            <button
              className="bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;