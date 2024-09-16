import { useState } from "react"
import { createUser } from "../services/userServices"

export default function FormNewUser() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    return (
        <div className="size-full bg-black/50 grid place-content-center text-white absolute z-50">
            <div className="p-4 bg-black border-2 rounded-md">
                <h1 className="text-xl font-bold text-center mb-10">New user</h1>
                <form onSubmit={() => createUser(name, email)} action="" className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="px-4">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="border-2 px-4 py-2 rounded-xl bg-zinc-800" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="px-4">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="border-2 px-4 py-2 rounded-xl bg-zinc-800" />
                    </div>
                    <button type="submit" className="px-4 py-2 w-full bg-zinc-800 rounded-xl text-sm hover:bg-blue-500 duration-200">Submit</button>
                </form>
            </div>
        </div>
    )
}