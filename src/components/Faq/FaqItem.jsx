import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-3 m-1 lg:p-5 border-b-[1px] border-[#D9DCE2] mb-5 ">
      <div className="flex items-center justify-between gap-5">
        <h4
          className={`${
            isOpen && " text-textColor"
          } text-[18px] leading-7 lg:text-[24px] lg:leading-8 text-[#187F6B]`}
        >
          {item?.title}
        </h4>
        <div
          onClick={toggleAccordion}
          className={`${
            isOpen && " text-textColor"
          } bg-[#dcfff871] cursor-pointer w-7 h-7 lg:w-8 lg:h-8 text-[#187F6B] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 ml-4 border-l-[3px] border-[#187F6B] animate-fade-in">
          <div className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            <div className="ml-4 ">
              {item?.desc ? item?.desc : item?.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
