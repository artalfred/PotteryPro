import React, { useContext } from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import HeroSection from "../Reusable/HeroSection";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import GeneralSection from "../Reusable/GeneralSection";
import styled from "styled-components";
import { UserContext } from "../../context/userContext";
import NotFound from "../Components/NotFound";

export default function Confirmation() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className="grid">
          <HeroContainerPage backgroundImage={HeroCourses}>
            <HeroSection
              Title={"Ceramic Courses to Jumpstart Your Creativity"}
              Description={
                "Welcome to Artful PotteryPro, where artistry meets functionality. Explore our collection of meticulously crafted ceramics, blending tradition with modernity. From elegant dinnerware to bespoke art pieces, discover the beauty of ceramics that redefine your space. Welcome to a world of endless possibilities in ceramics."
              }
              TextColor={"text-white"}
            />
          </HeroContainerPage>
          <GeneralSection backgroundColor={"#fffcf9"}>
            <div
              className="container mx-auto 2xl:mt-[-15rem] lg:mt-[-10rem] md:mt-[-8rem] sm:mt-[-16rem] mt-[-14rem] rounded-lg py-[2rem] 2xl:py-[4rem] lg:py-[4rem] md:py-[2rem] sm:py-[2rem] 2xl:px-[8rem] lg:px-[4rem] md:px-[2rem] sm:px-[2rem] px-[2rem]"
              style={{ backgroundColor: "#ede4db" }}
            >
              <h4 className="text-4xl font-semibold brown-dark pb-5 text-center">
                Thank You!
              </h4>
              <p className="brown-dark text-[16px] pb-8 Dm-body text-center">
                Your reservation has been received. We'll be in touch soon!
              </p>
            </div>
          </GeneralSection>
        </div>
      ) : (
        <HeroContainerPage backgroundImage={HeroCourses}>
          <NotFound />
        </HeroContainerPage>
      )}
    </>
  );
}

const SubmitButton = styled.button`
  padding: 0.6rem 1rem 0.6rem 1rem;
  background-color: #543115;
  color: #fff;
  width: 8rem;
  border-radius: 28px;
`;
