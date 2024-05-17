import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  empList: [
    {
      id: Math.floor(Math.random() * 1000),
      fname: "Jhon",
      lname: "Francis",
      salary: 50000,
      doj: "2021-05-23",
      email: "jhon12@gmail.com",
      role: "Software Developer",
    },
    {
      id: Math.floor(Math.random() * 1000),
      fname: "anu",
      lname: "priya",
      salary: 58000,
      doj: "2019-11-23",
      email: "anupriya@gmail.com",
      role: "Developer",
    },
    {
      id: Math.floor(Math.random() * 1000),
      fname: "Vijay",
      lname: "Sam",
      salary: 58000,
      doj: "2023-12-03",
      email: "anupriya@gmail.com",
      role: "Designer",
    },
  ],
  selectedEmp: {},
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.floor(Math.random() * 1000);
      let table = { ...action.payload, id };
      state.empList.push(table);
    },
    removeFromList: (state, action) => {
      state.empList = state.empList.filter(
        (list) => list.id !== action.payload.id
      );
    },
    updateEmpList: (state, action) => {
      state.empList = state.empList.map((list) =>
        list.id === action.payload.id ? action.payload : list
      );
    },
    setSelectedEmp: (state, action) => {
      state.selectedEmp = action.payload;
    },
  },
});

export const { addTaskToList, removeFromList, updateEmpList, setSelectedEmp } =
  taskSlice.actions;
export default taskSlice.reducer;
