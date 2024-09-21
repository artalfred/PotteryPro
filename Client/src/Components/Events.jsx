import React from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import HeroSection from "../Reusable/HeroSection";
import Title from "../Reusable/Title";
import GeneralSection from "../Reusable/GeneralSection";
import Button from "../Reusable/Button";
import HeroEvents from "../assets/Events/HeroEvents.jpg";
import Content from "../Reusable/Content";
import Section from "../Reusable/Section";
import IconsListMobile from "../Reusable/IconsListMobile";
import IconListLaptop from "../Reusable/IconListLaptop";
import AboutUsOne from "../assets/About/AboutUsOne.jpg";
import HeroCourse from "../assets/Courses/HeroCourses.jpg";
import CourseImage from "../assets/Courses/CoursesImage.jpg";

export const Events = () => {
  return (
    <div className="w-full">
      <HeroContainerPage backgroundImage={HeroEvents}>
        <HeroSection
          SubTitle={"GET  STARTED WITH POTTERY"}
          Title={"Fell Good Pottery Events For Beginners"}
          Description={
            "Unlock your creativity and embrace the art of pottery with our diverse range of events. From introductory workshops to specialized masterclasses, embark on a journey of inspiration and skill-building. Explore our offerings and ignite your passion for pottery today!"
          }
          TextColor={"text-white"}
        />
      </HeroContainerPage>

      <GeneralSection backgroundColor={"#ede4db"}>
        <Title
          SubTitle={"JOIN AND GET TO KNOW US"}
          Title={"Upcoming Pottery Events"}
          Class={"text-center brown-dark"}
        />

        <div className="grid gap-6 items-center justify-center grid-cols-1 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-white p-[1rem] rounded-md">
            <ul className="text-start brown-dark mt-4 text-2xl font-medium">
              <li>04/05/2024</li>
              <li>Introduction To Pottery</li>
            </ul>

            <ul className="text-start brown-dark text-1xl font-medium mt-4">
              <li className="">Location: Philippines</li>
              <li className="">Instructor: Art Alfred</li>
              <li className="">Price: 250 PHP</li>
            </ul>

            <div className="flex justify-start mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                color={"white"}
                btnLink={"/signUp"}
              />
            </div>
          </div>
          <div className="bg-white p-[1rem] rounded-md">
            <ul className="text-start brown-dark mt-4 text-2xl font-medium">
              <li>04/22/2024</li>
              <li>Mindfulness Pottery Practices</li>
            </ul>

            <ul className="text-start brown-dark text-1xl font-medium mt-4">
              <li className="">Location: Philippines</li>
              <li className="">Instructor: Andrea</li>
              <li className="">Price: 400 PHP</li>
            </ul>

            <div className="flex justify-start mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                btnColor={"white"}
                color={"white"}
                btnLink={"/signUp"}
              />
            </div>
          </div>
          <div className="bg-white p-[1rem] rounded-md">
            <ul className="text-start brown-dark mt-4 text-2xl font-medium">
              <li>05/05/2024</li>
              <li>Calming Ceramis Painting</li>
            </ul>

            <ul className="text-start brown-dark text-1xl font-medium mt-4">
              <li className="">Location: Philippines</li>
              <li className="">Instructor: Cath</li>
              <li className="">Price: 300 PHP</li>
            </ul>

            <div className="flex justify-start mt-4">
              <Button
                btnBackground={"brown"}
                btnName={"JOIN COURSE"}
                btnHover={"btnDark"}
                btnColor={"white"}
                color={"white"}
                btnLink={"/signUp"}
              />
            </div>
          </div>
        </div>
      </GeneralSection>

      <HeroContainerPage backgroundImage={CourseImage}>
        <div className="mt-[-7rem]">
          <HeroSection
            Title={
              '"By Far My Favorite Way To Calm My Mind And Experience Mindfulness"'
            }
            Description={"Art Alfred Bernales"}
            TextColor={"text-white"}
            SectionName={"Section"}
          />
        </div>
      </HeroContainerPage>

      <div className="2xl:mt-[-8rem] lg:mt-[-8rem] mt-[-8rem] 2xl:pb-[8rem] lg:pb-[8rem md:pb-[6rem] sm:pb-[0rem] pb-[0rem]">
        <Section>
          <div className="relative">
            <div className="2xl:block lg:block md:hidden sm:hidden hidden">
              <img src={AboutUsOne} />
            </div>

            <div className="2xl:px-[3rem] lg:px-[3rem] md:px-[2rem] sm:px-[1rem] px-[1rem] py-[3rem] pb-[4rem] flex items-center brown-light w-full 2xl:w-[37rem] lg:w-[40rem] md:8/12 2xl:h-[40rem] 2xl:top-[4rem] lg:top-[4rem] 2xl:left-[20rem] lg:left-[20rem] left-0 2xl:mt-[0rem] lg:mt-[0rem] md:mt-[4rem] sm:mt-[4rem] mt-[4rem] 2xl:absolute lg:absolute md:static sm:static static">
              <div className="grid">
                <Content
                  Title={
                    "Our Little Sanctuary In The heart Of Art & Our Commitment To Help The Community"
                  }
                  DescriptionOne={
                    "Discover our sanctuary nestled in the heart of art, where creativity thrives and community flourishes. With a steadfast commitment to uplifting our community, we strive to make a positive impact through art, collaboration, and support."
                  }
                  DescriptionTwo={
                    "Join us in fostering connections, celebrating diversity, and spreading joy through our shared passion for creativity."
                  }
                />

                <div className="2xl:block lg:block md:hidden sm:hidden hidden">
                  <IconListLaptop
                    IconOne={"ECO-FRIENDLY"}
                    IconTwo={"SUPPORT LOCALS"}
                    IconThree={"DONATES REGULARLY"}
                    IconFour={"CHARITY ART-FAIR"}
                  />
                </div>

                <div className="2xl:hidden lg:hidden md:block sm:block block">
                  <IconsListMobile
                    IconOne={"ECO-FRIENDLY"}
                    IconTwo={"SUPPORT LOCALS"}
                    IconThree={"DONATES REGULARLY"}
                    IconFour={"CHARITY ART-FAIR"}
                    Class={"brown-dark"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};
