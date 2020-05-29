import React from "react";
import { getDetailProduct } from "../../services/Server";
import _ from "lodash";
import Detail from "./Detail";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const id = _.get(this.props.match, "params.id");
    getDetailProduct(id).then(({ data }) =>
      this.setState({ product: data.data })
    );
  }

  _exTract = (product) => ({
    product: product,
    isStock: product && product.is_stock ? "Còn hàng" : "Hết hàng",
  });

  render() {
    return <Detail {...this._exTract(this.state.product)} />;
  }
}

export default DetailContainer;
