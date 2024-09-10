import { Button } from "@/components/ui/button";
import Image from "next/image";
import myImage from "../../components/Assets/campus.jpg";
import "./SignIn.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="sign-up-container overflow-hidden p-8">
      <div className="h-screen">
        <Image
          className="object-cover w-full h-full"
          src={myImage}
          width={1080}
          height={1080}
          alt="upload"
        />
      </div>
      <div className="right-side">
        <h2 className="heading">Sign in to College Connect</h2>
        <Button className=" w-2/5 bg-[#70ee70]" variant={"default"}>
          {/* <Image className="google" src={google}  alt="Google" /> */}
          Sign in with Google
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
              placeholder="Username or Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input_area"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <Button type="submit" className="w-full">
            Sign In
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
