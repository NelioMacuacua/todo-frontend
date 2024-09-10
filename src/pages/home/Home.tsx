import axios from "axios"
import { useEffect, useState } from "react"
interface post { id: number, name: string, email: string }
const url = "http://localhost:3000/users"



export default function Home() {
    const [users, setUsers] = useState<post[] | null>()
    useEffect(() => {
        axios.get(url)
            .then(response => setUsers(response.data.users))
    }, [])

    return (
        <div className="mx-auto ">
            <div>
                <h1 className="text-white">Users</h1>
            </div>
            <div className="text-white">
                Lista
                <ul>
                    {
                        users?.map((user) => (
                            <li key={user.id} className="flex gap-2 divide-x">
                                <div>{user.name}</div>
                                <div>{user.email}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}