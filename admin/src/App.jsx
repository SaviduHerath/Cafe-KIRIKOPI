import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import { ToastContainer, toast } from 'react-toastify';

import Orders from "./pages/Orders/Orders";

const App = () => {

  const url  = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Add />} />

            <Route path="/add" element={<Add url={url}/>}></Route>
            <Route path="/list" element={<List url={url}/>}></Route>
            <Route path="/orders" element={<Orders url={url}/>}></Route>
          </Routes>
        </div>
      </div>
    
  );
};

export default App;
