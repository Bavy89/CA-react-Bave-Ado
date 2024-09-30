const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return <p>Leave a review!</p>;
  }

  return (
    <>
      <h2 className="font-bold text-xl lg:text-2xl">Reviews:</h2>
      {reviews.map((review) => (
        <div key={review.id} className="mt-6 mx-auto max-w-7xl md:px-4 sm:px-0">
          <div className="flex text-black pt-4 border-t border-gray w-76 md:w-80 md:px-2">
            <div className="flex items-center gap-2">
              <p className="bg-secondary rounded-full text-black w-16 h-16 flex justify-center items-center text-center text-xs font-light font-body">
                {review.username}
              </p>
              <p className="text-sm font-light font-body max-w-[200px]">
                {review.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
