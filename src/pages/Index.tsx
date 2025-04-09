
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import ResearchForm from "@/components/ResearchForm";
import ReportPreview from "@/components/ReportPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import UseCaseScenario from "@/components/UseCaseScenario";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mb-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <ResearchForm />
            
            <div className="mt-10">
              <Testimonial />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Deal of the Century Scenario + How It Helps You */}
            <UseCaseScenario />
            
            {/* Report Preview moved below scenario */}
            <ReportPreview />
          </div>
        </div>
        
        <div className="space-y-16 mb-10">
          {/* How It Works section */}
          <div className="flex justify-center">
            <HowItWorks />
          </div>
          
          {/* Features section */}
          <div className="flex justify-center">
            <Features />
          </div>
        </div>
        
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-agent-600 hover:bg-agent-700 shadow-md"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
