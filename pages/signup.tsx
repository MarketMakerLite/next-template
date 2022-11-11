import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div className="min-h-screen my-auto">
      <Navbar />
      <div className="flex flex-col justify-center items-center my-auto h-[94vh] pb-32 px-14 text-center">
        <img
          className="w-auto h-12"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
        <div className="mt-8 w-80">
          <form action="#" method="POST" className="">
            <div className="shadow-sm space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  maxLength={100}
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded "
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  maxLength={100}
                  minLength={8}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded "
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  maxLength={100}
                  minLength={8}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded "
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="mt-6 w-full">
              <button
                formAction="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded
             text-white bg-blue-700 hover:bg-opacity-90 active:scale-95"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4 font-medium">
          <p className="py-6">
            Already have an account?{" "}
            <a href="#" className="text-blue-600">
              Log in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
