"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CustomInput from "@/app/customComponents/Input";
import { AtSign, Lock, Loader } from "lucide-react";
import { useAuthStore } from "@/lib/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, isLoading, error, isAuthenticated, user, isCheckingAuth } =
    useAuthStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect only once auth check is finished
  useEffect(() => {
    if (!isCheckingAuth && isAuthenticated && user?.isVerified) {
      router.push("/shop");
    }
  }, [isAuthenticated, user, isCheckingAuth, router]);

  if (isCheckingAuth) {
    return <p className="text-center text-2xl">Checking authentication...</p>;
  }

  return (
    <div className="border w-screen h-screen flex items-center justify-center">
      <div className="form-container border rounded-2xl shadow overflow-hidden">
        <h1 className="text-center text-4xl font-bold mt-8">Welcome Back</h1>
        <form
          onSubmit={handleLogin}
          className="min-w-2xl max-w-3xl p-8 flex flex-col gap-4"
        >
          <CustomInput
            Icon={AtSign}
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            Icon={Lock}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            href={`/forgot-password`}
            className="text-blue-500 font-semibold ms-2"
          >
            forgot password
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin" /> : "Log In"}
          </Button>
        </form>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        <div className="bg-gray-300 text-center p-2">
          Don&apos;t have an account?{" "}
          <Link href={`/signup`} className="font-bold text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
