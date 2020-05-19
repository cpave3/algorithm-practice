export default (items: number[]): number[] => {
  let smallestIndex;
  for (let divider = 0; divider < items.length - 1; divider++) {
    smallestIndex = divider;

    for (let i = divider; i < items.length; i++) {
      if (items[i] < items[smallestIndex]) {
        smallestIndex = i;
      }
    }

    if (smallestIndex !== divider) {
      const temp = items[divider];
      items[divider] = items[smallestIndex];
      items[smallestIndex] = temp;
    }
  }

  return items;
};
