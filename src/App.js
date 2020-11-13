import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <div className='App'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <SideBar />
              </div>
              <div className='col-lg-9'>
                <div className='main_content'>
                  {/*Navbar starts Here*/}
                  <Navbar />
                  <Main />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
