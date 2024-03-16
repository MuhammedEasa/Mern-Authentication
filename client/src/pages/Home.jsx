export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold mb-8 text-white">
      Welcome to my Auth App! 🚀
    </h1>
    <div className="max-w-lg p-8 shadow-lg bg-gradient-to-br  bg-sky-300 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
        This is a full-stack web application 🌐 built with the MERN stack 🍃📖🍭🚴, which stands for MongoDB, Express, React, and Node.js. It includes authentication features 🔑💸 that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.
      </p>
      <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
        The front-end of the application is built with React ⚛️ and uses React Router for client-side routing 🚦. The back-end is built with Node.js 🟢 and Express 🚂, and uses MongoDB as the database 📚. Authentication is implemented using JSON Web Tokens (JWT) 🔒. State management is handled by Redux Toolkit 🗄️.
      </p>
      <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
        This application is intended as a starting point for building full-stack web applications with authentication using the MERN stack. 🎯💻🛠️
      </p>
    </div>
  </div>
  
  );
}
