import React, { useEffect, useState } from "react";
import SpellList from "./Components/SpellList/index";
import SpellDetails from "./Components/SpellDetails/index";
import Favorites from "./Components/Favorites/index";
import localforage from "localforage";
import "./style.css";

import myImage from "./assets/bg.jpeg";

interface Spell {
  name: string;
  index: string;
}

const App = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [favorites, setFavorites] = useState<Spell[]>([]);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((res) => res.json())
      .then((data) => setSpells(data.results));

    localforage.getItem<Spell[]>("favorites").then((savedFavorites) => {
      if (savedFavorites) {
        setFavorites(savedFavorites);
      }
    });
  }, []);

  const addFavorite = (spell: Spell) => {
    setFavorites([...favorites, spell]);
    localforage.setItem("favorites", [...favorites, spell]);
  };

  const selectSpell = (spell: Spell | null) => {
    setSelectedSpell(spell);
  };

  return (
    <div className="main bg relative">
      <img src={myImage} alt="bg" className="w-full h-[400px]" />

      <div className="absolute top-0 left-0 w-full h-[400px] flex items-center justify-center  text-white">
        <div className="flex w-full justify-center items-center min-h-screen">
          <div className="content w-full pl-[600px]">
            <h2 className="text-6xl font-bold flex justify-center items-center">
              You can check your Spell List here!
            </h2>
            <h2 className="text-6xl font-bold flex justify-center items-center">
              You can check your Spell List here!
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">
          <strong style={{ color: "orange" }}>SPELL LIST !</strong> you can
          check the detail of spelling by clicking on it and also can add to
          favorite
        </h1>
        <SpellList spells={spells} onSelectSpell={selectSpell} />

        {selectedSpell && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => selectSpell(null)} // Click to close modal
            />

            {/* Modal content */}
            <div className="fixed inset-0 flex justify-center items-center z-20">
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <button
                  className="absolute top-2 right-2 text-gray-700"
                  onClick={() => selectSpell(null)} // Close modal
                >
                  &times; {/* Close icon */}
                </button>
                <SpellDetails
                  spell={selectedSpell}
                  onAddFavorite={addFavorite}
                />
              </div>
            </div>
          </>
        )}

        <Favorites spells={favorites} />
      </div>
    </div>
  );
};

export default App;
