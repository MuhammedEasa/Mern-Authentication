import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-zinc-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </Link>

        <ul className="flex gap-3">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
