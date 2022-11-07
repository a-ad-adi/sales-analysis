import React from "react";
import "components/ProductDetails/index.css";
import Tag from "components/Tag";

export interface ProductDetails {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  tags: string[];
}

function ProductDetailsComponent({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  return (
    <div className="product-details">
      <img src={productDetails.image} alt={productDetails.title} />
      <div className="subtitle">{productDetails.subtitle}</div>
      <div className="tags">
        {productDetails.tags.map((tag) => (
          <Tag name={tag} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsComponent;
