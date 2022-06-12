export const getUserName = async () => {
    const args = process.argv.slice(2);
    return args.join('').split('=').slice(1).join('');
};

