import React from "react";
import Category from "./Category";
import _ from "lodash";
import {
  getDetailCategory,
  getProductsByCategory,
} from "../../services/Server";

function CategoryContainer(props) {
  const [products, updateProducts] = React.useState([]);
  const [name, updateName] = React.useState(null);

  const id = _.get(props, "match.params.id");

  //
  React.useEffect(() => {
    async function a() {
      const name = await getDetailCategory(id).then(
        ({ data }) => data.data.name
      );
      const products = await getProductsByCategory(id, {
        params: { limit: 12 },
      }).then(({ data }) => data.data.docs);
      updateProducts(products);
      updateName(name);
    }
    a();
  }, [id]);

  const _exTract = () => ({
    products,
    name,
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
