import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "redux/actionCreators";
import { State } from "redux/reducers";
import Dashboard from "components/Dashboard";
import ProductDetailsComponent from "components/ProductDetails";

import "pages/Homepage/index.css";

interface Props {}

const Homepage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { fetchSalesData } = bindActionCreators(actionCreators, dispatch);
  const inventoryData = useSelector((state: State) => state.dashboard);

  useEffect(() => {
    fetchSalesData();
  }, []);

  console.log(inventoryData);

  const [product] = inventoryData.products;
  const productDetails = product;
  return (
    <div className="homepage">
      {product && <ProductDetailsComponent productDetails={productDetails} />}
      {product && <Dashboard salesData={product.sales} />}
    </div>
  );
};

export default Homepage;
