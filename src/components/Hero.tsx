import React from "react";
import { Star1, Star2, Star3, Star4 } from "@/components/Stars";
import Dot from "./Dot";
import PlayIcon from "./PlayIcon";
import Arrow from "./Arrow";
import Label from "./Label";
import DotBase from "@/assets/DotBase.png";
import PhoneLast from "./PhoneLast";
import PhoneMiddle from "./PhoneMiddle";
import PhoneTop from "./PhoneTop";
import DotBasePhone from "./DotBasePhone";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh - 80px) ">
      <Star1 className="absolute left-4 top-[100px]" />
      <Star2 className="absolute right-[55px] top-[30px]" />
      <div className="flex container h-full m-auto flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex justify-start   relative">
          <div className="absolute right-10 top-2 z-[-1]">
            <Dot />
          </div>

          <div className="ml-[30px] xl:ml-[30px] mt-[50px] lg:mt-[150px] w-full">
            <h1 className="text-4xl xl:text-7xl  capitalize text-wrap font-bold">
              make the best financial decisions
            </h1>
            <p className="capitalize mt-10 text-wrap">
              cim et convallis risus placerat aliquam,nunc. scelerisque aliquet
              faucibs tincidunt eu adipiscing socils arcu lorem porttitor
            </p>
            <div className="flex mt-8">
              <button className="sm:w-44 sm:mr-4 mr-2 h-12 flex sm:py-8 py-4 px-2   right-0 bg-black rounded text-white font-bold text-center  items-center justify-center">
                <span className="mr-4 text-xs sm:text-base">Get Started</span>
                <Arrow />
              </button>
              <button className="sm:w-44 h-12 sm:py-8 py-4 px-2 flex font-medium text-center  items-center justify-center">
                <PlayIcon />
                <span className="ml-4 text-xs sm:text-base">Watch Video</span>
              </button>
            </div>
            <div className="relative mt-10 max-w-full">
              <Star3 className="absolute left-[150px] top-[50px]" />

              <Label />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-[500px] sm:h-[600] md:h-[700px] m-auto w-full lg:block mt-[10px] lg:mt-0">
          <div className="relative h-full w-full">
            <Star4 className="absolute bottom-[50px] left-[120px]" />
            {/* <DotBasePhone className="absolute w-[500px] h-[765px] left-[40px] bottom-0" /> */}

            <Image
              className="absolute w-[40px] lg:w-[300px] lg:top-[200px] left-[80px] xl:w-[568px] xl:left-[110px] xl:top-[40px]"
              alt="base"
              src={DotBase}
              width={568}
              height={765}
            />

            <div className="absolute w-[220px] left-[140px] top-[-120px] sm:w-[350px] sm:left-[220px] sm:top-[-80px] md:w-[400px] md:top-[30px] md:left-[300px] lg:left-[210px] xl:w-[400px] xl:h-[800px] xl:top-[80px] xl:left-[260px]">
              <PhoneLast width="400" height="800" />
            </div>
            <div className="absolute w-[220px] left-[70px] top-[-160px] sm:w-[350px] sm:left-[110px] sm:top-[-140px] md:w-[400px] md:top-[-50px] md:left-[170px] lg:left-[130px] lg:top-[-50px] xl:w-[400px] xl:h-[800px] xl:left-[130px]">
              <PhoneMiddle width="400" height="800" />
            </div>
            <div className="absolute w-[220px]  top-[-200px] sm:w-[350px] md:w-[400px] md:top-[-130px] md:left-[50px] lg:left-[50px] xl:w-[400px] xl:h-[800px] xl:left-[0px]  lg:top-[-100px]">
              <PhoneTop width="400" height="800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
