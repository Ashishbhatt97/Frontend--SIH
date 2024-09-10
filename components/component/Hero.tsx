/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import p1 from "../Assets/pexels-photo-7713345.webp";
import tech from "../Assets/tech.jpg";
import art from "../Assets/art.webp";
import cooking from "../Assets/cooking.jpg";
import outdoor from "../Assets/outdoor.jpg";

export function Hero() {
  return (
    <div className="flex flex-col min-h -[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <Image
                      src={p1}
                      width={550}
                      height={550}
                      alt="Campus Events"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Campus Events
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Stay connected with your alma mater through our
                          vibrant campus events, from homecoming celebrations to
                          alumni networking mixers.
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Explore Events
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <Image
                      src={p1}
                      width={550}
                      height={550}
                      alt="Networking"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Networking Opportunities
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Expand your professional network and connect with
                          fellow alumni through our exclusive networking events
                          and online community.
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Join the Network
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <Image
                      src={p1}
                      width={550}
                      height={550}
                      alt="Alumni Achievements"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Alumni Achievements
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Celebrate the remarkable accomplishments of our
                          alumni, from successful entrepreneurs to
                          groundbreaking researchers and beyond.
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Explore Alumni
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffffff] border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Alumni
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the inspiring stories and remarkable achievements of
                  our distinguished alumni.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="shadow-md">
                <CardHeader>
                  <div className="bg-muted w-9 h-9  rounded-[50%] flex items-center justify-center">
                    SC
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 ">
                  <h3 className="text-xl font-bold">Sunidhi Chauhan</h3>
                  <p className="text-muted-foreground">Class of 2010</p>
                  <p>
                    John is the CEO of a successful tech startup and a
                    passionate advocate for alumni engagement.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="shadow-md">
                <CardHeader>
                  <div className="bg-muted shadow-md w-9 h-9 rounded-[50%] flex items-center justify-center">
                    SA
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Sarah Anderson</h3>
                  <p className="text-muted-foreground">Class of 2015</p>
                  <p>
                    Sarah is a renowned researcher in the field of renewable
                    energy and a dedicated mentor to current students.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="shadow-md">
                <CardHeader>
                  <div className="bg-muted shadow-md w-9 h-9 rounded-[50%] flex items-center justify-center">
                    MJ
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Class of 2015</p>
                  <p>
                    Michael is a successful entrepreneur who founded a
                    non-profit organization to support underprivileged students.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Check out what&apos;s happening soon.
              </p>
            </div>

            <div className="w-full  lg:pl-16">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View event</span>
                  </Link>
                  <Image
                    src={tech}
                    alt="Event 1"
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold">
                      Tech Conference 2024
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Join us for the latest advancements in technology.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View event</span>
                  </Link>
                  <Image
                    src={art}
                    alt="Event 2"
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold">
                      Art Exhibition Opening
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explore the latest works from local artists.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View event</span>
                  </Link>
                  <Image
                    src={cooking}
                    alt="Event 3"
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold">
                      Cooking Class: Gourmet Dishes
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Learn to prepare delicious meals from our expert chefs.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View event</span>
                  </Link>
                  <Image
                    src={outdoor}
                    alt="Event 4"
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold">
                      Outdoor Adventure Meetup
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Join us for a day of hiking, camping, and exploring
                      nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
