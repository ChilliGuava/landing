"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="max-w-85 mx-auto p-4" ref={ref}>
      <nav className="w-full">
        <h2 className="font-bold">
          Chilli
          <span style={{ color: "#3CD79F" }}>Guava</span>
        </h2>
      </nav>
      <motion.div style={{ y: backgroundY }} className=" flex h-screen pb-16">
        <div className="my-auto">
          <h1 className="font-bold md:text-6xl text-4xl">
            Build better software <span className="block">faster ⚡</span>
          </h1>
          <p className="md:text-2xl text-base mt-6">
            Get your software development done by engineers with experience from
            Google, Microsoft and Amazon.
          </p>
          <Button className="mt-6">
            <Link href="#contact" className="">
              Get in touch
            </Link>
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </motion.div>
      <section className="bg-white md:pb-72 pb-60">
        <p className="text-4xl">
          <span className="font-bold">
            We will help you ship better software faster.{" "}
          </span>
          Our team of engineers have worked on products powering millions of
          users.
        </p>
        <p className="text-4xl mt-6">
          <span className="font-bold">Our services:</span>
        </p>
        <p className="text-4xl mt-6">
          <span className="font-bold">Web and Mobile app development: </span>
          full app design and development, or add new features to your existing
          app.
        </p>
        <p className="text-4xl mt-6">
          <span className="font-bold">Backend: </span>
          API development, custom AI/ML models, data pipelines.
        </p>
        <p className="text-4xl mt-6">
          <span className="font-bold">Cloud, devops: </span>
          Architecture design, CI/CD pipeline, Infrastructure as code.
        </p>
      </section>

      <section className="w-full pb-12 md:pb-24">
        <div className="containe grid  gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-6 max-w-[600px] mx-auto">
            <h2
              id="contact"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Contact Us
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to start your project? Drop us a line and we&apos;ll get
              back to you.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[400px] space-y-2">
            <form
              method="POST"
              name="contact"
              className="space-y-6"
              data-netlify="true"
            >
              <div className="grid grid-cols-1 gap-6">
                <input type="hidden" name="form-name" value="contact" />
                <Input
                  name="company"
                  placeholder="Company name"
                  required
                  type="text"
                />
                <Input
                  name="email"
                  placeholder="Your email"
                  required
                  type="email"
                />
                <Textarea
                  name="message"
                  className="min-h-[100px]"
                  placeholder="Additional information"
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Chilli Guava. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/rushatgabhane"
          >
            Github
          </Link>
        </nav>
      </footer>
    </main>
  );
}
