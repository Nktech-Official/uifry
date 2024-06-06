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
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center  relative w-full">
          <div className="absolute right-10 top-2 z-[-1]">
            <Dot />
          </div>

          <div className="ml-[30px] mt-[50px] lg:ml-[250px] lg:mt-[150px] ">
            <h1 className="text-4xl md:text-7xl  capitalize text-wrap font-bold">
              make the best financial decisions
            </h1>
            <p className="capitalize mt-10">
              cim et convallis risus placerat aliquam,nunc. scelerisque aliquet
              faucibs tincidunt eu adipiscing socils arcu lorem porttitor
            </p>
            <div className="flex mt-8">
              <button className="w-44 mr-4 h-12 flex py-8   right-0 bg-black rounded text-white font-bold text-center  items-center justify-center">
                <span className="mr-4">Get Started</span>
                <Arrow />
              </button>
              <button className="w-44 h-12 py-8 flex font-medium text-center  items-center justify-center">
                <PlayIcon />
                <span className="ml-4">Watch Video</span>
              </button>
            </div>
            <div className="relative mt-10">
              <Star3 className="absolute left-[150px] top-[50px]" />

              <Label />
            </div>
          </div>
        </div>
        <div className="flex-1 h-full w-full  flex items-center justify-start mt-[50px] lg:mt-0">
          <div className="relative h-[700px] w-[660px] ">
            <Star4 className="absolute bottom-[50px] left-[120px]" />
            {/* <DotBasePhone className="absolute w-[500px] h-[765px] left-[40px] bottom-0" /> */}

            <Image
              className="absolute left-[110px] top-[70px]"
              alt="base"
              src={DotBase}
              width={568}
              height={765}
            />

            <div className="absolute w-[400px] h-[800px] top-[80px] left-[260px]">
              <PhoneLast width="400" height="800" />
            </div>
            <div className="absolute w-[400px] h-[800px] left-[130px]">
              <PhoneMiddle width="400" height="800" />
            </div>
            <div className="absolute w-[400px] h-[800px] top-[-100px]">
              <PhoneTop width="400" height="800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
