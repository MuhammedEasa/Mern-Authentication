import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Header() {
  const navigate = useNavigate()
  const {currentUser} = useSelector((state)=>state.user)
  const isAdmin = () => {
    return currentUser && currentUser.role === "admin";
  };
//  Sigout
const handleSignOut = async ()=>{
  try {
    const response = await fetch('/api/auth/signOut');
      const data = await response.json();
      localStorage.clear();
      console.log(data);
      toast.success("Logout successful!", {
        position: "bottom-center",
       });
       setTimeout(() => {
         navigate("/login");
         window.location.reload();
       }, 3000); 
  } catch (error) {
    console.log(error);
  }
}
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
          {!isAdmin() && (
            <Link to={"/profile"}>
              {currentUser ? (
                <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
              ) : (
                <li>Login</li>
              )}
            </Link>
          )}
        </ul>
        {isAdmin() && (
            <div>
              <Link to={"/admin"}>Admin Dashboard</Link>
              <span onClick={handleSignOut} className="text-red-700 cursor-pointer ml-3">Signout</span>
            </div>
          )}
              <ToastContainer />
      </div>
    </div>
  );
}
