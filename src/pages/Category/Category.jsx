import React from "react";
import { ProductItem, Pagination } from "../../components";

class Category extends React.PureComponent {
  render() {
    const { products, name, pages } = this.props;
    return (
      <>
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
        <Pagination pages={pages} />
      </>
    );
  }
}

export default Category;
