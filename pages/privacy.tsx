import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-[85.5vh] py-2 mt-20">
        <div className="flex flex-col items-center w-full px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center w-full max-w-2xl p-4 space-y-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-lg text-gray-500">Last updated: 2021-08-01</p>
          </div>
          <div className="flex flex-col items-center w-full max-w-4xl p-4 space-y-4 text-justify">
            <p className="text-lg text-gray-500">
              Your privacy is important to us. It is Our Website's policy to
              respect your privacy regarding any information we may collect from
              you across our website,{" "}
              <a href="https://www.ourwebsite.com" className="text-blue-500">
                https://www.ourwebsite.com
              </a>
              , and other sites we own and operate.
            </p>
            <p className="text-lg text-gray-500">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p className="text-lg text-gray-500">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </p>
            <p className="text-lg text-gray-500">
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </p>
            <p className="text-lg text-gray-500">
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
