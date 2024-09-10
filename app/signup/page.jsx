import { Button } from "@/components/ui/button";
import Image from "next/image";
import myImage from "../../components/Assets/campus.jpg";
import "./Signup.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="sign-up-container">
      <div className="left-side overflow-hidden">
        <Image
          className="object-cover w-full h-screen "
          src={myImage}
          width={1080}
          height={1080}
          alt="upload"
        />
      </div>
      <div className="right-side">
        <h2 className="heading">Sign Up to College Connect</h2>
        <Button className=" w-2/5 bg-[#70ee70]" variant={"default"}>
          {/* <Image className="google" src={google}  alt="Google" /> */}
          Sign Up with Google
        </Button>
        <p className="w-2/5 flex mt-2 items-center justify-center">
          <span className="font-medium">Or</span>
        </p>
        <form className=" mt-2">
          <div className="form-group">
            <input
              className="input_area"
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
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
