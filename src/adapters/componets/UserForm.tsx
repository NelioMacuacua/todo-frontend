import { useState } from "react"
import { createUser } from "../../application/useCases/getUsers"



const UserForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await createUser(name, email);
            alert("usuario criado")
        } catch (error: any) {
            setError("Erro ao salvar usuario")
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-x-2 mt-2">
                <label>Nome</label>
                <input
                    className="bg-transparent border p-2 rounded-md"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="space-x-2 mt-2">
                <label>Email</label>
                <input
                    className="bg-transparent border p-2 rounded-md"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading} className="border px-4 py-2 rounded-md my-4">
                {loading ? 'A criar...' : 'Criar'}
            </button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default UserForm;