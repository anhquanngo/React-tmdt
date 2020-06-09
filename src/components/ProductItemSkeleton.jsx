import React from "react";
import Skeleton from "react-loading-skeleton";

function ProductItemSkeleton({ loop }) {
  const _renderSkeleton = () => {
    const items = [];
    for (let i = 1; i <= loop; i++) {
      items.push(
        <div className={"product-item card text-center"}>
          <Skeleton height={180} width={130} />
          <Skeleton height={25} />
          <Skeleton height={25} />
        </div>
      );
    }
    return items;
  };

  return <> {_renderSkeleton()} </>;
}

export default ProductItemSkeleton;
