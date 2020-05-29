import React from "react";
import { Header, Footer, Menu, Slider, SideBar } from "./components/layout";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div id="body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav>
                  <Menu />
                </nav>
              </div>
            </div>
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                {/*	Slider	*/}
                <Slider />
                <AppRouter />
                {/*	End Slider	*/}
              </div>
              <SideBar />
              {/* Siderbar */}
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
