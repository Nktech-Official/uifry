import React from "react";
import FeaturePhone from "./FeaturePhone";
import { StarFeature } from "./Stars";
import FeatureDot from "./FeatureDot";
import AdvantagePhone from "./AdvantangePhone";

export default function Features() {
  return (
    <>
      <div className=" mt-10 flex">
        <div className="h-full w-1/2 flex justify-center relative">
          <StarFeature className="absolute left-10 top-14" />
          <FeatureDot className="absolute z-[-1] left-[30px]" />
          <FeaturePhone />
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <div className="h-5/6 w-5/6 ">
            <h3 className="text-[#FF5555] font-medium text-xl">FEATURES</h3>
            <h3 className="capitalize text-5xl font-bold mt-3">
              uifry premium
            </h3>
            <div className=" mt-14">
              <>
                <h3 className="capitalize flex items-center ">
                  <svg
                    className="mr-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                      stroke="#FF5555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-bold text-xl">budgeting intervals</span>
                </h3>
                <p className="text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore illum tempora fugiat voluptate voluptas? Et itaque ex
                  porro consectetur blanditiis?
                </p>
              </>
              <>
                <h3 className="capitalize flex items-center mt-10">
                  <svg
                    className="mr-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.50002V12M12 12L20.5 7.27773M12 12L3.5 7.27773M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1954 12.2015 12.1645C12.0685 12.1371 11.9315 12.1371 11.7986 12.1645C11.6484 12.1954 11.5066 12.2741 11.223 12.4317L3.5 16.7222M21 16.0586V7.94147C21 7.59883 21 7.4275 20.9495 7.27471C20.9049 7.13953 20.8318 7.01545 20.7354 6.91076C20.6263 6.79242 20.4766 6.70922 20.177 6.54282L12.777 2.43171C12.4934 2.27415 12.3516 2.19537 12.2015 2.16448C12.0685 2.13715 11.9315 2.13715 11.7986 2.16448C11.6484 2.19537 11.5066 2.27415 11.223 2.43171L3.82297 6.54282C3.52345 6.70922 3.37369 6.79242 3.26463 6.91076C3.16816 7.01545 3.09515 7.13953 3.05048 7.27471C3 7.42751 3 7.59883 3 7.94147V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8356C11.9315 21.8629 12.0685 21.8629 12.2015 21.8356C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
                      stroke="#FF5555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-bold text-xl">budgeting intervals</span>
                </h3>
                <p className="text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore illum tempora fugiat voluptate voluptas? Et itaque ex
                  porro consectetur blanditiis?
                </p>
              </>
              <>
                <h3 className="capitalize flex items-center mt-10">
                  <svg
                    className="mr-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
                      stroke="#FF5555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="font-bold text-xl">budgeting intervals</span>
                </h3>
                <p className="text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore illum tempora fugiat voluptate voluptas? Et itaque ex
                  porro consectetur blanditiis?
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-row-reverse">
        <div className="h-full w-1/2 flex justify-center relative">
          <StarFeature className="absolute left-10 top-14" />
          <FeatureDot className="absolute z-[-1] left-[30px]" />
          <AdvantagePhone />
        </div>
        <div className="h-full w-1/2 flex justify-center items-center ">
          <div className="h-5/6 w-4/6 ">
            <h3 className="text-[#FF5555] font-medium text-xl">ADVANTAGES</h3>
            <h3 className="capitalize text-5xl font-bold mt-3">
              Why Choose Uifry?
            </h3>
            <div className="mt-14 w-5/6">
              <>
                <h3 className="capitalize flex items-center ">
                  <svg
                    className="mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="49"
                    fill="none"
                    viewBox="0 0 48 49"
                  >
                    <circle cx="24" cy="24.488" r="24" fill="#F55"></circle>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M26 33.488h-4m8-13a6 6 0 10-12 0c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H30.61c1.196 0 1.795 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936-.87-1.399-1.65-3.515-1.65-6.605z"
                    ></path>
                  </svg>

                  <span className="font-bold text-2xl">
                    clever notifications
                  </span>
                </h3>
                <p className="text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore illum tempora fugiat voluptate voluptas? Et itaque ex
                  porro consectetur blanditiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Inventore quis distinctio
                  corporis non at vitae sit rem possimus, aut sint.
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex">
        <div className="h-full w-1/2 flex justify-center relative">
          <StarFeature className="absolute left-10 top-14" />
          <FeatureDot className="absolute z-[-1] left-[30px]" />
          <FeaturePhone />
        </div>
        <div className="h-full w-1/2 flex justify-center items-center ">
          <div className="h-5/6 w-4/6 ">
            <div className="mt-14 w-5/6">
              <>
                <h3 className="capitalize flex items-center ">
                  <svg
                    className="mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="49"
                    fill="none"
                    viewBox="0 0 48 49"
                  >
                    <circle cx="24" cy="24.976" r="24" fill="#F55"></circle>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M24 14.976l-1.302 5.206c-.253 1.016-.38 1.524-.645 1.937a3 3 0 01-.91.91c-.413.265-.921.392-1.937.646L14 24.976l5.206 1.302c1.016.254 1.524.38 1.937.645.366.234.676.544.91.91.265.413.392.921.645 1.937L24 34.976l1.302-5.206c.253-1.016.38-1.524.645-1.937.234-.366.544-.676.91-.91.413-.264.921-.391 1.937-.645L34 24.976l-5.206-1.301c-1.016-.254-1.524-.381-1.937-.646a3 3 0 01-.91-.91c-.265-.413-.392-.921-.645-1.937L24 14.976z"
                    ></path>
                  </svg>

                  <span className="font-bold text-2xl">
                    fully coustomizable
                  </span>
                </h3>
                <p className="text-xl mt-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore illum tempora fugiat voluptate voluptas? Et itaque ex
                  porro consectetur blanditiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Inventore quis distinctio
                  corporis non at vitae sit rem possimus, aut sint.
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
