const bubble = (items, toSkip = 0) => {

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
        return bubble(items, toSkip + 1);
    }

    return items;
}

module.exports = bubble;
