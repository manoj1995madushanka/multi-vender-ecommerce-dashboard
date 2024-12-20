import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";

// to handle async action in redux
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async(info) => {
    try {
     const {data} = await api.post('/admin_login', info,{withCredentials:true})
      console.log(data)
    }catch (error){
      console.log(error.response.data)
    }
  }
)

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
  }
})

export default authReducer.reducer;