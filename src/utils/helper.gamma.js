import { findMode } from "./helper.flavernoids";

export const gammaStatics = (data) => {
    let finalStaticsObject = {};
  
    data.forEach((item) => {
      const { Alcohol, Ash, Magnesium, Hue } = item;
      const gamma = ((Ash * Hue) / Magnesium).toFixed(2);
  
      if (!finalStaticsObject[Alcohol]) {
        finalStaticsObject[Alcohol] = { gammaValues: [] };
      }
  
      finalStaticsObject[Alcohol].gammaValues.push(parseFloat(gamma));
    });
  
    for (const Alcohol in finalStaticsObject) {
      const gammaValues = finalStaticsObject[Alcohol].gammaValues;
      gammaValues.sort((a, b) => a - b);
  
      const total = gammaValues.reduce((acc, val) => acc + val, 0);
      const count = gammaValues.length;
      const mean = total / count;
  
      let median;
      const mid = Math.floor(count / 2);
      if (count % 2 === 0) {
        median = (gammaValues[mid - 1] + gammaValues[mid]) / 2;
      } else {
        median = gammaValues[mid];
      }
  
      const mode = findMode(gammaValues);
  
      finalStaticsObject[Alcohol] = { mean, median, mode };
    }
    console.log(finalStaticsObject);
  
    return finalStaticsObject;
  };
