import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface isAsideRightType {
  isAsideRightOpen: boolean;
}

const initialState: isAsideRightType = {
  isAsideRightOpen: true,
};

export const asideRightSlice = createSlice({
  name: 'isAsideRightOpen',
  initialState,
  reducers: {
    setIsAsideRightOpen: (state) => {
      state.isAsideRightOpen = !state.isAsideRightOpen;
    },
  },
});

export const { setIsAsideRightOpen } = asideRightSlice.actions;

export const selectIsAsideRightOpen = (state: RootState) =>
  state.asideRight.isAsideRightOpen;

export default asideRightSlice.reducer;
