export const getUsers = async () => {
    const response = await fetch('https://dummyjson.com/users?limit=6');
    return response
}