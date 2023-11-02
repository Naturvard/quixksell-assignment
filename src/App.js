// import React, { useEffect } from 'react'
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// // import Card from './components/Card/Card';
// import Dashboard from './Components/Dashboard/Dashboard';
// import { useDispatch, useSelector} from 'react-redux'
// import { fetchAllData } from './Action/ActionData';
// import Loader from './Components/Loader/Loader';

// const App = () => {
//   const dispatch = useDispatch();
//   const {allTickets} = useSelector(state => state.DataReducer);
   
//   useEffect(() => {
//     dispatch(fetchAllData());
//   }, [dispatch])

//   return allTickets ? (
//     <div style={{paddingTop : "10px"}} >
//       <Navbar/>
//       <hr style={{marginTop : "10px"}} />
//       <Dashboard/>
//     </div>
//   ) : <Loader/>
// }


// export default App
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Action/ActionData'; // Make sure to import your action creator
import Loader from './Components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData()); // Dispatch your action to fetch data
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: '10px' }}>
      <Navbar />
      <hr style={{ marginTop: '10px' }} />
      <Dashboard />
    </div>
  ) : <Loader />;
};

export default App;
