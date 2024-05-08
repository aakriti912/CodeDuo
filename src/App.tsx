import React, { useEffect, useState } from "react";

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

  return <div className="main bg relative"></div>;
};

export default App;
