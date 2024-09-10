/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 p-6 md:p-10 flex items-center justify-center w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">About</h3>
          <Link href="#">Our Mission</Link>
          <Link href="#">Our Team</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Features</h3>
          <Link href="#">Alumni Directory</Link>
          <Link href="#">Career Development</Link>
          <Link href="#">Donation Portal</Link>
          <Link href="#">Alumni Achievements</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#">FAQs</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Help Center</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Connect</h3>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
