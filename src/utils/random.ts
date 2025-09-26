export const getRandomIntExcludingInterval = (
  min: number,
  max: number,
  excludeMin: number,
  excludeMax: number
): number => {
  if (excludeMin > excludeMax) {
    throw new Error('excludeMin should be less than or equal to excludeMax');
  }
  if (min > max) {
    throw new Error('min should be less than or equal to max');
  }
  if (excludeMin <= min && excludeMax >= max) {
    throw new Error('Exclusion interval covers the entire range');
  }
  if (excludeMin >= max || excludeMax <= min) {
    return getRandomInt(min, max);
  }

  const lowerRange = Math.max(0, excludeMin - min);
  const upperRange = Math.max(0, max - excludeMax);
  const totalRange = lowerRange + upperRange;

  if (totalRange <= 0) {
    throw new Error('No available range to select a random integer.');
  }

  const rand = Math.random() * totalRange;
  if (rand < lowerRange) {
    return Math.floor(min + rand);
  } else {
    return Math.floor(excludeMax + (rand - lowerRange));
  }
};

export const getRandomInt = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('min should be less than or equal to max');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPurpleColor = (): string => {
    const red = 100 + getRandomInt(0, 60);
    const green = 30 + getRandomInt(0, 40);
    const blue = 130 + getRandomInt(0, 50);
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
};