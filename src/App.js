import React, { Fragment } from "react";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";

const App = () => {
  return (
    <Fragment>
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <SideBar />
            </div>
            <div className='col-lg-9'>
              <div className='main_content'>
                <Main />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
