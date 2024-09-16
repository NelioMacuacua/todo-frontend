import { useEffect, useState } from "react";
import FormNewUser from "./components/FormNewUser";
import axios from "axios";
interface Iusers {
  id: number,
  name: string,
  email: string,
}
export default function App() {
  const [isOpen, setOpen] = useState<boolean>(false)

  const [users, setUsers] = useState<Iusers[]>()

  useEffect(() => {
    async function gatAll() {
      const data = await axios.get("http://localhost:3000/users").then(result => result.data).then(result => result.users)
      setUsers(data)
    }
    gatAll();
  }, [])

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center p-4">
      {isOpen && < FormNewUser />}
      <div className="flex justify-between">
        <div></div>
        <div>
          <button onClick={() => setOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-400 duration-150">Create user</button>
        </div>
      </div>
      <ul className="border min-h-96 min-w-96">
        {
          users?.map((user) => (
            <li key={user.id} className="flex space-x-4 text-black px-2 py-2 border-b justify-between hover:bg-zinc-200">
              <div>{user.name}</div>
              <div className="text-zinc-500">{user.email}</div>
              <div className="space-x-2">
                <a href="#">Apagar</a>
                <a href="#">Editar</a>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}