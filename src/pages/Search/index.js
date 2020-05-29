import React from "react";
import Search from "./Search";

import { getProducts } from "../../services/Server";

class SearchContainer extends React.Component {
  state = {
    products: [],
  };

  getProducts = () => {
    const searchParams = new URLSearchParams(this.props.location.search);
    const q = searchParams.get("q");

    getProducts({ params: { name: q, limit: 12 } }).then(({ data }) => {
      this.setState({
        products: data.data.docs,
      });
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getProducts();
    }
  }

  _exTract = () => {
    return {
      products: this.state.products,
    };
  };

  render() {
    return <Search {...this._exTract()} />;
  }
}

export default SearchContainer;
