import React, { useContext } from "react";
import GeneralSection from "../Reusable/GeneralSection";
import HeroSection from "../Reusable/HeroSection";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import { UserContext } from "../../context/userContext";

export default function Advance() {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeroContainerPage backgroundImage={HeroCourses}>
        <HeroSection
          Title={"Advanced Ceramic Courses for Experienced Artists"}
          Description={
            "Explore intricate techniques, experimental glazing, and professional development. Join us to unlock new realms of creativity."
          }
          btnName={!!user ? "RESERVE YOUR SPOT" : "ENROLL NOW"}
          btnBackground={"light brown-dark"}
          btnHover={"btnLight"}
          TextColor={"text-white"}
          btnLink={!!user ? "/form" : "/register"}
        />
      </HeroContainerPage>
      <GeneralSection backgroundColor={"#fffcf9"}>
        <div
          className="container mx-auto 2xl:mt-[-15rem] lg:mt-[-10rem] md:mt-[-8rem] sm:mt-[-16rem] mt-[-14rem] rounded-lg py-[2rem] 2xl:py-[4rem] lg:py-[4rem] md:py-[2rem] sm:py-[2rem] 2xl:px-[8rem] lg:px-[4rem] md:px-[2rem] sm:px-[2rem] px-[2rem]"
          style={{ backgroundColor: "#ede4db" }}
        >
          <ul className="grid 2xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4 gap-2">
            <div className="items-center justify-between 2xl:flex lg:flex md:flex sm:grid grid">
              <li className="2xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold brown-dark ">
                WHAT YOU'LL LEARN
              </li>
              <li className="text-[20px] brown-dark font-bold">
                Face To Face Training
              </li>
            </div>
            <li className="mt-6 2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              <li>Advanced Techniques Mastery</li>
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">Advanced wheel throwing methods</li>
                <li className="text-[18px]">
                  Intricate handbuilding techniques
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Sculptural Exploration
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">Advanced sculpting and modeling</li>
                <li className="text-[18px]">
                  Incorporating mixed media into ceramic sculpture
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Experimental Surface Treatments
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Advanced glaze layering and effects
                </li>
                <li className="text-[18px]">
                  Innovative surface texture experimentation
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Kiln Firing Innovations
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Advanced firing techniques for unique results
                </li>
                <li className="text-[18px]">
                  Experimentation with alternative firing methods (e.g., Raku,
                  Saggar firing)
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Professional Development:
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Portfolio development and presentation
                </li>
                <li className="text-[18px]">
                  Marketing and selling ceramic artwork
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Specialized Workshops and Collaborations:
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Masterclass workshops with renowned ceramic artists
                </li>
                <li className="text-[18px]">
                  Collaborative projects with other mediums or disciplines
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </GeneralSection>
    </>
  );
}
