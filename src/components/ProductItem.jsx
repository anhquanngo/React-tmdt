import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../shared/utils";

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
          Giá Bán: <span>{item.price}đ</span>
        </p>
      </div>
    </>
  );
}
export default ProductItem;
