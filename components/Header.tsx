import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

import { PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="container mx-auto flex justify-between items-center bg-transparent px-6 py-4 space-x-4 h-24">
      <div className="flex relative w-8 aspect-square">
        <Image alt="Logo" fill src="/images/logo.png" />
      </div>

      <nav className="flex items-center space-x-6">
        {/* <ul className="hidden lg:flex items-center justify-between space-x-6 text-sm text-gray-600 font-light">
          <li>
            <a href="#docs" className="hover:text-black duration-300">
              Docs
            </a>
          </li>
          <li>
            <a href="#builds" className="hover:text-black duration-300">
              Builds
            </a>
          </li>
        </ul> */}

        <div className="flex space-x-6">
          <Link href="https://x.com/ValentineOrga" target="_blank">
            <FaTwitter className="text-gray-600 hover:text-black duration-200 text-2xl" />
          </Link>

          <Link
            href="https://github.com/dewdrip/scaffold-eth-mobile"
            target="_blank"
          >
            <FaGithub className="text-gray-600 hover:text-black duration-200 text-2xl" />
          </Link>
        </div>

        {/* <PopoverButton className="hover:bg-black hover:bg-opacity-20 p-2 rounded-lg block lg:hidden outline-none">
          {({ open }) =>
            open ? (
              <CgClose className="text-xl" />
            ) : (
              <RiMenu2Fill className="text-xl" />
            )
          }
        </PopoverButton> */}
      </nav>

      {/* <PopoverPanel
        transition
        anchor="bottom"
        className="rounded-xl border bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <ul className="text-sm text-gray-600 font-light">
          <li>
            <a
              href="#docs"
              className="block p-4 hover:bg-black hover:bg-opacity-10 duration-200"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#builds"
              className="block p-4 hover:bg-black hover:bg-opacity-10 duration-200"
            >
              Builds
            </a>
          </li>
        </ul>
      </PopoverPanel> */}
    </header>
  );
}
