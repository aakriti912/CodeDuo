import React from "react";
import { Spell } from "../../../types";

interface FavoritesProps {
  spells: Spell[];
}

const Favorites: React.FC<FavoritesProps> = ({ spells }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Favorites List</h3>
      <ul className="list-disc pl-5 w-full">
        {spells.map((spell) => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
