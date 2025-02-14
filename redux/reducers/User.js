import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Muhammad',
  lastName: 'Aahil',
  userId: '123456',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState, // ✅ Corrected spelling
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
