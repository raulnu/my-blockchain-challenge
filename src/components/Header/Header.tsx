import { useState } from "react";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const handleLoggingIn = () => {
    if (!loggedIn) {
      setLoggingIn(!loggingIn);
    }
  };
  return (
    <>
      <header className="bg-gradient-to-t from-cyan-700 to-cyan-600 flex flex-col sm:flex-row justify-evenly items-center font-sans p-5">
        <div className="flex flex-col items-center mb-3 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900">
            <a href="/">My Blockchain Challenge</a>
          </h1>
          <span className="text-lg sm:text-xl text-gray-800">
            By Raúl Navarro
          </span>
        </div>
        <button
          onClick={handleLoggingIn}
          className="rounded text-sm sm:text-base bg-yellow-600 hover:bg-yellow-500 duration-300 w-20 h-9"
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </header>
      {loggingIn && (
        <section className="p-5 bg-cyan-700 flex justify-center border-t">
          <form className="w-full sm:w-4/6 flex flex-col justify-evenly items-center sm:flex-row">
            <div className="flex flex-col">
              <label htmlFor="username">User</label>
              <input
                type="text"
                id="username"
                placeholder="user"
                className="rounded mb-3 p-1"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="rounded mb-3 p-1"
              />
            </div>
            <div className="flex w-4/6 sm:w-auto sm:flex-col sm:h-full justify-evenly">
              <button
                type="submit"
                className="rounded duration-300 bg-yellow-600 hover:bg-yellow-500 py-1 px-3"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleLoggingIn}
                className="rounded duration-300 bg-yellow-600 hover:bg-yellow-500 py-1 px-3"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
