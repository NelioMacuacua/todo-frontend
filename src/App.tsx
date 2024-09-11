import UserForm from "./adapters/componets/UserForm";
import UserList from "./adapters/componets/UserList";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-800 grid place-content-center text-white space-y-10">
      <UserForm />
      <UserList />
    </div>
  )
}