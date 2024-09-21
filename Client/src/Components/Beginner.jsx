import React, { useContext } from "react";
import GeneralSection from "../Reusable/GeneralSection";
import HeroSection from "../Reusable/HeroSection";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import { UserContext } from "../../context/userContext";

export default function Beginner() {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeroContainerPage backgroundImage={HeroCourses}>
        <HeroSection
          Title={"Beginner Courses to Jumpstart Your Creativity"}
          Description={
            "Welcome to Artful PotteryPro, where artistry meets functionality. Explore our collection of meticulously crafted ceramics, blending tradition with modernity. From elegant dinnerware to bespoke art pieces, discover the beauty of ceramics that redefine your space. Welcome to a world of endless possibilities in ceramics."
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
              <li>Introduction to Ceramics</li>
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Understanding the basics of ceramics
                </li>
                <li className="text-[18px]">
                  Introduction to different types of clay
                </li>
                <li className="text-[18px]">
                  Overview of ceramic tools and equipment
                </li>
                <li className="text-[18px]">
                  Safety precautions in ceramic studios
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Handbuilding Techniques
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Pinching: Creating forms by pinching clay between fingers
                </li>
                <li className="text-[18px]">
                  Coiling: Building forms by stacking coils of clay
                </li>
                <li className="text-[18px]">
                  Slab building: Constructing forms using rolled-out slabs of
                  clay
                </li>
                <li className="text-[18px]">
                  Sculpting: Shaping clay to create three-dimensional forms
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Wheel Throwing
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Centering: Techniques for centering clay on the pottery wheel
                </li>
                <li className="text-[18px]">
                  Opening: Creating an opening in centered clay to form vessels
                </li>
                <li className="text-[18px]">
                  Pulling: Pulling up clay to form walls of vessels
                </li>
                <li className="text-[18px]">
                  Trimming: Techniques for trimming excess clay and refining
                  forms on the wheel
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Surface Decoration
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Glazing: Introduction to glazes and glazing techniques
                </li>
                <li className="text-[18px]">
                  Underglazes: Using underglazes for colorful decoration
                </li>
                <li className="text-[18px]">
                  Carving: Carving designs into leather-hard clay clay
                </li>
                <li className="text-[18px]">
                  Slip Decorating: Applying slip for texture and design
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Studio Practices and Maintenance
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Proper storage of clay, tools, and finished pieces
                </li>
                <li className="text-[18px]">
                  Maintenance of pottery wheels, kilns, and other equipment
                </li>
                <li className="text-[18px]">
                  Organizing and managing workspace efficiently
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Project-Based Courses
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Creating functional pottery: Cups, bowls, plates, etc.
                </li>
                <li className="text-[18px]">
                  Themed projects: Seasonal or cultural themes for creative
                  exploration
                </li>
                <li className="text-[18px]">
                  Personal projects: Guided assistance for individual project
                  ideas
                </li>
              </ul>
            </li>
            <li className="2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl brown-dark ">
              Community and Continuing Education Programs
              <ul className="mt-3 grid gap-0">
                <li className="text-[18px]">
                  Local community centers offering beginner ceramic courses
                </li>
                <li className="text-[18px]">
                  Underglazes: Using unContinuing education programs at colleges
                  or universities derglazes for colorful decoration
                </li>
                <li className="text-[18px]">
                  Workshops and seminars conducted by experienced ceramic
                  artists
                </li>
                <li className="text-[18px]">
                  Online courses and tutorials for remote learning opportunities
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </GeneralSection>
    </>
  );
}
