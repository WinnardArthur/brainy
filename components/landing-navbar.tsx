"use client";

import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill src="/logo.png" alt="Brainy" />
        </div>
        <h1
          className={cn("text-2xl font-bold text-white", montserrat.className)}
        >
          Brainy
        </h1>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingNavbar;
