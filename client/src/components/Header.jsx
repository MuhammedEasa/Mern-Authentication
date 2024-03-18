import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
export default function Header() {
  const {currentUser} = useSelector((state)=>state.user)
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
          <Link to={"/profile"}>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
            ):(

            <li>Login</li>
            )}
          </Link>
        </ul>
        <Link to={'/admin'}>Admin Dashboard</Link>
      </div>
    </div>
  );
}
