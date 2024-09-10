"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import myImage from "../../components/Assets/campus.jpg";
import "./Signup.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Basic Form Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          password,
        }
      );
      if (response.data) {
        router.push("/login");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Signup failed, please try again.");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="h-screen">
        <Image
          className="object-cover w-full h-screen"
          src={myImage}
          width={1080}
          height={1080}
          alt="upload"
        />
      </div>
      <div className="right-side mt-20">
        <h2 className="heading">Sign Up to College Connect</h2>
        <Button className="w-2/5 bg-[#70ee70]" variant={"default"}>
          {/* <Image className="google" src={google}  alt="Google" /> */}
          Sign Up with Google
        </Button>
        <p className="w-2/5 flex mt-2 items-center justify-center">
          <span className="font-medium">Or</span>
        </p>
        <form className="mt-2" onSubmit={handleSignup}>
          <div className="form-group">
            <input
              className="input_area"
              type="text"
              id="username"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="text"
              id="username"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="sign-up-link">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
