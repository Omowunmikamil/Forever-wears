import { useState } from "react";
import Button from "../components/Button";
import NewsLetter from "../components/NewsLetter";

const Login = () => {
  // State to track whether the form is in "Sign Up" or "Login" state
  const [currentState, setCurrentState] = useState("Sign Up");

  // Handle form submission (currently no functionality defined)
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add form submission logic here (e.g., sending data to an API)
  };

  return (
    <div className="border-t">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 mb-28 gap-4 text-gray-700"
      >
        {/* Title and Divider */}
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Conditionally render the 'Name' input field based on the current state */}
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="name"
            placeholder="Name"
            required
            className="w-full border border-gray-700 outline-none rounded py-2 px-3"
          />
        )}

        {/* Common Email input field for both Sign Up and Login */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-700 outline-none rounded py-2 px-3"
        />

        {/* Common Password input field for both Sign Up and Login */}
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-700 outline-none rounded py-2 px-3"
        />

        {/* Conditional Links for Login and Sign Up */}
        <div className="w-full flex justify-between mt-[-8px] text-sm">
          {/* Display "Forgot your password" link only on Login form */}
          {currentState === "Login" ? (
            <p className="cursor-pointer">Forgot your password</p>
          ) : (
            ""
          )}

          {/* Conditional link to toggle between Login and Sign Up */}
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit button changes based on form state */}
        {currentState === "Login" ? (
          <Button text={"Sign In"} className={"px-12 mt-6"} />
        ) : (
          <Button text={"Create"} className={"px-12 mt-6"} />
        )}
      </form>

      {/* Newsletter section */}
      <NewsLetter />
    </div>
  );
};

export default Login;
