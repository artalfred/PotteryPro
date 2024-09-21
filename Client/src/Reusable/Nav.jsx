import React, { useContext, useEffect } from "react";
import Logo from "../assets/Logo/logo.png";
import NavMobile from "./NavMobile";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser, handleLogout } = useContext(UserContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="nav relative">
      <div className="container shadow-md z-20 bg-light w-[90%] sm:w-[85%] md:w-[87%] xl:w-[85%] 2xl:w-[85%] py-3 mx-auto sm:px-[1rem] md:px-[1.4rem] 2xl:px-[2rem] rounded-lg fixed mt-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-between w-full nav-desktop mx-auto ">
          <div>
            <NavLink to="/" reloadDocument>
              <img
                className="logo lg:w-full md:w-full sm:w-full"
                src={Logo}
                alt="Artful PotteryPro"
              />
            </NavLink>
          </div>

          <div>
            <ul className="flex gap-[3.4rem]">
              <li>
                <NavLink
                  to="/"
                  reloadDocument
                  className="Dm-body text-black text-[13px] poppins"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  reloadDocument
                  className="Dm-body text-black text-[13px] poppins"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  reloadDocument
                  className="Dm-body text-black text-[13px] poppins"
                >
                  COURSES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="events"
                  reloadDocument
                  className="Dm-body text-black text-[13px] poppins"
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  reloadDocument
                  className="Dm-body text-black text-[13px] poppins"
                >
                  BLOGS
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            {!!user ? (
              <div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="flex items-center gap-[4rem]">
                    <ul className="flex items-center gap-[4rem]">
                      <li>
                        <Link
                          to="/events"
                          reloadDocument
                          className="Dm-body text-white text-[12px] font-medium"
                        >
                          EVENTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          reloadDocument
                          className="Dm-body text-white text-[12px] font-medium"
                        >
                          BLOG
                        </Link>
                      </li>
                    </ul>

                    <Menu.Button className="relative p-2 bg-white flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {user.email}
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <ul className="flex items-center gap-[1rem]">
                <li>
                  <Link
                    to="/login"
                    reloadDocument
                    className="Dm-body main-button text-black text-[12px] poppins light-btn"
                  >
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    reloadDocument
                    className="Dm-body main-button bg-brown text-white poppins text-[12px] poppins shadow-sm"
                  >
                    SIGN UP
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="nav-mobile px-[1rem] sm:px-[1rem] md:px-[2rem]">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" reloadDocument>
                <img
                  className="logo-mobile"
                  src={Logo}
                  alt="Artful PotteryPro"
                />
              </Link>
            </div>

            <NavMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
