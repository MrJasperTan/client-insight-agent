
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const ReportPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card className={`w-full max-w-5xl shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <CardHeader className="bg-agent-600 text-white">
        <CardTitle className="text-xl font-bold">Sample Report Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Report Contents - Left Side with staggered animation */}
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-lg font-semibold mb-4">Report Contents:</h3>
            <ul className="space-y-2 list-disc pl-5">
              {['Personal Profile', 'Company Profile', 'Interests', 'Unique Facts', 'Opportunities: Pain Points and Solutions', 'Booking Page Info'].map((item, index) => (
                <li key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${150 + (index * 100)}ms` }}>
                  {item}
                </li>
              ))}
              <li className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '750ms' }}>
                <span className="font-medium">Research Report:</span>
                <ul className="list-circle pl-6 mt-1">
                  {['Name, Headline, Location', 'Job Title, Company Description', 'Company Website', 'Education', 'Experience', 'Recent LinkedIn Posts'].map((item, index) => (
                    <li key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${800 + (index * 100)}ms` }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              {['Google Research Analysis', 'Trustpilot Reviews', 'Citations'].map((item, index) => (
                <li key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${1400 + (index * 100)}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sample Report Image - Right Side with ScrollArea and animation */}
          {/* Sample Report PDF Viewer - Scrollable */}
          <div className={`w-full md:w-1/2 border rounded-md overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ScrollArea className="h-[500px]">
              <iframe 
                src="/lovable-uploads/RyanKaupReport.pdf"
                width="100%"
                height="500px"
                className="border-none"
                title="Sample report showing client analysis and key facts"
              />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportPreview;
