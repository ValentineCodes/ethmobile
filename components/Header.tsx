import React, { Fragment } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="container mx-auto flex justify-between items-center bg-transparent p-6 space-x-4 h-24">
      <div className="flex relative w-8 aspect-square">
        <Image alt="Logo" fill src="/images/logo.png" />
      </div>

      <nav className="flex items-center space-x-6">
        <ul className="hidden lg:flex items-center justify-between space-x-6 text-sm font-light">
          <li>
            <a
              href="#skills"
              className="hover:text-[#15f7d6] duration-300 flex items-center space-x-2"
            >
              Examples
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-[#15f7d6] duration-300">
              Docs
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-[#15f7d6] duration-300">
              1.0.0
            </a>
          </li>
        </ul>

        <span className="text-4xl text-gray-600 font-thin hidden lg:flex">
          |
        </span>

        <div className="hidden sm:flex space-x-6">
          <Link href="https://x.com/ValentineOrga" target="_blank">
            <FaTwitter className="text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl" />
          </Link>

          <Link
            href="https://github.com/ValentineCodes/scaffold-eth-mobile"
            target="_blank"
          >
            <FaGithub className="text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl" />
          </Link>
        </div>

        <Popover.Button className="hover:bg-black hover:bg-opacity-20 p-2 rounded-lg block lg:hidden">
          {({ open }) =>
            open ? (
              <CgClose className="text-xl" />
            ) : (
              <RiMenu2Fill className="text-xl" />
            )
          }
        </Popover.Button>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-100 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="duration-75 ease-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <Popover.Panel
          as="nav"
          focus
          className="absolute inset-x-0 top-24 z-[1000] origin-top-right transform px-2 py-8 transition lg:hidden bg-[#292f37]"
        >
          <ul className="text-sm font-light">
            <li className="p-4 hover:bg-black hover:bg-opacity-20 duration-200">
              <a href="#about" className="block">
                About
              </a>
            </li>
            <li className="p-4 hover:bg-black hover:bg-opacity-20 duration-200">
              <a href="#skills" className="block">
                Skills
              </a>
            </li>
            <li className="p-4 hover:bg-black hover:bg-opacity-20 duration-200">
              <a href="#Projects" className="block">
                Projects
              </a>
            </li>
            <li className="p-4 hover:bg-black hover:bg-opacity-20 duration-200">
              <a href="#contact" className="block">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex sm:hidden space-x-6 ml-4 mt-2">
            <Link
              href="https://www.linkedin.com/in/valentineorga"
              target="_blank"
            >
              <FaLinkedinIn className="text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl" />
            </Link>

            <Link href="https://x.com/ValentineOrga" target="_blank">
              <FaTwitter className="text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl" />
            </Link>

            <Link href="https://github.com/ValentineCodes" target="_blank">
              <FaGithub className="text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl" />
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </header>
  );
}
