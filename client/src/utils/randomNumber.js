export const randomNumber = (small, big) => {
  const min = Math.min(small, big),
    max = Math.max(small, big);
  return Math.floor(Math.random() * (max - min) + min);
};
