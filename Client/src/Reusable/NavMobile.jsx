import { React, useContext } from "react";

import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserContext } from "../../context/userContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavMobile() {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex gap-2 items-center">
        <Menu.Button className="inline-flex w-full justify-center rounded-full border gap-x-1.5 px-3 py-3 text-sm font-semibold text-gray-900">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#543115"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </span>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-[1rem] grid gap-[2rem]">
            <div className="grid gap-2">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    reloadDocument
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    HOME
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/about"
                    reloadDocument
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    ABOUT
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/courses"
                    reloadDocument
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    COURSES
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/blog"
                    reloadDocument
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    BLOGS
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/events"
                    reloadDocument
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    EVENTS
                  </Link>
                )}
              </Menu.Item>
            </div>

            {!user ? (
              <div className="grid gap-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/register"
                      reloadDocument
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-md"
                      )}
                    >
                      SIGNUP
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      reloadDocument
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-md"
                      )}
                    >
                      LOGIN
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ) : (
              <div className="grid gap-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      reloadDocument
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-md"
                      )}
                    >
                      {user.email}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      SIGN OUT
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
