import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(3, "Message must be at least 3 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitted(true);
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      {isSubmitted ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Thanks for your message!
          </h2>
          <div className="text-center">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              &larr; Back to home
            </Link>
            <div className="mt-4">
              <Link
                to="/products"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                &larr; Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              placeholder="Your name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formik.values.email}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              placeholder="Your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formik.values.subject}
              name="subject"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              placeholder="Subject"
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formik.values.message}
              name="message"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Your message"
              rows="4"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
