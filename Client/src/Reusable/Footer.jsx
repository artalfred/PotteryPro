import React from "react";
import "../css/Footer.css";
import Logo from "../assets/Logo/ArtfulPotteryProDark.png";

import CeramicBaseOne from "../assets/Footer/CeramicBaseOne.jpg";
import CeramicBaseTwo from "../assets/Footer/CeramicBaseTwo.jpg";
import CeramicBasethree from "../assets/Footer/CeramicBaseThree.jpg";
import CeramicBaseFour from "../assets/Footer/CeramicBaseFour.jpg";
import CeramicBaseFive from "../assets/Footer/CeramicBaseFive.jpg";

export const Footer = () => {
  return (
    <footer className="pt-[6rem] px-[1rem] md:px-[4rem] 2xl:px-[6rem] grid">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-3 items-center 2xl:order-1 lg:order-1 md:order-2 sm:order-2 mt-4 2xl:mt-[0rem] lg:mt-[0rem] md:mt-[4rem]">
          <div className="order-2 2xl:order-1 lg:order-1 md:order-2">
            <ul className="grid 2xl:justify-start md:justify-center justify-center 2xl:text-start md:text-center gap-3">
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center md:mt-4 mt-4">
                HOME
              </li>
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center">
                ABOUT
              </li>
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center">
                COURSES
              </li>
            </ul>
          </div>
          <div className="grid items-center justify-center order-1 2xl:order-2 lg:order-2 md:order-1">
            <div className="flex justify-center">
              <img src={Logo} alt="" />
            </div>

            <p className="Dm-body brown-dark text-center">
              Our Mission Is To Bring The Calming Magic of Pottery Into People's
              Life In The Heart Of Lisbon
            </p>
          </div>
          <div className="order-3 2xl:order-3 lg:order-3 md:order-3">
            <ul className="grid gap-3 2xl:justify-end md:justify-center justify-center">
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text-center text-center 2xl:mt-0 md:mt-4 mt-4">
                BLOGS
              </li>
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text- text-center">
                EVENTS
              </li>
              <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text- text-center">
                CONTACT
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 order-1 2xl:order-2 lg:order-2 md:order-1 sm:order-1">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 w-full  lg:col-span-1"
                src={CeramicBaseOne}
                alt="Transistor"
              />
              <img
                className="col-span-2 w-full  lg:col-span-1"
                src={CeramicBaseTwo}
                alt="Reform"
              />
              <img
                className="col-span-2 w-full  lg:col-span-1"
                src={CeramicBasethree}
                alt="Tuple"
              />
              <img
                className="col-span-2 w-full  sm:col-start-2 lg:col-span-1"
                src={CeramicBaseFour}
                alt="SavvyCal"
              />
              <img
                className="col-span-2 col-start-2 w-full  sm:col-start-auto lg:col-span-1"
                src={CeramicBaseFive}
                alt="Statamic"
              />
            </div>
          </div>
        </div>

        <div
          className="border-t-2 w-full mt-[4rem] py-[2rem] grid 2xl:flex lg:flex md:grid justify-center 2xl:justify-between lg:justify-between md:justify-center order-3 2xl:order-3 lg:order-3 md:order-3 sm:order-3"
          style={{ borderColor: "#543115" }}
        >
          <h6 className="Dm-body brown-dark 2xl:text-start lg:text-start md:text-center">
            Disclaimer & Privacy Policy
          </h6>
          <h6 className="Dm-body brown-dark 2xl:text-end lg:text-end md:text-center text-center">
            @Copyright 2024
          </h6>
        </div>
      </div>
    </footer>
  );
};
