
import { useIsMobile } from "@/hooks/use-mobile";
import { FileSearch } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between py-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="bg-agent-600 p-2 rounded-lg">
            <FileSearch className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-agent-700">Profile</span> Research Agent
          </h1>
        </div>
        
        {!isMobile && (
          <div className="rounded-full bg-agent-50 px-4 py-1 border border-agent-100">
            <p className="text-sm text-agent-800">
              <span className="font-medium">AI-Powered</span> Client Intelligence
            </p>
          </div>
        )}
      </div>
      
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Generate Comprehensive Client Insights <span className="text-agent-600">in Minutes</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Automatically research clients and companies, identify pain points, and prepare
          personalized solutions before your meetings.
        </p>
      </div>
    </header>
  );
};

export default Header;
