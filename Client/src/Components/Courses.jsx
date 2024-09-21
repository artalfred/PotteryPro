import React from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import HeroCourses from "../assets/Courses/HeroCourses.jpg";
import HeroSection from "../Reusable/HeroSection";
import Title from "../Reusable/Title";
import GeneralSection from "../Reusable/GeneralSection";
import BeginnerCourse from "../assets/Courses/BeginnerCourse.jpg";
import AdvanceCourse from "../assets/Courses/AdvanceCourse.jpg";
import MasterCourse from "../assets/Courses/MasterCourse.jpg";
import Button from "../Reusable/Button";
import CourseImage from "../assets/Courses/CoursesImage.jpg";

export const Courses = () => {
  return (
    <div className="w-full">
      <HeroContainerPage backgroundImage={HeroCourses}>
        <HeroSection
          Title={"TAKE A COURSE IN POTTERY"}
          Description={
            "Discover the art of pottery with our diverse courses. From beginner basics to advanced techniques, unlock your creativity and master the craft with expert guidance. Explore our offerings and start your pottery journey today!"
          }
          TextColor={"text-white"}
        />
      </HeroContainerPage>

      <GeneralSection backgroundColor={"#ede4db"}>
        <Title
          SubTitle={"BOOK A COURSE"}
          Title={"Make Ceramics And Feel Much Better"}
          Class={"text-center brown-dark"}
        />

        <div className="grid gap-6 items-center justify-center grid-cols-1 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-white p-[1rem]">
            <img
              src={BeginnerCourse}
              alt="Beginner Courses"
              title="Beginner Courses"
            />

            <h6 className="text-center brown-dark mt-4 text-2xl font-medium">
              Beginner Course
            </h6>

            <div className="flex justify-center mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                btnColor={"white"}
                color={"white"}
                btnLink={"/beginner"}
              />
            </div>
          </div>
          <div className="bg-white p-[1rem]">
            <img
              src={AdvanceCourse}
              alt="Advance Courses"
              title="Advance Courses"
            />

            <h6 className="text-center brown-dark mt-4 text-2xl font-medium">
              Advance Course
            </h6>

            <div className="flex justify-center mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                btnColor={"white"}
                color={"white"}
                btnLink={"/advance"}
              />
            </div>
          </div>
          <div className="bg-white p-[1rem]">
            <img
              src={MasterCourse}
              alt="Master Courses"
              title="Master Courses"
            />

            <h6 className="text-center brown-dark mt-4 text-2xl font-medium">
              Master Course
            </h6>

            <div className="flex justify-center mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                btnColor={"white"}
                color={"white"}
                btnLink={"/masters"}
              />
            </div>
          </div>
        </div>
      </GeneralSection>

      <HeroContainerPage backgroundImage={CourseImage}>
        <HeroSection
          Title={
            '"By Far My Favorite Way To Calm My Mind And Experience Mindfulness"'
          }
          Description={"Art Alfred Bernales"}
          TextColor={"text-white"}
          SectionName={"Section"}
        />
      </HeroContainerPage>

      <HeroContainerPage BackgroundColor={"bg-semilight"}>
        <HeroSection
          Title={
            "I Love Writing About How Pottery Changed My Life For The Better"
          }
          Description={
            "Explore the transformative power of pottery through my personal journey. Discover how this ancient art form has brought joy, purpose, and fulfillment to my life."
          }
          TextColor={"brown-dark"}
          btnBackground={"brown"}
          btnName={"VISIT BLOG"}
          btnHover={"btnDark"}
          btnColor={"white"}
          SectionName={"Section"}
          btnLink={"/blog"}
        />
      </HeroContainerPage>
    </div>
  );
};
