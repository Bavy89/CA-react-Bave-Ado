import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../store/modules/productSlice";
import { addItemToCart } from "../../../store/modules/cartSlice";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import ProductPrice from "./ProductPrice";
import ErrorComponent from "../../global/ErrorComponent";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  const { isError, errorMessage } = useSelector((state) => state.error);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  // Display loading message if singleProduct is still null
  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white md:p-4 max-w-3xl mx-4 md:mx-auto my-16 relative">
      {/* Only render product details if not in an error state */}
      {singleProduct && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            {singleProduct.image?.url ? (
              <img
                className="w-full h-96 object-cover object-center rounded"
                src={singleProduct.image.url}
                alt={singleProduct.image.alt || singleProduct.title}
              />
            ) : (
              <div className="w-full h-96 flex items-center justify-center bg-gray-200 text-gray-500 rounded">
                No Image Available
              </div> // Fallback if image is not available
            )}
          </div>
          <div className="px-2">
            <h2 className="text-gray-900 font-semibold text-lg">
              {singleProduct.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {singleProduct.description}
            </p>
            <div className="mt-2">
              <div className="mt-2">
                <ProductPrice product={singleProduct} />
              </div>
              <div className="flex flex-row justify-start my-4">
                <div>
                  <button
                    onClick={() => {
                      dispatch(addItemToCart(singleProduct));
                      setButtonDisabled(true);
                    }}
                    disabled={buttonDisabled}
                    className={`${
                      buttonDisabled
                        ? "bg-gray-400 cursor-not-allowed mx-2"
                        : "bg-main hover:bg-lightblue focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 mx-2"
                    } text-white font-semibold text-sm py-2 px-4 mt-4 md:mt-0 rounded `}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <Link to="/products">
                    <button className="bg-main text-white font-semibold text-sm py-2 px-4 mt-4 md:mt-0 rounded hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                      More Products
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white max-w-3xl mx-auto my-8">
                <Reviews reviews={singleProduct.reviews} />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Error handling */}
      {isError && <ErrorComponent message={errorMessage} />}
    </div>
  );
};

export default ProductDetail;
