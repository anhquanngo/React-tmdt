import React from "react";
import { ProductItem, ProductItemSkeleton } from "../../components";

class Home extends React.Component {
  _renderProducts = (products) => {
    return products.map((product) => {
      return <ProductItem key={product._id} item={product} />;
    });
  };

  render() {
    const { newProducts, featureProducts } = this.props;
    return (
      <>
        <div className="products">
          <h3>Sản phẩm nổi bật</h3>
          <div className="product-list card-deck">
            {newProducts.length ? (
              this._renderProducts(newProducts)
            ) : (
              <ProductItemSkeleton loop={6} />
            )}
          </div>
        </div>
        <div className="products">
          <h3>Sản phẩm mới</h3>
          <div className="product-list card-deck">
            {featureProducts.length ? (
              this._renderProducts(featureProducts)
            ) : (
              <ProductItemSkeleton loop={6} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
