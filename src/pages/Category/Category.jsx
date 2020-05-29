import React from "react";
import { ProductItem } from "../../components";

class Category extends React.PureComponent {
  render() {
    const { products, name } = this.props;
    console.log("Category -> render -> products", products);
    return (
      <div className="products">
        <div id="search-result">
          Category: <span>{name}</span>
        </div>
        <div className="product-list card-deck">
          {products &&
            products.map((product) => (
              <ProductItem key={product._id} item={product} />
            ))}
        </div>
      </div>
    );
  }
}

export default Category;
