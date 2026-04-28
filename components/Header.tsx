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
    <header className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between space-x-4 px-6 py-4 transition-colors duration-300">
      <div className="flex items-center space-x-3">
        <div className="flex relative w-12 aspect-square">
          <Image alt="Logo" fill src="/images/logo.png" />
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <ul className="text-muted hidden items-center justify-between space-x-6 text-sm font-normal lg:flex">
          <li className="cursor-pointer">
            <Link
              href="https://docs.ethmobile.dev"
              className="duration-200 hover:text-theme"
            >
              Docs
            </Link>
          </li>
        </ul>

        <div className="flex space-x-3">
          <Link href="https://t.me/ethmobile_io" target="_blank">
            <FaTelegram className="text-muted text-xl duration-200 hover:text-theme" />
          </Link>

          <Link href="https://x.com/ethmobile_io" target="_blank">
            <FaXTwitter className="text-muted text-xl duration-200 hover:text-theme" />
          </Link>

          <Link href="https://github.com/eth-mobile/eth-mobile" target="_blank">
            <FaGithub className="text-muted text-xl duration-200 hover:text-theme" />
          </Link>
        </div>

        <PopoverButton className="block rounded-lg p-2 outline-none hover:bg-slate-200/70 dark:hover:bg-slate-800 lg:hidden">
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
        className="bg-surface border-theme rounded-xl border text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <ul className="text-muted text-sm font-normal">
          <li>
            <Link
              href="https://docs.ethmobile.dev"
              className="block p-4 duration-200 hover:bg-surface-soft"
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
