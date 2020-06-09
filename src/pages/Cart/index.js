/* eslint-disable no-restricted-globals */

import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { actionType } from "../../shared/constants";

class CartContainer extends React.Component {
  _onChangeQuantity = (e) => {
    const { name, value } = e.target;

    if (parseInt(value) < 1) {
      const isConfirm = confirm("Ban co muon xoa san pham nay hay khong");
      return isConfirm ? this.props.deleteProductCart({ id: name }) : false;
    }

    this.props.updateQuantity({
      id: name,
      quantity: value,
    });
  };

  _onClickDeleteProductCart = (id) => {
    const isConfirm = confirm("Ban co muon xoa san pham nay hay khong");
    return isConfirm ? this.props.deleteProductCart({ id }) : false;
  };

  _onClickDeleteAllCart = (e) => {
    e.preventDefault();
    const isConfirm = confirm(
      "Ban co muon xoa toan bo san pham trong gio hang"
    );
    return isConfirm ? this.props.deleteAllCart() : false;
  };

  _exTract = () => {
    const { data } = this.props;
    return {
      data: data,
      totalPrice: data.reduce((a, c) => a + c.quantity * c.price, 0),
      onChangeQuantity: this._onChangeQuantity,
      onClickDeleteProductCart: this._onClickDeleteProductCart,
      onClickDeleteAllCart: this._onClickDeleteAllCart,
    };
  };

  render() {
    return <Cart {...this._exTract()} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (item) =>
      dispatch({
        type: actionType.UPDATE_QUANTITY_CART,
        payload: item,
      }),
    deleteProductCart: (item) =>
      dispatch({
        type: actionType.DELETE_PRODUCT_CART,
        payload: item,
      }),
    deleteAllCart: () =>
      dispatch({
        type: actionType.DELETE_ALL_CART,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
