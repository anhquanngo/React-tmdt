import React from "react";
import {
  getDetailProduct,
  getCommentProduct,
  createComment,
} from "../../services/Server";
import _ from "lodash";
import Detail from "./Detail";

const inputDefaultValue = {
  name: "",
  email: "",
  content: "",
};

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      comments: [],
      inputs: inputDefaultValue,
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
    onChangeInput: this._onChangeInput,
    onSubmitForm: this._onSubmitForm,
  });

  render() {
    console.log(this.state);
    return <Detail {...this._exTract(this.state.product)} />;
  }
}

export default DetailContainer;
