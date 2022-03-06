import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "low" | "middle";
export type AffairType = {
  _id: number;
  name: string;
  priority: string;
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "Anime", priority: "low" },
  { _id: 3, name: "Games", priority: "low" },
  { _id: 4, name: "Work", priority: "high" },
  { _id: 5, name: "HTML & CSS", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: string
): Array<AffairType> => {
  switch (filter) {
    case "high":
      return affairs.filter((el) => el.priority === "high");
    case "middle":
      return affairs.filter((el) => el.priority === "middle");
    case "low":
      return affairs.filter((el) => el.priority === "low");
    default:
      return affairs;
  }
};
export const deleteAffair = (
  affairs: Array<AffairType>,
  _id: number
): Array<AffairType> => {
  return affairs.filter((el) => el._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);

  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <hr />
      homeworks 2
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
