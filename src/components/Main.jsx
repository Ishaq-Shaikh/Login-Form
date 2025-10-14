import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegCopyright } from "react-icons/fa6";

const Main = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <>
      <main className="overflow-hidden relative bottom-15 flex flex-col items-center md:flex-row">
        <div className="w-[90vw] ml-15 mr-15 text-center mt-8">
          <h1 className="text-2xl md:text-3xl text-[#A4E9DE] font-black">
            Welcome to ISdeveloper — to continue please login first
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white h-[450px] w-[300px] flex flex-col items-center rounded-2xl mt-10 shadow-lg md:mr-20"
        >
          <div className="mt-6 w-full flex flex-col items-center">
            <label className="font-semibold mb-1 w-[250px] text-left">
              Email :
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border-2 border-black rounded w-[250px] p-1.5 focus:outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 w-[250px] text-sm text-red-700 bg-red-100 border border-red-400 rounded px-2 py-1 flex items-center shadow-sm">
                <span className="mr-1 font-bold">⚠️</span>
                <p>{errors.email.message}</p>
              </div>
            )}
          </div>

          <div className="mt-5 w-full flex flex-col items-center relative">
            <label className="font-semibold mb-1 w-[250px] text-left">
              Password :
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border-2 border-black rounded w-[250px] p-1.5 focus:outline-none pr-10"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
            />
            <button
              type="button"
              className="absolute right-8 top-[2.2rem] text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {errors.password && (
              <div className="mt-1 w-[250px] text-sm text-red-700 bg-red-100 border border-red-400 rounded px-2 py-1 flex items-center shadow-sm">
                <span className="mr-1 font-bold">⚠️</span>
                <p>{errors.password.message}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-[280px] h-[35px] bg-[#223232] text-white font-semibold rounded-xl mt-8 hover:bg-[#2e4444] md:w-[200px] transition-all duration-200 ${
              isSubmitting ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          <div className="flex items-center my-6 mx-2">
            <div className="flex-grow border-t border-[black]"></div>
            <span className="mx-2 text-[12px] font-semibold text-[#414552]">
              OR
            </span>
            <div className="flex-grow border-t border-[black]"></div>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://accounts.google.com/signin",
                  "_blank",
                  "width=500,height=600"
                )
              }
              className="w-[280px] h-[35px] bg-white text-black font-semibold rounded-xl mt-4 border border-gray-300 hover:shadow-md transition-all duration-200 flex items-center justify-center md:m-7"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Login with Google
            </button>
          </div>
        </form>
      </main>
      <footer className="flex justify-center items-center text-white gap-2 m-5 text-[8px]">
        <div className="flex justify-center items-center gap-2">
          <FaRegCopyright />
          ISdeveloper
        </div>
        <span className="border border-r border-white h-[8px]"></span>
        <div>terms & conditions</div>
        <span className="border border-r border-white h-[8px]"></span>
        <div>privacy policy</div>
        <span className="border border-r border-white h-[8px]"></span>
        <div>FAQ</div>
      </footer>
    </>
  );
};

export default Main;
