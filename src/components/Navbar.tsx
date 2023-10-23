import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit  bg-zinc-100 border-b border-zinc-300 z-[10] py-4">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="text-zinc-700 hidden md:block">Breadit</p>
        </Link>
        {/* Search-bar */}
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
