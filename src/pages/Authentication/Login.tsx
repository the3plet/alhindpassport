import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2 } from "lucide-react";
// import { TLogin } from "@/types/authType";
// import { useAuthStore } from "@/zustand/store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
//   const login = useAuthStore((state)=>state.loginAsync)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<any> = (data) => {
    // login(data.email,data.password,navigate)
    console.log(data)
    
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form
        className="space-y-2 border p-8 py-16 shadow-lg rounded-md bg-gray-50"
        onSubmit={handleSubmit(handleLogin)}
        >
        <div className=" flex flex-col justify-center items-center gap-1">
          <User2 className=" rounded-full border-2 border-black"/>
          <h1 className="font-Catamaran font-bold text-xl">User Login</h1>
        </div>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <Input
              placeholder="Email"
              className="w-80"
              {...field}
              aria-invalid={errors.email ? "true" : "false"}
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500 font-mono text-xs" role="alert">
            {errors.email.message}
          </p>
        )}
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <Input
              placeholder="Password"
              className="w-80" type="password"
              {...field}
              aria-invalid={errors.password ? "true" : "false"}
            />
          )}
        />
        {errors.password && (
          <p className="text-red-500 font-mono text-xs" role="alert">
            {errors.password.message}
          </p>
        )}
        <Link to="/dashboard">
        <Button className="w-full" type="submit">
          Login
        </Button>
        </Link>
        <div className="flex justify-between">

        {/* <p className="text-xs hover:underline cursor-pointer">Forgot password?</p> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
