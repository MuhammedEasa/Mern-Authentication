import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateUser } from "../redux/user/adminSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdateUser() {
    const {id} = useParams()
    const users = useSelector((state) => state.admin.users);
    const user = users.find(value => value.id === id); 
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.put(`/api/user/adminUpdate/${id}`, {
            name,
            email,
          });
          dispatch(updateUser({ id: res.data._id, name: res.data.username, email }));
          toast.success("User Updated Successfully", {
            position: "bottom-center",
          });
          setTimeout(() => {
            navigate("/admin");
          }, 3000);
        } catch (err) {
          console.error(err);
          toast.error("An error occurred. Please try again.", {
            position: "top-center",
          });
        }
      };
      
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-zinc-100 h-screen flex justify-center items-center">
      <div className="w-96 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 ">Update User</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
          
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Update
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
