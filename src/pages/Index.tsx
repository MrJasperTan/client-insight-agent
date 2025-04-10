
import { useState, useEffect } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger initial page load animation
    setIsLoaded(true);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 py-8">
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Header />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mb-16">
          <div className={`w-full lg:w-1/2 flex flex-col items-center transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ResearchForm />
            
            <div className={`mt-10 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Testimonial />
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 flex flex-col gap-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Deal of the Century Scenario + How It Helps You */}
            <UseCaseScenario />
          </div>
        </div>
        
        <div className="space-y-16 mb-16">
          {/* How It Works section */}
          <div className={`flex justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <HowItWorks />
          </div>
          
          {/* Features section */}
          <div className={`flex justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
            <Features />
          </div>
          
          {/* Report Preview moved to the end */}
          <div className={`flex justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <ReportPreview />
          </div>
        </div>
        
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={scrollToTop}
            size="icon"
            className={`rounded-full bg-agent-600 hover:bg-agent-700 shadow-md transition-all duration-300 hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
