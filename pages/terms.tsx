import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className={"min-h-screen"}>
      <Navbar />
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center justify-center w-full px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center w-full max-w-8xl p-4 space-y-4 ">
            <h1 className="text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-500">Last updated: 2021-08-01</p>
          </div>
          <div className="flex flex-col w-full max-w-4xl p-4 space-y-4 text-justify mb-16">
            <p className="text-lg text-gray-500">
              Please read these Terms of Service ("Terms", "Terms of Service")
              carefully before using the https://www.ourwebsite.com website (the
              "Service") operated by Our Website ("us", "we", or "our").
            </p>
            <p className="text-lg text-gray-500">
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p className="text-lg text-gray-500">
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Accounts</h2>
            <p className="text-lg text-gray-500">
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p className={"text-lg text-gray-500"}>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
            <p className={"text-lg text-gray-500"}>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Links To Other Web Sites
            </h2>
            <p className="text-lg text-gray-500">
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Our Website.
            </p>
            <p className="text-lg text-gray-500">
              Our Website has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services. You further acknowledge and agree
              that Our Website shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with use of or reliance on any such content,
              goods or services available on or through any such web sites or
              services.
            </p>
            <p className="text-lg text-gray-500">
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that you
              visit.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
            <p className="text-lg text-gray-500">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p className="text-lg text-gray-500">
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <p className="text-lg text-gray-500">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p className="text-lg text-gray-500">
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
            <p className="text-lg text-gray-500">
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            <p className="text-lg text-gray-500">
              These Terms shall be governed and construed in accordance with the
              laws of United States, without regard to its conflict of law
              provisions.
            </p>
            <p className="text-lg text-gray-500">
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Changes</h2>
            <p className="text-lg text-gray-500">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p className="text-lg text-gray-500">
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-500">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
