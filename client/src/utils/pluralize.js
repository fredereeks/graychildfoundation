export const pluralize = (items, word) => {
    return (typeof items === 'number' && items > 1) || items.length > 1 ? word+"s" : word;
}