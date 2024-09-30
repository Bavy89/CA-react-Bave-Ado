import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000000' }} className="text-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl overflow-hidden py-10 px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Company Information */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-white">Adresse</h2>
            <p className="text-sm text-gray-200 mt-2">
              Storeperveien 10B
            </p>
            <p className="text-sm text-gray-200">Sarpsborg, Norway</p>
          </div>

          {/* Contact Link */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-white">Contact</h2>
            <p className="text-sm text-gray-200 mt-2">
              Need assistance? feel free to contact us.
            </p>
            <Link
              to="/contact"
              className="text-lightblue underline text-sm font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-sm leading-10 text-white">
              &copy; 2024 Bave Ado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
