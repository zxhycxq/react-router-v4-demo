import React from "react";
import "./index.css"
const Product = ({match, data}) => {
  var product = data.find (p =>
      p.id === Number (match.params.productId));
  var productData;
  
  if (product)
    productData = (
        <div className="product-detail">
          <h3>产品名称：{product.name}</h3>
          <p>产品描述：{product.description}</p>
          <h4>产品状态：{product.status}</h4>
        </div>
    );
  else
    productData = <h2>不存在</h2>;
  
  return (
      <div>
        <div>{productData}</div>
      </div>
  )
}

export default Product;
