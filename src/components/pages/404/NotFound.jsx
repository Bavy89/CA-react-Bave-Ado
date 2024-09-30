import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main class="relative isolate min-h-full">
      <img
        src="https://media.istockphoto.com/id/535897405/photo/css-source.webp?s=2048x2048&w=is&k=20&c=fSJnf7JvYnptdW_Qa-5RbGd8nalPfd0bWznYOgSKYM8="
        alt="error image"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
        Oops! We can’t seem to find the page you’re looking for.
        </p>
        <div class="mt-10 flex justify-center">
          <Link to="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
