import React, { useEffect, useState } from "react";
import { Spell } from "../../../types";

interface SpellDetailsProps {
  spell: Spell;
  onAddFavorite: (spell: Spell) => void;
}

const SpellDetails: React.FC<SpellDetailsProps> = ({
  spell,
  onAddFavorite,
}) => {
  const [details, setDetails] = useState<any | null>(false);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/spells/${spell.index}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [spell]);

  return (
    <div className="mt-4 w-[600px]">
      {details ? (
        <div>
          <h1 className="text-xl font-bold">Detail of {spell.name}</h1>
          <h2 className="text-lg font-bold">{spell.name}</h2>
          <p>{details.desc?.[0]}</p>
          <button
            className="bg-orange-500 text-white p-2 mt-2"
            onClick={() => onAddFavorite(spell)}
          >
            Add to Favorites
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpellDetails;
