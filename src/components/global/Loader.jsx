const Loader = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
    <div className="bg-gray-800 rounded-lg p-5 h-40 flex flex-col items-center justify-center">
      <svg
        className="animate-spin h-12 w-12 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p className="mt-3 text-lg font-medium text-center text-white">
        Loading...
      </p>
    </div>
  </div>
);

export default Loader;
