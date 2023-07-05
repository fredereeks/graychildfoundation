import { pluralize } from "./pluralize";

export const durationCounter = (duration) => {
    const hours = duration < 60 ? 0 : Math.floor(duration / 60), minutes = (duration % 60) % 60;
    return (`${hours}${pluralize(hours, 'hr')}: ${minutes}mins`)
}