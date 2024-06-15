export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const contains = (val: string, ...args: string[]) => {
    return args.includes(val);
}