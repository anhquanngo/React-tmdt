/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Category from "./Category";
import _ from "lodash";
import {
  getDetailCategory,
  getProductsByCategory,
} from "../../services/Server";

function CategoryContainer(props) {
  const search = new URLSearchParams(props.location.search);
  const page = search.get("page");
  const id = _.get(props, "match.params.id");

  const [products, updateProducts] = React.useState([]);
  const [name, updateName] = React.useState(null);
  const [pages, updatePages] = React.useState({
    currentPage: 1,
    limit: 12,
  });
  const [loading, updateLoading] = React.useState(false);

  const callData = async () => {
    updateLoading(true);

    const name = await getDetailCategory(id).then(({ data }) => data.data.name);
    const data = await getProductsByCategory(id, {
      params: { limit: pages.limit, page: page },
    }).then(({ data }) => data.data);
    updateProducts(data.docs);
    updatePages({ ...pages, ...data.pages });
    updateName(name);
  };

  React.useEffect(() => {
    updateLoading(false);
    console.log(loading);
  }, [products]);

  React.useEffect(() => {
    callData();
  }, [id, page]);

  const _exTract = () => ({
    products,
    name,
    pages,
    loading,
  });

  return <Category {..._exTract()} />;
}

// class CategoryContainer extends React.PureComponent {
//   state = {
//     products: [],
//     name: null,
//   };

// _exTract = () => ({
//   products: this.state.products,
//   name: this.state.name,
// });

//   async componentDidMount() {
// const id = _.get(this.props, "match.params.id");
// const name = await getDetailCategory(id).then(({ data }) => data.data.name);
// const products = await getProductsByCategory(id, {
//   params: { limit: 12 },
// }).then(({ data }) => data.data.docs);
// this.setState({
//   name,
//   products,
// });
//   }

//   async componentDidUpdate(prevProps) {
//     const id = _.get(this.props, "match.params.id");
//     const oldId = _.get(prevProps, "match.params.id");
//     if (id !== oldId) {
//       const name = await getDetailCategory(id).then(
//         ({ data }) => data.data.name
//       );
//       const products = await getProductsByCategory(id, {
//         params: { limit: 12 },
//       }).then(({ data }) => data.data.docs);
//       this.setState({
//         name,
//         products,
//       });
//     }
//   }

//   render() {
//     return <Category {...this._exTract()} />;
//   }
// }

export default CategoryContainer;
