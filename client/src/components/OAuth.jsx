import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import {  useDispatch } from "react-redux";
import { LoginToSuccess } from "../redux/user/userSlice";
export default function OAuth() {
    const dispatch = useDispatch()
  const handleCLikcGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app)
      const result = await signInWithPopup(auth,provider)
    const res = await fetch('/api/auth/google',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL
        })
    })
    const data = await res.json()
    dispatch(LoginToSuccess(data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCLikcGoogle}
      className="w-full text-gray-100 bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-base px-4 py-3 text-center dark:bg-violet-800 dark:hover:bg-violet-900 dark:focus:ring-violet-400"
    >
      Continue With Google
    </button>
  );
}
