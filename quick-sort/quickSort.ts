const quickSort = (items: number[]): number[] => {
  if (items.length <= 1) {
    return items;
  }

  const pivot = items[items.length - 1];

  let wall = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item > pivot) {
      continue;
    }

    items[i] = items[wall];
    items[wall] = item;

    if (i === items.length - 1) {
      continue;
    }

    wall++;
  }

  const left = items.slice(0, wall);
  const right = items.slice(wall + 1);

  return quickSort(left).concat([items[wall]]).concat(quickSort(right));
};

export default quickSort;
