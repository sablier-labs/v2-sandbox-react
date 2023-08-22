import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6">
        <div className="flex relative w-10 h-10">
          <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold leading-tight">Sablier V2</span>
          <span className="text-xs">Token streaming</span>
        </div>
      </Link>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
