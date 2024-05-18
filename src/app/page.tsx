import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-85 mx-auto p-4">
      <nav className="w-full">
        <h2 className="font-bold text-2xl">
          Chilli
          <span style={{ color: "#3CD79F" }}>Guava</span>
        </h2>
      </nav>
      <div className="flex h-screen pb-12">
        <div className="my-auto">
          <h1 className="font-bold md:text-6xl text-4xl">
            Build better software <span className="block">faster ⚡</span>
          </h1>
          <p className="md:text-2xl text-base mt-6">
            Outsource your company&#39;s software development effort to
            engineers with experience from Google, Microsoft and Amazon.
          </p>
          <Button className="mt-6">
            <Link href="/contact">Get in touch</Link>
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </main>
  );
}
