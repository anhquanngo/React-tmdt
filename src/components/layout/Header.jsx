import React from "react";
import logo from "../../assets/images/logo.png";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyWord: "",
    };
  }

  onSubmitSearch = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`/search?q=${this.state.keyWord}`);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div id="header">
          <div className="container">
            <div className="row">
              <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
                <h1>
                  <a href="#">
                    <img className="img-fluid" src={logo} />
                  </a>
                </h1>
              </div>
              <div id="search" className="col-lg-6 col-md-6 col-sm-12">
                <form className="form-inline">
                  <input
                    className="form-control mt-3"
                    type="search"
                    placeholder="Tìm kiếm"
                    aria-label="Search"
                    onChange={(e) => this.setState({ keyWord: e.target.value })}
                    value={this.state.keyWord}
                  />
                  <button
                    className="btn btn-danger mt-3"
                    type="submit"
                    onClick={this.onSubmitSearch}
                  >
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
                <a className="mt-4 mr-2" href="#">
                  giỏ hàng
                </a>
                <span className="mt-3">8</span>
              </div>
            </div>
          </div>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
