export const getCommand = async (input) => {
    const currentCommand = input.split(' ')[0];
    return currentCommand;
}