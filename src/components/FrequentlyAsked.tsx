import React from "react";
import { FAQ, faq } from "@/app/data/Faq";

export default function FrequentlyAsked() {
  return (
    <div className="container sm:m-auto mb-10">
      <p className="text-rose-500 ml-4 text-lg font-medium uppercase leading-7 tracking-widest">
        faq
      </p>
      <p className="w-fit text-black text-5xl ml-4 font-bold font-['Clash Display'] capitalize leading-10">
        Frequently asked questions
      </p>

      <div className="grid grid-cols-1 w-[90%] m-auto gird-rows-6  sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 mt-10">
        {FAQ.map((faq, index) => (
          <FaqItem {...faq} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
interface FaqItemProps extends faq {
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  const rowIndex = Math.floor(index / 2); // Calculate row index
  const colIndex = index % 2; // Calculate column index
  function getBackgroundColorSm(rowIndex: number, colIndex: number) {
    if (rowIndex % 2 !== 0) {
      return colIndex % 2 === 0
        ? { bg: "sm:bg-white", text: "sm:text-black" }
        : { bg: "sm:bg-[#FF5555]", text: "sm:text-white" };
    } else {
      return colIndex % 2 === 0
        ? { bg: "sm:bg-[#FF5555]", text: "sm:text-white" }
        : { bg: "sm:bg-white", text: "sm:text-black" };
    }
  }
  function getBackgroundColor(index: number) {
    if (index % 2 === 0) return { bg: "bg-[#FF5555]", text: "text-white" };
    return { bg: "bg-white", text: "text-black" };
  }
  const colorSm = getBackgroundColorSm(rowIndex, colIndex);
  const color = getBackgroundColor(index);

  return (
    <div
      className={`${color.bg} ${color.text} ${colorSm.bg} ${colorSm.text} p-8 sm:p-4 md:p-10 rounded-3xl `}
    >
      <h1 className="text-3xl font-semibold font-['Clash Display'] capitalize leading-7">
        {question}
      </h1>
      <p className="text-justify text-lg font-medium font-['Clash Display'] capitalize leading-7 mt-4">
        {answer}
      </p>
    </div>
  );
};
