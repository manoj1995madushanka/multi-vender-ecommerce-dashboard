import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {admin_login} from "../../store/reducers/authReducer";
import {PropagateLoader} from "react-spinners";

const AdminLogin = () => {

  const dispatch = useDispatch()
  // selecting auth state of auth reducer
  const {loader} = useSelector(state=>state.auth)

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

  const overrideStyle = {
    display : 'flex',
    margin:'0 auto',
    height:'24px',
    justifyContent:'center',
    alignItems:'center'
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
              disabled={loader? true:false}
              className="bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              {
                loader? <PropagateLoader color='#fff' cssOverride={overrideStyle}/> : 'Login'
              }
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;