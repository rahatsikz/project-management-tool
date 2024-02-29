import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProjectState {
  project: {
    projectName: string | null;
  };
}

const initialState: IProjectState = {
  project: {
    projectName: null,
  },
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectName: (state, action: PayloadAction<string | null>): void => {
      state.project.projectName = action.payload;
    },
    
  },
});

export const { setProjectName} = projectSlice.actions;

export default projectSlice.reducer;