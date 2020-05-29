import React from "react";
import { Header, Footer, Menu, Slider, SideBar } from "./components/layout";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
import { getCategories } from "./services/Server";
import { Provider } from "react-redux";
import store from "./redux-setup/store";

class App extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    getCategories().then(({ data }) => {
      this.setState({
        categories: data.data.docs,
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div id="body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <nav>
                    <Menu categories={this.state.categories} />
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
      </Provider>
    );
  }
}

export default App;
