import React, { FC } from "react";
import { SubCategoryItem } from "models/menu";
import NormalList from "./NormalList";
import SubsAndSandwiches from "./SubsAndSandwiches";

interface Props {
  items: SubCategoryItem[];
}

const Sandwiches: FC<Props> = ({ items }) => (
  <>
    <NormalList items={items} />
    <SubsAndSandwiches />
  </>
);

export default Sandwiches;
