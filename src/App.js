import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container app_container'>
          <div className='row app_row'>
            <div className='col-lg-3'>
              <SideBar />
            </div>
            <div className='col-lg-9 main_content'>
              {/*Navbar starts Here*/}
              <Navbar />
              <Main />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
