
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
import { AlertCircle, ChevronUp } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  const [showWebhookInfo, setShowWebhookInfo] = useState(false);
  
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
            
            <div className="mt-6 w-full max-w-xl">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center text-gray-600"
                onClick={() => setShowWebhookInfo(!showWebhookInfo)}
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                {showWebhookInfo ? "Hide" : "Show"} n8n webhook setup info
              </Button>
              
              {showWebhookInfo && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border text-sm text-gray-700">
                  <p className="mb-2 font-medium">Setting up your n8n webhook:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Create an n8n workflow with a webhook trigger node</li>
                    <li>Set up the workflow to process client data from the webhook</li>
                    <li>Add nodes to extract data from LinkedIn and other sources</li>
                    <li>Configure email delivery for the generated report</li>
                    <li>Copy the webhook URL from n8n and paste it in the form above</li>
                  </ol>
                </div>
              )}
            </div>
            
            <div className="mt-10">
              <Testimonial />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ReportPreview />
            
            <div className="mt-10">
              <UseCaseScenario />
            </div>
          </div>
        </div>
        
        <div className="space-y-16 mb-10">
          <div className="flex justify-center">
            <HowItWorks />
          </div>
          
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
