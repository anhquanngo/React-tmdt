import React from "react";
import { ProductItem, Pagination, ProductItemSkeleton } from "../../components";

class Category extends React.PureComponent {
  render() {
    const { products, name, pages, loading } = this.props;
    return (
      <>
        <div className="products">
          <div id="search-result">
            Category: <span>{name}</span>
          </div>
          <div className="product-list card-deck">
            {(!loading &&
              products &&
              products.map((product) => (
                <ProductItem key={product._id} item={product} />
              ))) || <ProductItemSkeleton loop={12} />}
          </div>
        </div>
        <Pagination pages={pages} />
      </>
    );
  }
}

export default Category;
