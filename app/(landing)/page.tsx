import React from "react";

import LandingNavbar from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import LandingContent from "@/components/LandingContent";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
