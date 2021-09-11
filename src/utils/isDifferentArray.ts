const isDifferentArray = <T>(arr1: T[], arr2: T[]): boolean => {
    let i = arr1.length;
    if (i !== arr2.length) return false;

    while (i--) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
};

export default isDifferentArray;
