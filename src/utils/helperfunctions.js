export const comparer = (a, b) => {
    if (a.completed && !b.completed) {
        return 1;
    } else if (!a.completed && !b.completed) {
        return 1;
    }
    return -1;
}