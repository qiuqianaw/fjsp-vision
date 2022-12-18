export const generateColor = (count: number) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    result.push(`rgb(${r},${g},${b})`);
  }

  return result;
};
