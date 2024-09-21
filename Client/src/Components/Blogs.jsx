import React from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import HeroSection from "../Reusable/HeroSection";
import HeroBlogs from "../assets/Blogs/HeroBlogs.jpg";
import Section from "../Reusable/Section";
import Content from "../Reusable/Content";
import Author from "../assets/Blogs/Author.png";
import GeneralSection from "../Reusable/GeneralSection";
import Title from "../Reusable/Title";
import CeramicBaseOne from "../assets/Blogs/CeramicBaseOne.jpg";
import CeramicBaseTwo from "../assets/Blogs/CeramicBaseTwo.jpg";
import CeramicBaseThree from "../assets/Blogs/CeramicBaseThree.jpg";
import CeramicBaseFour from "../assets/Blogs/CeramicBaseFour.jpg";
import CeramicBaseFive from "../assets/Blogs/CeramicBaseFive.jpg";
import CeramicBaseSix from "../assets/Blogs/CeramicBaseSix.jpg";

export default function Blogs() {
  return (
    <>
      <HeroContainerPage backgroundImage={HeroBlogs}>
        <HeroSection
          Title={"Blog Sharing The behind The Scenes Of Our Sanctuary"}
          Description={
            "Explore our blog for inspiration and insights on all things pottery. Discover tips, stories, and more to fuel your creativity."
          }
          TextColor={"text-white"}
        />
      </HeroContainerPage>

      <GeneralSection>
        <Title
          Title={"Categories"}
          TextColor={"brown-dark"}
          Class={"text-center"}
        />

        <div className="grid gap-[2rem] grid-cols-2 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          <div>
            <img src={CeramicBaseOne} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              STUDIO LIFE
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              Why Did We Start Cerapy
            </h1>
          </div>
          <div>
            <img src={CeramicBaseTwo} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              WELL-BEING
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              The Science Of Mindfulness
            </h1>
          </div>
          <div>
            <img src={CeramicBaseThree} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              MAGIC OF POTTERY
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              The Art Of Clay
            </h1>
          </div>
          <div>
            <img src={CeramicBaseFour} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              STUDIO LIFE
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              Valentines-Day Event
            </h1>
          </div>
          <div>
            <img src={CeramicBaseFive} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              STUDENT SPOTLIGHT
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              Meet Veronica
            </h1>
          </div>
          <div>
            <img src={CeramicBaseSix} alt="" />

            <h6 className="dark-brown text-center brown-dark mt-6">
              STUDIO LIFE
            </h6>
            <h1 className="text-xl text-center font-semibold brown-dark">
              Team Building Tips
            </h1>
          </div>
        </div>
      </GeneralSection>

      <Section>
        <Content
          subTitle={"WHAT WE OFFER"}
          Title={"Ceramic Session To Melt Away The Excess Stress"}
          DescriptionOne={
            "Indulge in a rejuvenating ceramic session designed to melt away the excess stress and transport you to a realm of tranquility and creativity. Immerse yourself in the therapeutic art of pottery, where every stroke of clay becomes a cathartic release, and every creation is a testament to your inner peace."
          }
          DescriptionTwo={
            "Join us on a journey of self-discovery and relaxation as you mold, shape, and sculpt your worries away. Whether you're a seasoned ceramic artist or a curious beginner, our expert instructors will guide you through the process with warmth and encouragement, fostering an environment where inspiration flourishes and stress fades into the background."
          }
          DescriptionThree={
            " Experience the soothing sensation of clay beneath your fingertips, the gentle rhythm of the wheel spinning beneath your hands, and the joy of seeing your visions come to life in tangible form. Step into our studio and leave the hustle and bustle of everyday life behind as you embark on a transformative ceramic session that promises to uplift your spirit and rejuvenate your soul."
          }
          btnName={"LEARN ABOUT US"}
          btnBackground={"brown"}
          btnColor={"white"}
          btnHover={"btnDark"}
        />

        <div className="mt-6">
          <img src={Author} alt="What we offer?" />
        </div>
      </Section>
    </>
  );
}
