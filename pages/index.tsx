import { useMemo } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const lockupLinearParams = useMemo(() => {
    return "";
  }, []);

  const lockupDynamicParams = useMemo(() => {
    return "";
  }, []);

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-8">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">Sablier V2 Sandbox</span>
        </h1>
        <p className="text-center text-lg">
          Get started by reading the docs on{" "}
          <a className="underline" href="https://docs.sablier.com" rel="noreferrer" target="_blank">
            docs.sablier.com
          </a>
        </p>
        <p className="text-center text-lg">Use the buttons below to create streams.</p>
      </div>
    </div>
  );
};

export default Home;
