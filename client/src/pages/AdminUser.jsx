
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AdminUser() {
 
  const users = useSelector((state) => state.admin.users);
 
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 text-zinc-100-full h-screen  justify-center items-center">
      <div className="w-1/2 bg-white rounded p-3">
        <Link to={"/createUser"} className="bg-green-500 text-white px-2 py-1 rounded m-2">
          Add +
        </Link>
        <table className="w-full border border-gray-300">
  <thead>
    <tr>
      <th className="border px-4 py-2">Name</th>
      <th className="border px-4 py-2">Email</th>
      <th className="border px-4 py-2">Action</th>
    </tr>
  </thead>
  <tbody> 
    {users.map((user, index) => {
      return (
        <tr key={index} className="border-t">
          <td className="border px-4 py-2">{user.name}</td>
          <td className="border px-4 py-2">{user.email}</td>
          <td className="border px-4 py-2">
            <Link to={`/edit/${user.id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">
              Update
            </Link>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Delete
            </button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

      </div>
    </div>
  );
}
