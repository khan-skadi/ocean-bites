import React from "react";
import NormalList from "./NormalList";
import SubsAndSandwiches from "./SubsAndSandwiches";

const Sandwiches = ({ items }) => (
  <>
    <NormalList items={items} />
    <SubsAndSandwiches />
  </>
);

export default Sandwiches;
