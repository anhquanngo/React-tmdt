import React from "react";
import Home from "./Home";
import { getProducts } from "../../services/Server";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newProducts: [],
      featureProducts: [],
    };
  }

  async componentDidMount() {
    const newProducts = await getProducts({ params: { limit: 6 } }).then(
      ({ data }) => data.data
    );
    const featureProducts = await getProducts({
      params: { isFeatured: true, limit: 6 },
    }).then(({ data }) => data.data);

    this.setState({
      newProducts,
      featureProducts,
    });
  }

  _extract = () => ({
    newProducts: this.state.newProducts,
    featureProducts: this.state.featureProducts,
  });

  render() {
    console.log(this.state);
    return <Home {...this._extract()} />;
  }
}

export default HomeContainer;
