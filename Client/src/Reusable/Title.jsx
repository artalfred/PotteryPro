import React from "react";

const Title = ({ Title, SubTitle, Class, TextColor }) => {
  return (
    <div className="w-full">
      <h6 className={`brown-sub-color ${Class}`}>{SubTitle}</h6>

      <div className="flex justify-center mt-3">
        <h2
          className={`${TextColor} ${Class} 2xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-full  lg:text-5xl md:text-4xl sm:text-3xl text-3xl`}
        >
          {Title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
