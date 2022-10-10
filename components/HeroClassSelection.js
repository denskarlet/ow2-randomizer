import * as React from "react";
import { dps, tanks, healers } from "../utils/data";

const defaultState = {
  Tanks: true,
  DPS: true,
  Healers: true,
};

const labelToListMap = {
  Tanks: tanks,
  DPS: dps,
  Healers: healers,
};

export const HeroClassSelection = () => {
  const [selections, setSelections] = React.useState(defaultState);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSelections((prev) => ({ ...prev, [name]: !value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const availableHeroes = [];
    Object.entries(selections).forEach(([heroClass, isSelected]) => {
      if (isSelected) {
        availableHeroes.push(...labelToListMap[heroClass]);
      }
    });

    const selectedHero = selectRandomElement(availableHeroes)

    alert(`You got ${selectedHero.name}! Go kick some ass:)`)
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(selections).map(([key, value]) => {
        return (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              onChange={handleSelect}
              name={key}
              id={key}
              type="checkbox"
              checked={value}
            />
          </div>
        );
      })}
      <button onClick={handleSubmit}>Pick a hero!</button>
    </form>
  );
};

const selectRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
