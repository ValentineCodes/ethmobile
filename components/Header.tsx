import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

import Link from "next/link";
import { PopoverButton, PopoverPanel } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { RiMenu2Fill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center bg-white px-6 py-4 space-x-4 h-24">
      <div className="flex items-center space-x-3">
        <div className="flex relative w-7 aspect-square">
          <Image alt="Logo" fill src="/images/logo.png" />
        </div>
      </div>

      <nav className="flex items-center space-x-6">
        <ul className="hidden lg:flex items-center justify-between space-x-6 text-sm text-gray-600 font-light">
          <li>
            <Link
              href="https://docs.ethmobile.io"
              className="hover:text-black duration-300"
            >
              Docs
            </Link>
          </li>
        </ul>

        <div className="flex space-x-6">
          <Link href="https://t.me/ethmobile_io" target="_blank">
            <FaTelegram className="text-gray-600 hover:text-black duration-200 text-2xl" />
          </Link>

          <Link href="https://x.com/ethmobile_io" target="_blank">
            <FaXTwitter className="text-gray-600 hover:text-black duration-200 text-2xl" />
          </Link>

          <Link href="https://github.com/dewdrip/eth-mobile" target="_blank">
            <FaGithub className="text-gray-600 hover:text-black duration-200 text-2xl" />
          </Link>
        </div>

        <PopoverButton className="hover:bg-black hover:bg-opacity-20 p-2 rounded-lg block lg:hidden outline-none">
          {({ open }) =>
            open ? (
              <CgClose className="text-xl" />
            ) : (
              <RiMenu2Fill className="text-xl" />
            )
          }
        </PopoverButton>
      </nav>

      <PopoverPanel
        transition
        anchor="bottom"
        className="rounded-xl border bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <ul className="text-sm text-gray-600 font-light">
          <li>
            <Link
              href="https://docs.ethmobile.io"
              className="block p-4 hover:bg-black hover:bg-opacity-10 duration-200"
            >
              Docs
            </Link>
          </li>
          {/* <li>
            <Link
              href="#builds"
              className="block p-4 hover:bg-black hover:bg-opacity-10 duration-200"
            >
              Builds
            </Link>
          </li> */}
        </ul>
      </PopoverPanel>
    </header>
  );
}
