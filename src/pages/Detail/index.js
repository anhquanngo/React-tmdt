import React from "react";
import {
  getDetailProduct,
  getCommentProduct,
  createComment,
} from "../../services/Server";
import _ from "lodash";
import Detail from "./Detail";
import { connect } from "react-redux";

import { actionType } from "../../shared/constants";

const inputDefaultValue = {
  name: "",
  email: "",
  content: "",
};

let timeOut = null;
class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      comments: [],
      inputs: inputDefaultValue,
      notifications: null,
    };
  }

  _onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ inputs: { ...this.state.inputs, [name]: value } });
  };

  _onSubmitForm = async (e) => {
    e.preventDefault();
    const { inputs } = this.state;
    const id = _.get(this.props.match, "params.id");
    await createComment(id, inputs);
    getCommentProduct(id, {}).then(({ data }) => {
      this.setState({
        comments: data.data.docs,
        inputs: inputDefaultValue,
      });
    });
  };

  _onClickAddToCart = (e, product) => {
    if (timeOut) return;
    e.preventDefault();
    this.props.addToCart({
      id: product._id,
      price: product.price,
      name: product.name,
      image: product.image,
      quantity: 1,
    });
    this.setState({
      notifications: {
        type: "success",
        title: "Thanh cong",
        text: "San pham duoc them vao gio hang",
        animateIn: "zoomInLeft",
        animateOut: "zoomOutRight",
        hide: true,
        nonblock: true,
      },
    });
    timeOut = setTimeout(() => {
      this.setState({
        notifications: null,
      });
      timeOut = null;
    }, 2000);
  };

  async componentDidMount() {
    const id = _.get(this.props.match, "params.id");
    const product = await getDetailProduct(id).then(({ data }) => data.data);
    const comments = await getCommentProduct(id, {}).then(
      ({ data }) => data.data.docs
    );
    this.setState({
      product,
      comments,
    });
  }

  _exTract = (product) => ({
    product: product,
    isStock: product && product.is_stock ? "Còn hàng" : "Hết hàng",
    comments: this.state.comments,
    inputs: this.state.inputs,
    notifications: this.state.notifications,
    onChangeInput: this._onChangeInput,
    onSubmitForm: this._onSubmitForm,
    onClickAddToCart: this._onClickAddToCart,
  });

  render() {
    return <Detail {...this._exTract(this.state.product)} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) =>
      dispatch({
        type: actionType.ADD_TO_CART,
        payload: item,
      }),
  };
};

export default connect(null, mapDispatchToProps)(DetailContainer);
