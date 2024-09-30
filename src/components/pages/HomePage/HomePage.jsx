import React from "react";
import { useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import AllProducts from "../ProductsPage/AllProducts";
import ErrorComponent from "../../global/ErrorComponent";

const HomePage = () => {
  const { isError } = useSelector((state) => state.error);
  const { errorMessage } = useSelector((state) => state.error);

  return (
    <div>
      <HeroBanner />
      {isError ? <ErrorComponent message={errorMessage} /> : <AllProducts />}
    </div>
  );
};

export default HomePage;
