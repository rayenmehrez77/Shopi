import React from "react";
import { ReactComponent as SendIcon } from "../send.svg";

const ContactPage = () => {
  return (
    <div className="border-t-2  text-center bg-gray-100 pb-16 ">
      <div className="bg-gray-200 py-9">
        <h1 className="lg:text-3xl font-bold text-gray-800 uppercase text-xl">
          Contact us
        </h1>
      </div>
      <div className="w-4/5 bg-white border rounded shadow-inner min-h-screen md:mx-auto mx-8 mt-12 p-8 text-left">
        <p className="max-w-md text-left font-medium text-gray-600">
          You can send your questions by filling out the form below and we will
          get back to you as soon as possible.
        </p>
        <div className="flex flex-wrap">
          <form className="lg:max-w-xl lg:flex-1 w-full pt-9 box-border">
            <div className="pb-4">
              <label htmlFor="name" className="mb-2 font-medium text-gray-600">
                Name<span className="text-red-500 font-medium">*</span>
              </label>
              <input
                required
                type="text"
                className="py-2 w-full border  rounded mt-2 outline-none pl-3"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="name" className="mb-2 font-medium text-gray-600">
                Your e-mail<span className="text-red-500 font-medium">*</span>
              </label>
              <input
                required
                type="text"
                className="py-2 w-full border rounded mt-2 outline-none pl-3"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="name" className="mb-2 font-medium text-gray-600">
                Phone number
                <span className="text-red-500 font-medium">*</span>
              </label>
              <input
                required
                type="text"
                className="py-2 w-full border rounded mt-2 outline-none pl-3"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="name" className="mb-2 font-medium text-gray-600">
                Subject
                <span className="text-red-500 font-medium">*</span>
              </label>
              <input
                required
                type="text"
                className="py-2 w-full border rounded mt-2 outline-none pl-3"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="name" className="mb-2 font-medium text-gray-600">
                Subject body
                <span className="text-red-500 font-medium">*</span>
              </label>
              <textarea
                required
                placeholder="Your message here..."
                className="py-4
                font-medium
                w-full
                border
                rounded
                mt-2
                outline-none
                pl-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="red-btn text-white w-full flex justify-center items-center my-4 text-lg capitalize"
            >
              Send
              <SendIcon className="w-4 h-4 ml-2 " />
            </button>
          </form>
          <div className="border lg:mx-8 lg:h-96 min-w-min my-auto flex-col lg:p-16 sm:p-8 p-4 lg:flex-1 w-full  pb-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/images/message.svg"
                  alt="message logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-medium text-red-500">
                  Email: info@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/images/message.svg"
                  alt="message logo"
                  className="h-8 w-8  mr-2"
                />
                <span className="font-medium text-red-500">
                  Phone: +21692183047
                </span>
              </div>
            </div>
            <p className="py-6 max-w-sm lg:text-xl text-gray-700 font-medium text-md">
              You can also follow us or contact us on our social network
              channels
            </p>
            <div className="flex items-center space-x-4 border-t pt-4 w-full">
              <a
                href="/"
                className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
              >
                <img
                  src="/images/vector-1.svg"
                  alt="logo"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="/"
                className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
              >
                <img
                  src="/images/vector-2.svg"
                  alt="logo"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="/"
                className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
              >
                <img
                  src="/images/vector-3.svg"
                  alt="logo"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="/"
                className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
              >
                <img src="/images/vector.svg" alt="logo" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
