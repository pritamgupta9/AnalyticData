export function calculateStatistics(data) {
  const statistics = {};
  const flavanoidsByAlcohol = {};

  data.forEach((entry) => {
    const { Alcohol, Flavanoids } = entry;
    const flavanoidValue = parseFloat(Flavanoids);
    if (!isNaN(flavanoidValue)) {
      if (!flavanoidsByAlcohol[Alcohol]) {
        flavanoidsByAlcohol[Alcohol] = [];
      }
      flavanoidsByAlcohol[Alcohol].push(flavanoidValue);
    }
  });

  for (const Alcohol in flavanoidsByAlcohol) {
    const flavanoidValues = flavanoidsByAlcohol[Alcohol];
    flavanoidValues.sort((a, b) => a - b);

    const total = flavanoidValues.reduce((acc, val) => acc + val, 0);
    const count = flavanoidValues.length;
    const mean = total / count;

    let median;
    const mid = Math.floor(count / 2);
    if (count % 2 === 0) {
      median = (flavanoidValues[mid - 1] + flavanoidValues[mid]) / 2;
    } else {
      median = flavanoidValues[mid];
    }

    const mode = findMode(flavanoidValues);

    statistics[Alcohol] = { mean, median, mode };
  }

  return statistics;
}
export function findMode(array) {
  const frequencyMap = {};
  array.forEach((item) => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  });

  let maxFrequency = 0;
  let modes = [];
  // console.log(frequencyMap,"kkkkkkkkkkkkkkkkkkkkkk");

  for (const item in frequencyMap) {
    const frequency = frequencyMap[item];
    if (frequency > maxFrequency) {
      modes = [item];
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      modes.push(item);
    }
  }

  return modes.map((mode) => parseFloat(mode));
}
