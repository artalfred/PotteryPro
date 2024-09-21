import React from "react";
import styled from "styled-components";

export default function Section({ children }) {
  return (
    <SectionContainer className="section py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[12rem]">
      <div className="container mx-auto grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center">
        {children}
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  background-color: #fffcf9;
`;
