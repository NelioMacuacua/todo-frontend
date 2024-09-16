import axios from "axios"

const createUser = async (name: string, email: string) => {
    await axios.post("http://localhost:3000/users", {
        name,
        email,
    }).catch(err => console.log(err))

}

const getUsers = async () => {
    const users = await axios.get("http://localhost:3000/users")
        .then(response => response.data.users)
    return users
}

export {
    createUser,
    getUsers
}