import React from "react";
import { Spell } from "../../../types";
interface FavoritesProps {
  spells: Spell[];
  removeFavorite: (index: string) => void; // Function to remove favorite spell
}
const Favorites: React.FC<FavoritesProps> = ({ spells, removeFavorite }) => {
  return (
    <div className="mt-4b overflow-scroll h-[300px] ">
      <h3 className="text-lg font-bold">Favorites List</h3>
      <ul className="list-disc pl-5 w-full flex-grow">
        {spells.map((spell) => (
          <li key={spell.index} className="flex justify-between">
            {spell.name}{" "}
            <span
              className="text-red-500 text-2xl cursor-pointer"
              onClick={() => removeFavorite(spell.index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
