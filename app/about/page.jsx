"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-16">
      <main className="flex-1 bg-muted/40 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <section>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to our Alumni Interaction Platform
            </h1>
            <p className="text-muted-foreground mt-4 max-w-[700px]">
              Our mission is to bring together alumni from diverse batches,
              departments, and locations, empowering them to connect, grow, and
              give back. Through this platform, we aim to support your career
              development by providing job postings, mentorship programs, and
              dynamic professional networking opportunities.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <UsersIcon className="w-8 h-8" />
                  <CardTitle>Alumni Directory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A comprehensive, searchable database to easily find and
                    connect with fellow alumni.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BriefcaseIcon className="w-8 h-8" />
                  <CardTitle>Career Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access job postings, mentorship programs, and expand your
                    professional network.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSignIcon className="w-8 h-8" />
                  <CardTitle>Donation Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Facilitate seamless donations to support the college&apos;s
                    projects and initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Join Our Community</h2>
            <p className="text-muted-foreground mt-4 max-w-[700px]">
              Celebrate the remarkable achievements and inspiring success
              stories of our alumni community, serving as a source of motivation
              for current students and peers. Join us in cultivating a culture
              of giving, where you can contribute to the ongoing progress and
              initiatives of our beloved Government Engineering College.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start mt-6">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Join Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Explore Features
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted p-6 md:p-10">
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
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
