import React, { useContext } from "react";
import HeroContainerPage from "./HeroContainerPage";
import HeroSection from "./HeroSection";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import GeneralSection from "./GeneralSection";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import NotFound from "../Components/NotFound";

export default function Form() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const confirmation = () => {
    navigate("/confirmation");
    window.location.reload();
  };

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
              <h4 className="text-4xl font-semibold brown-dark pb-5">
                Reservation Enrollment Form
              </h4>
              <p className="brown-dark text-[16px] pb-8 Dm-body">
                Complete the form below to reserve your spot in our upcoming
                ceramic course. Simply provide your contact information and
                agree to our terms and conditions to secure your enrollment. We
                look forward to welcoming you to our creative community!
              </p>
              <form onSubmit={confirmation} className="grid gap-2">
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="Phone number"
                    required
                  />
                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="Email address"
                    required
                  />
                </div>

                <textarea
                  type="text"
                  className="py-3 rounded-md h-[8rem] px-6 mt-3 w-full"
                  placeholder="Comments"
                />

                <div className="flex items-center justify-start gap-4 mt-1">
                  <input type="checkbox" class="default:ring-2" required />
                  <label for="terms">
                    I agree to the terms and conditions.
                  </label>
                </div>

                <div className="flex justify-center mt-4">
                  <SubmitButton type="submit" className="btnDark">
                    Submit
                  </SubmitButton>
                </div>
              </form>
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
