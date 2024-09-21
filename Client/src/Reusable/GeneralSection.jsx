import React from "react";
import styled from "styled-components";

const GeneralSectionContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
`;

export default function GeneralSection({ children, backgroundColor }) {
  return (
    <GeneralSectionContainer
      backgroundColor={backgroundColor}
      className="GeneralSection py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[12rem]"
    >
      <div className="container mx-auto grid gap-8 lg:gap-24 items-center">
        {children}
      </div>
    </GeneralSectionContainer>
  );
}
