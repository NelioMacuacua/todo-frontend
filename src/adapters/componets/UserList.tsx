import { useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";
import { user } from "../../domain/user";

const UserList = () => {

    const [users, setUsers] = useState<user[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUsers() as user[];
                setUsers(userData);
            } catch (error) {
                setError("Erro ao carregar os dados")
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [])

    if (loading) {
        return (
            <div>
                <h1>Is loading</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id} className="divide-x-2 flex gap-4 ">
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default UserList;