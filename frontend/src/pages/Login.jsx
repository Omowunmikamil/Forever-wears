import { useState } from "react";
import Button from "../components/Button";
import NewsLetter from "../components/NewsLetter";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="border-t">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 mb-28 gap-4 text-gray-700"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
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

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-700 outline-none rounded py-2 px-3"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-700 outline-none rounded py-2 px-3"
        />

        <div className="w-full flex justify-between mt-[-8px] text-sm">
          {currentState === "Login" ? (
            <p className="cursor-pointer">Forgot your password</p>
          ) : (
            ""
          )}

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
        {currentState === "Login" ? (
          <Button text={"Sign In"} className={"px-12 mt-6"} />
        ) : (
          <Button text={"Create"} className={"px-12 mt-6"} />
        )}
      </form>

      <NewsLetter />
    </div>
  );
};

export default Login;
