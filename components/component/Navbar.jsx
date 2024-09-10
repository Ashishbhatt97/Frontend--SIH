"use client";

import { Button } from "@/components/ui/button";
import { GraduationCapIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({}) => {
  const router = useRouter();

  return (
    <header className="px-4 lg:px-32 h-16 flex items-center border-b shadow-sm fixed z-[999] w-full bg-[white]">
      <Link href="/" className="flex items-center justify-center">
        <GraduationCapIcon className="h-6 w-6" />
        <span className="sr-only">College Alumni</span>
      </Link>
      <nav className="ml-auto flex gap-2 items-center sm:gap-6">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium">
          About Us
        </Link>
        <Button
          onClick={() => router.push("/login")}
          className="text-sm font-medium"
          variant={"ghost"}
        >
          Login
        </Button>
        <Button
          className="text-sm font-medium"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
