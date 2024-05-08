import React from "react";
import { Spell } from "../../../types";
import "./style.css";
interface SpellListProps {
  spells: Spell[];
  onSelectSpell: (spell: Spell) => void;
}
const SpellList: React.FC<SpellListProps> = ({ spells, onSelectSpell }) => {
  return (
    <div className="spell-list h-[600px] overflow-scroll">
      <ul className="list-disc pl-5 w-full">
        {spells.map((spell) => (
          <li
            key={spell.index}
            onClick={() => onSelectSpell(spell)}
            className="cursor-pointer"
          >
            {spell.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SpellList;
