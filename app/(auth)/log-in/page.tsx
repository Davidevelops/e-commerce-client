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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader className="animate-spin h-8 w-8 mx-auto text-blue-600" />
          <p className="mt-4 text-lg text-gray-700">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-8 sm:px-8">
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-6">
            Welcome Back
          </h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <CustomInput
              Icon={AtSign}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <CustomInput
              Icon={Lock}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-base font-medium"
            >
              {isLoading ? (
                <Loader className="animate-spin h-5 w-5" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>
          {error && (
            <p className="mt-4 text-red-600 font-medium text-sm text-center">
              {error}
            </p>
          )}
        </div>
        <div className="bg-gray-100 px-6 py-4 text-center">
          <p className="text-gray-700 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
