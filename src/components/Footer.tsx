import React from "react";
import Uifry from "./logo/Uifry";

export default function Footer() {
  return (
    <>
      <div className="container m-auto h-60 mt-44 flex justify-around">
        <div className="w-44">
          <Uifry />
          <div className="flex items-center mt-4">
            <svg
              className="mr-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9394 3.70898C18.2804 3.70898 19.5704 4.23898 20.5194 5.18998C21.4694 6.13898 22.0004 7.41898 22.0004 8.75898V16.659C22.0004 19.449 19.7304 21.709 16.9394 21.709H7.06043C4.26943 21.709 2.00043 19.449 2.00043 16.659V8.75898C2.00043 5.96898 4.25943 3.70898 7.06043 3.70898H16.9394ZM18.0704 8.90898C17.8604 8.89798 17.6604 8.96898 17.5094 9.10898L13.0004 12.709C12.4204 13.19 11.5894 13.19 11.0004 12.709L6.50043 9.10898C6.18943 8.87898 5.75943 8.90898 5.50043 9.17898C5.23043 9.44898 5.20043 9.87898 5.42943 10.179L5.56043 10.309L10.1104 13.859C10.6704 14.299 11.3494 14.539 12.0604 14.539C12.7694 14.539 13.4604 14.299 14.0194 13.859L18.5304 10.249L18.6104 10.169C18.8494 9.87898 18.8494 9.45898 18.5994 9.16898C18.4604 9.01998 18.2694 8.92898 18.0704 8.90898Z"
                fill="#FF5555"
              />
            </svg>{" "}
            <p className="font-medium">help@Flybix.com</p>
          </div>
          <div className="flex items-center mt-4 w-44">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="mr-2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z"
                fill="#FF5555"
              />
            </svg>

            <p className="font-medium">+1 234 456 678 89</p>
          </div>
        </div>
        <div className="w-40">
          <h1 className=" text-black text-[32px] font-medium font-['Clash Display'] capitalize leading-[42px]">
            links
          </h1>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">home</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">about us</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">bookings</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">blog</a>
          </p>
        </div>
        <div className="w-40">
          <h1 className=" text-black text-[32px] font-medium font-['Clash Display'] capitalize leading-[42px]">
            legal
          </h1>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">term of use</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">privacy policy</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">cookie policy</a>
          </p>
        </div>
        <div className="w-40">
          <h1 className=" text-black text-[32px] font-medium font-['Clash Display'] capitalize leading-[42px]">
            products
          </h1>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">take tour</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">live chat</a>
          </p>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            <a href="">reviews</a>
          </p>
        </div>
        <div className="w-40">
          <h1 className=" text-black text-[32px] font-medium font-['Clash Display'] capitalize leading-[42px]">
            newsletter
          </h1>
          <p className="text-black ml-1 my-5 text-lg font-medium font-['Clash Display'] capitalize leading-relaxed underline hover:text-blue-700">
            stay up to date
          </p>
          <form className="flex w-[400px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full mr-2"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="border mt-[50px] container m-auto" />
      <div className="container m-auto h-[90px] flex justify-center items-center">
        <p className="text-center font-medium text-2xl">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
}
