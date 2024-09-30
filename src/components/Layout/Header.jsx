import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import LOGO from "../../../public/assets/LogoBrand.png";
import LOGOMOBILE from "../../../public/assets/LogoBrand.png";

const Header = () => {
  const { numberOfItemsInCart } = useSelector((state) => state.cart);

  const generateNavLinkClass = (isActive) =>
    `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-main hover:text-black ${
      isActive ? "font-bold border-b-2 border-main" : "border-transparent"
    }`;

  return (
    <header className="m-0 p-0">
      <nav style={{ backgroundColor: '#F2F2F2' }} className="shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="h-16 relative flex md:h-20 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto md:hidden"
                    src={LOGOMOBILE}
                    alt="BaveReactApp"
                  />
                  <img
                    className="h-12 w-auto hidden md:block"
                    src={LOGO}
                    alt="BaveReactApp"
                  />
                </Link>
              </div>
              <div className="ml-6 flex space-x-8">
                <NavLink
                  to="/products"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Products
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to={`/cart`}>
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {numberOfItemsInCart}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
