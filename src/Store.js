// import { configureStore } from '@reduxjs/toolkit';
// import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';

// const store = configureStore({
//   reducer: {
//     data: DataReducer, // Assuming 'data' is the slice managed by DataReducer
//     selectedData: SelectDataReducer, // Assuming 'selectedData' is the slice managed by SelectDataReducer
//   }
// });

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import DataReducer, { SelectDataReducer } from "./DataReducer";

// const store = configureStore({
//   reducer: {
//     DataReducer,
//     SelectDataReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { DataReducer, SelectDataReducer } from "./Reducers/DataReducer"

const store = configureStore({
  reducer: {
    DataReducer,
    SelectDataReducer,
  },
});

export default store;
