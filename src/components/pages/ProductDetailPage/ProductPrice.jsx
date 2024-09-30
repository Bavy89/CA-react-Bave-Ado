import calculateDiscountPercentage from "../ProductsPage/calculateDiscountPercentage";

const ProductPrice = ({ product }) => {
  const displayDiscountPercentage = () => {
    if (product.discountedPrice && product.discountedPrice < product.price) {
      const discountPercentage = calculateDiscountPercentage(
        product.price,
        product.discountedPrice
      );
      return (
        <div className="bg-red-500 text-white text-xs font-semibold absolute top-2 right-2 py-1 px-2 rounded">
          {discountPercentage}% OFF
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {product.discountedPrice && product.discountedPrice < product.price ? (
        <>
          <span className="text-red-700 font-semibold">
            {product.discountedPrice} $
          </span>
          <span className="text-gray-500 line-through ml-2">
            {product.price} $
          </span>
        </>
      ) : (
        <span className="text-gray-700 font-semibold">{product.price} $</span>
      )}
      {displayDiscountPercentage()}
    </>
  );
};

export default ProductPrice;
