import React from "react";
import Button from "./Button";

function Content({
  subTitle,
  Title,
  DescriptionOne,
  DescriptionTwo,
  DescriptionThree,
  btnName,
  btnBackground,
  btnColor,
  btnHover,
  Class,
  btnLink,
}) {
  return (
    <div className="w-full">
      <h6 className={`${Class}`}>{subTitle}</h6>
      <h2 className={`brown-dark text-3xl md:text-4xl 2xl:text-5xl mt-4`}>
        {Title}
      </h2>
      <p className={`mt-4 brown-dark Dm-body `}>{DescriptionOne}</p>

      <p className="mt-4 brown-dark Dm-body">{DescriptionTwo}</p>

      <p className={`mt-${!btnName ? 0 : 4}  Dm-body`}>{DescriptionThree}</p>

      <div className={`mt-${!btnName ? 0 : 6} ${Class}`}>
        <Button
          btnName={btnName}
          btnBackground={btnBackground}
          color={btnColor}
          btnHover={btnHover}
          btnLink={btnLink}
        />
      </div>
    </div>
  );
}

export default Content;
