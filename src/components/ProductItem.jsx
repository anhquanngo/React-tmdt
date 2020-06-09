import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl, formatPrice } from "../shared/utils";

function ProductItem({ item }) {
  return (
    <>
      <div className="product-item card text-center">
        <Link to={`/product/${item._id}`} state={{ id: item._id }}>
          <img src={getImageUrl(item.image)} />
        </Link>
        <h4>
          <Link to={`/product/${item._id}`} state={{ id: item._id }}>
            {item.name}
          </Link>
        </h4>
        <p>
          Giá Bán: <span>{formatPrice(item.price)}</span>
        </p>
      </div>
    </>
  );
}
export default React.memo(ProductItem);
