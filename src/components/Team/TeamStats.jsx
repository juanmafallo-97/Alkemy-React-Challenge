import React, { useState } from "react";
import { useEffect } from "react";

//En este componente mantenemos los powerstats y el promedio de peso y altura, y los actualizamos mediante un useEffect cada vez que se agregan o quitan heroes

export default function TeamStats({ heroes }) {
  const [totalPowerstats, setTotalPowerStats] = useState({});

  const [appearanceStats, setAppearanceStats] = useState({});

  useEffect(() => {
    const newPowerStats = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };
    const newAppearanceStats = {
      totalHeight: 0,
      totalWeight: 0,
      heroesHeightCount: 0,
      heroesWeightCount: 0,
    };
    for (const heroId in heroes) {
      for (const stat in heroes[heroId].powerstats) {
        const statValue = Number(heroes[heroId].powerstats[stat]);
        if (statValue) {
          newPowerStats[stat] += statValue;
        }
      }

      const weight = Number(
        heroes[heroId].appearance.weight[1].match(/[0-9]+/g)[0]
      );
      if (weight) {
        newAppearanceStats.totalWeight += weight;
        newAppearanceStats.heroesWeightCount++;
      }

      const height = Number(
        heroes[heroId].appearance.height[1].match(/[0-9]+/g)[0]
      );
      if (height) {
        newAppearanceStats.totalHeight += height;
        newAppearanceStats.heroesHeightCount++;
      }
    }

    setTotalPowerStats(newPowerStats);
    setAppearanceStats(newAppearanceStats);
  }, [heroes]);

  const sortedPowerStats = () => {
    return Object.keys(totalPowerstats).sort((a, b) => {
      return totalPowerstats[b] - totalPowerstats[a];
    });
  };
  return (
    <div className="stats-container">
      <div className="stats-item">
        <h3>Total PowerStats</h3>
        <ul className="list-group">
          {sortedPowerStats().map((key, i) => {
            return (
              <li
                key={i}
                className="list-group-item"
                style={i === 0 ? { border: "2px solid green" } : {}}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} :{" "}
                {totalPowerstats[key]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="stats-item">
        <h3>Appearance Average</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Average weight :{" "}
            {(
              appearanceStats.totalWeight / appearanceStats.heroesWeightCount
            ).toFixed(2)}{" "}
            kg
          </li>
          <li className="list-group-item">
            Average height :{" "}
            {(
              appearanceStats.totalHeight / appearanceStats.heroesHeightCount
            ).toFixed(2)}{" "}
            cm
          </li>
        </ul>
      </div>
    </div>
  );
}
