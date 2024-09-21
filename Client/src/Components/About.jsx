import React from "react";
import styled from "styled-components";
import HeroSection from "../Reusable/HeroSection";
import AboutUs from "../assets/About/AboutUs.jpg";
import Content from "../Reusable/Content";
import AboutStarted from "../assets/About/AboutStarted.jpg";
import Title from "../Reusable/Title";
import AboutUsOne from "../assets/About/AboutUsOne.jpg";
import AboutUsTwo from "../assets/About/AboutUsTwo.jpg";
import AboutUsThree from "../assets/About/AboutUsThree.jpg";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import LearnImage from "../assets/Home/learnImage.jpg";
import AboutUsBeginners from "../assets/About/AboutUsBeginners.jpg";
import Section from "../Reusable/Section";
import PotteryCourse from "../assets/About/PotteryCourse.jpg";
import IconListLaptop from "../Reusable/IconListLaptop";
import IconsListMobile from "../Reusable/IconsListMobile";

function About() {
  return (
    <div>
      <HeroContainerPage backgroundImage={AboutUs}>
        <HeroSection
          Title={"All About PotteryPro Get To Know Us"}
          Description={
            "Dive into our world and discover the essence of our craft. From our beginnings to our passion for pottery, explore who we are and what drives us. Get to know us better and embark on a journey of creativity and inspiration."
          }
          TextColor={"text-white"}
        />
      </HeroContainerPage>

      <div className="container mx-auto">
        <div className="bg-semilight py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[12rem]">
          <div className="relative  grid 2xl:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            <div className="z-10 brown-light mt-[1.3rem] 2xl:ml-[8rem] lg:[5rem] md:ml-[0rem] sm:ml-[0rem] w-full 2xl:w-[35rem] lg:w-[35rem] md:w-full grid justify-center items-center">
              <div className="px-[2rem] 2xl:px-[3rem] lg:px-[3rem] md:px-[2rem] pt-[2rem] pb-[3rem]">
                <Content
                  Title={"It All Started With A Youtube Video In 2024"}
                  DescriptionOne={
                    "Captivating by the graceful artistry unfolding before her, our founder fell head over heels for pottery. Inspired by the therapeutic allure of clay, she embarked on a mission to share its magic with the world."
                  }
                  DescriptionTwo={
                    "Join us on a journey of self-discovery and relaxation as you mold, shape, and sculpt your worries away. Whether you're a seasoned ceramic artist or a curious beginner, our expert instructors will guide you through the process with warmth and encouragement."
                  }
                  btnName={"EXPLORE COURSES"}
                  btnBackground={"brown"}
                  btnColor={"white"}
                  btnHover={"btnDark"}
                  btnLink={"/courses"}
                />
              </div>
            </div>

            <div className="mt-6 2xl:block lg:block md:hidden hidden">
              <img src={AboutStarted} alt="What we offer?" />
            </div>
          </div>

          <div className="mt-[9rem] w-full grid justify-center items-center">
            <div className="w-full flex justify-center">
              <Title
                Title={"Now We Have The  Most Amazing Team"}
                SubTitle={"LOOK AT US NOW"}
                Class={"text-center"}
                TextColor={"brown-dark"}
              />
            </div>

            <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-7 mt-[4rem]">
              <div className="grid">
                <div>
                  <img src={AboutUsOne} alt="" />
                  <h6 className="mt-6 text-center text-2xl brown-dark font-semibold">
                    Emily Johnson
                  </h6>
                </div>
                <h6 className="text-center text-1xl brown-dark">
                  @EmilyJohnson
                </h6>
              </div>
              <div className="grid">
                <div>
                  <img src={AboutUsTwo} alt="" />
                  <h6 className="mt-6 font-semibold text-center text-2xl brown-dark">
                    Sophia Martinez
                  </h6>
                </div>
                <h6 className="text-center text-1xl brown-dark">
                  @SophiaMartinez
                </h6>
              </div>
              <div className="grid">
                <div>
                  <img src={AboutUsThree} alt="" />

                  <h6 className="mt-6 font-semibold text-center text-2xl brown-dark">
                    Ava Thompson
                  </h6>
                </div>
                <h6 className="text-center text-1xl brown-dark">
                  @AvaThompson
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-semilight  px-[1rem] md:px-[4rem] 2xl:px-[6rem]">
          <div className="container mx-auto brown-light grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center py-[2rem] md:py-[4rem] px-[2rem] md:px-[4rem] 2xl:px-[6rem]">
            <div>
              <img src={PotteryCourse} alt="Pottery Course" />
            </div>

            <Content
              subTitle={"LEARN WITH US"}
              Title={"Take A Pottery Course & Find Inner Peace"}
              DescriptionOne={
                "Indulge in a rejuvenating ceramic session designed to melt away the excess stress and transport you to a realm of tranquility and creativity. Immerse yourself in the therapeutic art of pottery, where every stroke of clay becomes a cathartic release, and every creation is a testament to your inner peace."
              }
              DescriptionTwo={
                "Imagine spending time in our artful studio, surrounded by like-minded individuals, as you learn the therapeutic techniques of molding clay into beautiful works of art."
              }
              btnName={"EXPLORE"}
              btnBackground={"brown"}
              btnColor={"white"}
              btnHover={"btnDark"}
              btnLink={"/courses"}
            />
          </div>
        </div>

        <Section>
          <Content
            subTitle={"HOW TO GET STARTED"}
            Title={"Feel Good Pottery For Beginners"}
            DescriptionOne={
              "Embark on a journey of discovery with our 'Feel Good Pottery for Beginners' experience. Dive into the world of ceramics with confidence and joy as you learn the art of pottery in a welcoming and supportive environment. Let your creativity flow and feel the satisfaction of crafting your first masterpiece."
            }
            DescriptionTwo={
              "Delve into the enchanting world of pottery with our specialized program, 'Feel Good Pottery for Beginners.' Designed to introduce newcomers to the art of ceramics, our course offers a nurturing environment where you can explore your creativity at your own pace."
            }
            btnName={"JOINT EVENTS"}
            btnBackground={"brown"}
            btnColor={"white"}
            btnHover={"btnDark"}
            btnLink={"/events"}
          />

          <div>
            <img src={AboutUsBeginners} alt="Feel Good Pottery For Beginners" />
          </div>
        </Section>

        <div className="2xl:mt-[-8rem] lg:mt-[-8rem] mt-[-8rem]">
          <Section>
            <div className="relative">
              <div className="2xl:block lg:block md:hidden sm:hidden hidden">
                <img src={AboutUsBeginners} />
              </div>

              <ContentFloating className="2xl:px-[3rem] lg:px-[3rem] md:px-[2rem] sm:px-[1rem] px-[1rem] py-[3rem] pb-[4rem] flex items-center brown-light w-full 2xl:w-[37rem] lg:w-[40rem] md:8/12 2xl:h-[40rem] 2xl:top-[4rem] lg:top-[4rem] 2xl:left-[20rem] lg:left-[20rem] left-0 2xl:mt-[0rem] lg:mt-[0rem] md:mt-[4rem] sm:mt-[4rem] mt-[4rem] 2xl:absolute lg:absolute md:static sm:static static">
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
              </ContentFloating>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

const ContentFloating = styled.div``;

export default About;
