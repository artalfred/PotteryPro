import React, { useContext } from "react";
import GeneralSection from "../Reusable/GeneralSection";
import HeroSection from "../Reusable/HeroSection";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import { UserContext } from "../../context/userContext";

export default function Master() {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeroContainerPage backgroundImage={HeroCourses}>
        <HeroSection
          Title={"Dive Deeper with Our Advanced Ceramic Masters Course"}
          Description={
            "Elevate your craft to mastery with our advanced ceramic masters course. Explore advanced techniques, refine your skills, and unleash your creative potential under expert guidance."
          }
          btnName={user ? "RESERVE YOUR SPOT" : "ENROLL NOW"}
          btnBackground={"light brown-dark"}
          btnHover={"btnLight"}
          TextColor={"text-white"}
          btnLink={user ? "/form" : "/register"}
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
              <li>Advanced Techniques Exploration</li>
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Dive into advanced wheel throwing and handbuilding methods
                </li>
                <li className="text-[18px]">
                  Master complex sculptural techniques for intricate creations
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Innovative Surface Design
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Experiment with cutting-edge glazing techniques for stunning
                  visual effects
                </li>
                <li className="text-[18px]">
                  Explore innovative surface treatments and texture
                  experimentation
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Creative Firing Methods
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Master advanced kiln firing techniques for precise control and
                  unique outcomes
                </li>
                <li className="text-[18px]">
                  Explore alternative firing methods such as Raku and Saggar
                  firing
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Conceptual Development
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Cultivate conceptual thinking and develop a cohesive artistic
                  vision
                </li>
                <li className="text-[18px]">
                  Learn to translate ideas into powerful ceramic expressions
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Professional Artistry
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Refine your portfolio and presentation skills to showcase your
                  mastery
                </li>
                <li className="text-[18px]">
                  Explore avenues for marketing, selling, and exhibiting your
                  artwork
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Collaborative Projects and Masterclasses
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Engage in collaborative projects with fellow artists for
                  mutual inspiration
                </li>
                <li className="text-[18px]">
                  Attend masterclass workshops led by renowned ceramic masters
                  for in-depth learning opportunities
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </GeneralSection>
    </>
  );
}
