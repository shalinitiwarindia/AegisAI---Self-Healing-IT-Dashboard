// import React from "react";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
