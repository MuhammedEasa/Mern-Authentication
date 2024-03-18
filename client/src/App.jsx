import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute'
import AdminUser from './pages/AdminUser'
import CreateUser from "./pages/CreateUser";
import { useEffect } from "react";
import axios from "axios";
import { getUser } from "./redux/user/adminSlice";
import { useDispatch } from "react-redux";
import UpdateUser from "./pages/UpdateUser";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/user/admin");
        dispatch(getUser(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<AdminUser />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
