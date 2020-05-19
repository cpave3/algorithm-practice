const bubbleSort = (items: number[], toSkip: number = 0): number[] => {
    const length = items.length;

    let isShifted = false;

    for(let i = 0; i < length - (1 + toSkip); i++) {
        const a = items[i];
        const b = items[i + 1];

        if (a > b) {
            items[i] = b;
            items[i + 1] = a;
            isShifted = true;
        }
    }

    if (isShifted) {
        return bubbleSort(items, toSkip + 1);
    }

    return items;
}

export default bubbleSort;

