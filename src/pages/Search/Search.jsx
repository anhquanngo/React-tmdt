import React from "react";
import { ProductItem } from "../../components";

class Search extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với từ khóa: <span></span>
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

export default Search;
