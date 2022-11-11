import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <div className="">
      <HeadComponent />
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <main className="relative flex w-full flex-1 flex-col items-center justify-center text-center ">
          <div
            id={"hero"}
            className="relative flex flex-col justify-center w-full max-h-20 bg-black flex-1 px-20 text-center min-h-[70vh] gap-y-8"
          >
            <h1 className="flex text-center justify-center px-8 text-6xl text-gray-100 font-medium select-none">
              Call to Action
            </h1>
            <h2 className="flex text-center font-light justify-center text-xl text-gray-100 select-none tracking-wider italic">
              Slogan / Subtitle
            </h2>
            <button
              className="flex w-fit my-2 mx-auto text-center justify-center py-3 px-24 text-xl text-white bg-blue-700 rounded
            hover:bg-opacity-90 active:scale-95"
            >
              Get Started
            </button>
          </div>
          <div
            id={"features"}
            className="relative flex flex-col items-start justify-start w-full bg-white flex-1 px-20 text-center py-24 min-h-[50vh]"
          >
            <h1 className="flex justify-center text-6xl font-bold select-none">
              Features
            </h1>
            <div className="flex flex-row items-center justify-between w-full py-24">
              <div className="flex flex-col w-[20vw] h-[30vh] gap-y-4 border border-gray-300 rounded-lg pt-8">
                <h1 className="flex text-center justify-center text-4xl text-black font-bold select-none pt-4">
                  Feature 1
                </h1>
                <a className="text-lg">Feature 1 description</a>
              </div>
              <div className="flex flex-col w-[20vw] h-[30vh] gap-y-4 border border-gray-300 rounded-lg pt-8">
                <h1 className="flex text-center justify-center text-4xl text-black font-bold select-none pt-4">
                  Feature 1
                </h1>
                <a className="text-lg">Feature 1 description</a>
              </div>
              <div className="flex flex-col w-[20vw] h-[30vh] gap-y-4 border border-gray-300 rounded-lg pt-8">
                <h1 className="flex text-center justify-center text-4xl text-black font-bold select-none pt-4">
                  Feature 1
                </h1>
                <a className="text-lg">Feature 1 description</a>
              </div>
            </div>
          </div>
          <div
            id={"pricing"}
            className="relative flex flex-col justify-start w-full bg-white flex-1 px-48 text-center min-h-[90vh]"
          >
            <h1 className="flex text-center justify-center px-8 pb-12 text-6xl font-bold select-none">
              Pricing
            </h1>
            <div className="flex flex-row items-center justify-between w-full p-24">
              <div className="shadow-lg rounded-2xl w-[20vw] bg-white dark:bg-gray-800 p-4 border border-gray-300">
                <p className="dark:text-gray-50 text-4xl font-bold my-4 text-left px-4">
                  Free
                </p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold text-left px-4">
                  $0
                  <span className="text-gray-400 text-sm"> / month</span>
                </p>
                <p className="text-gray-600 dark:text-gray-100 px-4 text-left my-6 ">
                  For most businesses that want to optimize web queries.
                </p>
                <ul className="text-gray-600 dark:text-gray-100 w-full mb-6 py-4">
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    All illimited components
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Own custom Tailwind styles
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Unlimited Templates
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Free premium dashboard
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Best ranking
                  </li>
                  <li className="mb-3 flex items-center opacity-50">
                    <XCircleIcon className="w-6 text-red-500 mr-2" />
                    Prenium svg
                  </li>
                </ul>
                <button
                  type="button"
                  className="flex w-full mt-8 mb-4 text-center justify-center py-2 text-white bg-black rounded
                    hover:bg-opacity-90 active:scale-95 text-lg font-medium"
                >
                  Choose plan
                </button>
              </div>
              <div className="shadow-lg rounded-2xl w-[20vw] bg-white dark:bg-gray-800 p-4 border border-gray-300">
                <p className="dark:text-gray-50 text-4xl font-bold my-4 text-left px-4">
                  Pro
                </p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold text-left px-4">
                  $0
                  <span className="text-gray-400 text-sm"> / month</span>
                </p>
                <p className="text-gray-600 dark:text-gray-100 px-4 text-left my-6 ">
                  For most businesses that want to optimize web queries.
                </p>
                <ul className="text-gray-600 dark:text-gray-100 w-full mb-6 py-4">
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    All illimited components
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Own custom Tailwind styles
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Unlimited Templates
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Free premium dashboard
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Best ranking
                  </li>
                  <li className="mb-3 flex items-center opacity-50">
                    <XCircleIcon className="w-6 text-red-500 mr-2" />
                    Prenium svg
                  </li>
                </ul>
                <button
                  type="button"
                  className="flex w-full mt-8 mb-4 text-center justify-center py-2 text-white bg-black rounded
                    hover:bg-opacity-90 active:scale-95 text-lg font-medium"
                >
                  Choose plan
                </button>
              </div>
              <div className="shadow-lg rounded-2xl w-[20vw] bg-white dark:bg-gray-800 p-4 border border-gray-300">
                <p className="dark:text-gray-50 text-4xl font-bold my-4 text-left px-4">
                  Lifetime
                </p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold text-left px-4">
                  $0
                  <span className="text-gray-400 text-sm"> / month</span>
                </p>
                <p className="text-gray-600 dark:text-gray-100 px-4 text-left my-6 ">
                  For most businesses that want to optimize web queries.
                </p>
                <ul className="text-gray-600 dark:text-gray-100 w-full mb-6 py-4">
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    All illimited components
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Own custom Tailwind styles
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Unlimited Templates
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Free premium dashboard
                  </li>
                  <li className="mb-3 flex items-center ">
                    <CheckCircleIcon className="w-6 text-emerald-500 mr-2" />
                    Best ranking
                  </li>
                  <li className="mb-3 flex items-center opacity-50">
                    <XCircleIcon className="w-6 text-red-500 mr-2" />
                    Prenium svg
                  </li>
                </ul>
                <button
                  type="button"
                  className="flex w-full mt-8 mb-4 text-center justify-center py-2 text-white bg-black rounded
                    hover:bg-opacity-90 active:scale-95 text-lg font-medium"
                >
                  Choose plan
                </button>
              </div>{" "}
            </div>
          </div>
          <div
            id={"banner"}
            className="relative flex flex-col justify-start w-full bg-white flex-1 my-24 px-48 text-center"
          >
            {/*  Banner*/}
            <div className="flex flex-col justify-start w-full h-fit bg-black flex-1 px-20 text-center py-24 ">
              <h1 className="flex text-center justify-center text-6xl font-bold select-none text-white">
                Banner
              </h1>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
