import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2 } from "lucide-react";
// import { TLogin } from "@/types/authType";
// import { useAuthStore } from "@/zustand/store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { useState } from "react";
import api from "../../data.json";

const LoginPop = () => {
  const [step, setStep] = useState<number>(1);
  const [autoUsername, setAutoUsername] = useState<string>("");
  const navigate = useNavigate();
  //   const login = useAuthStore((state)=>state.loginAsync)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      otp: "",
    },
  });
  const emailValue = watch("email");
  const handleNext = () => {
    const user = api.login.find((val) => val.contact === emailValue);
    if (user) {
      setAutoUsername(user.username);
      setValue("username", user.username);
    }
    setStep(2);
  };

  const handleLogin: SubmitHandler<any> = (data) => {
   
    const user = api.login.find(
      (val) => val.contact === data.email && val.otp === data.otp
    );
    if (user) {
      localStorage.setItem("verified", "true");
      localStorage.setItem("username",user.username);
      window.location.reload();
      return;
    }
    if (data.email === "admin" && data.password === "admin") {
      navigate("/admin");
      return;
    }

    toast.error("OTP is entered is incorrect");
  };
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer hover:text-blue-600">
        Login
      </DialogTrigger>
      <DialogContent className="">
        <form
          className="space-y-2  p-8 py-16  flex flex-col justify-center items-center"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className=" flex flex-col justify-center items-center gap-1">
            <User2 className=" rounded-full border-2 border-black" />
            <h1 className="font-Catamaran font-bold text-xl">User Login</h1>
          </div>
          <div className="flex flex-col gap-2 w-64">
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email/Phone no is required" }}
              render={({ field }) => (
                <Input
                  placeholder="Enter Email/Phone"
                  className="w-full"
                  {...field}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              )}
            />

            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}

            {step >= 2 && (
              <Controller
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <Input
                    placeholder="Enter Username"
                    className="w-full"
                    {...field}
                    value={autoUsername || field.value}
                    aria-invalid={errors.username ? "true" : "false"}
                  />
                )}
              />
            )}
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}

            {step >= 3 && (
              <Controller
                name="otp"
                control={control}
                rules={{ required: "OTP is required" }}
                render={({ field }) => (
                  <InputOTP
                    maxLength={7}
                    {...field}
                    className="text-right w-auto"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
            )}
            {errors.otp && (
              <p className="text-red-500 text-xs">{errors.otp.message}</p>
            )}
          </div>
          {step === 1 && (
            <Button className="w-64 cursor-pointer" onClick={() => handleNext()} type="button">
              Next
            </Button>
          )}
          {step === 2 && (
            <Button className="w-64 cursor-pointer" onClick={() => setStep(3)} type="button">
              Send OTP
            </Button>
          )}
          {step === 3 && (
            <Button className="w-64 cursor-pointer" type="submit">
              Submit
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPop;
