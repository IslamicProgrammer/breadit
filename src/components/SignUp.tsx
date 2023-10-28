import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp: FC = () => {
  return (
    <div className=" container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto w-16 h-16" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign up</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up your account and agree to our User
          agreement and Privacy Policy
        </p>

        <UserAuthForm />
        <p className="text-sm px-8 text-zinc-700">
          Already Breadittor?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 hover:underline underline-offset-3"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
