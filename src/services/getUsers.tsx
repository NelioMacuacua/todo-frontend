import axios from "axios"
const url = "http://localhost:3000/users"

interface Iusers {
    id: number,
    name: string,
    email: string
}


async function getUsers() {
    const users = await axios.get(url)
        .then(result => result.data.users as Iusers[])
        .catch(err => console.log(err))
    return users
}

export {
    getUsers
}
