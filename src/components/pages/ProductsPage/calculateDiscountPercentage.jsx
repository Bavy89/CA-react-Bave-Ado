const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return Math.round(discountPercentage);
};

export default calculateDiscountPercentage;
