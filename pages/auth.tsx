import Input from "@/components/input";
import { useState, useCallback } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/Logo.png" alt="Logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
                {variant === "register" && (
              <Input
                label="Username"
                id="name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              )}
              <Input
                label="Email"
                type="Email"
                id="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => {}}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-900 transition"
            >
              {variant === "login" ? "Log In" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login" ? "First time using muu-V-iz?" : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-0.5 hover:underline cursor-pointer"
              >
                {variant === "login" ? " Create an account" : " Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;