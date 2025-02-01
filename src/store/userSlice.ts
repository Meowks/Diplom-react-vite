import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterForm } from "../pages/RegisterPage/RegisterPage";


interface initialState{
  user: null | IRegisterForm
};

const initialState:initialState ={
  user:null,
};

const userSlice = createSlice({
  name:"userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IRegisterForm>){
      state.user = action.payload
    }
  }
});

export default userSlice.reducer;
export const {changeUser} = userSlice.actions;