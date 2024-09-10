"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import myImage from "../../components/Assets/campus.jpg";
import "./SignIn.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Basic Form Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.body.data) {
        // Store the JWT in localStorage
        localStorage.setItem("token", response.data.body.data.token);
        return router.push("/");
      } else {
        setError("Invalid Email or Password");
      }

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result.error) {
        // Store the JWT in localStorage
        localStorage.setItem("token", response.data.body.data.token);
        router.push("/");
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Login failed, please try again.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="sign-up-container">
      <div className="h-screen">
        <Image
          className="object-cover w-full h-full"
          src={myImage}
          width={1080}
          height={1080}
          alt="upload"
        />
      </div>
      <div className="right-side mt-16">
        <h2 className="heading">Sign in to College Connect</h2>
        <Button
          className="w-2/5 bg-[#70ee70]"
          variant={"default"}
          onClick={handleGoogleLogin}
        >
          {/* <Image className="google" src={google}  alt="Google" /> */}
          Sign in with Google
        </Button>
        <p className="w-2/5 flex mt-2 items-center justify-center">
          <span className="font-medium">Or</span>
        </p>
        <form className=" mt-2" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              className="input_area"
              type="text"
              id="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="sign-up-link">
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
