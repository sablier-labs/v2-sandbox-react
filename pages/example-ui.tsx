import type { NextPage } from "next";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";

const ExampleUI: NextPage = () => {
  return (
    <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
      <ContractInteraction />
      <ContractData />
    </div>
  );
};

export default ExampleUI;
