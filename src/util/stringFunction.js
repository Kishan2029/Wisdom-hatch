export const trimString = (string, len) => {
    if (string.length > len)
        return string.substring(0, len) + "...";
    else string.substring(0, len)
}