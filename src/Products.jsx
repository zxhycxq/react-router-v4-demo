import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";

const Products = ({match}) => {
  const productsData = [
    {
      id: 1,
      name: "第一个",
      description: "张三",
      status: "keyiyong"
    },
    {
      id: 2,
      name: "第2个",
      description: "李斯",
      status: "木子李"
    },
    {
      id: 3,
      name: "第3个",
      description: "王五",
      status: "王屋山"
    },
    {
      id: 4,
      name: "第4个",
      description: "赵六",
      status: "赵家"
    },
  ];
  
  var linkList = productsData.map (product => {
    return (
        <li key={product.id}>
          <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
        </li>
    )
  })
  
  return (
      <div>
        <div>                                     
          <div>
            <h3>产品列表</h3>
            <ul>{linkList}</ul>
          </div>
        </div>
        <Route
            path={`${match.url}/:productId`}
            render={(props) => <Product
                data={productsData}
                {...props}
            />}
        />
        <Route exact
               path={match.url}
               render={() => (
                   <div>请选择产品</div>
               )}
        />
      </div>
  )
}

export default Products;
