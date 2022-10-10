import * as React from "react";

export const HeroClass = ({ heroClass, heroes }) => {
  return (
    <>
      <ul>
      <h2>{heroClass}</h2>
        {heroes.map((hero, i) => (
          <li key={`${heroClass}-${i}`}>{hero.name}</li>
        ))}
      </ul>
    </>
  );
};
