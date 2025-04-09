
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Clock, Zap } from "lucide-react";

const UseCaseScenario = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="w-full max-w-3xl shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 border-agent-100">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Zap className="h-5 w-5 text-amber-500 mr-2" />
          Scenario: The Deal of a Century
        </h2>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
          <p className="text-gray-700 mb-4">
            Picture this... You just got referred a client that's the deal of a century, but you have to 
            meet them in about 10 minutes and you don't know anything about them or how you can help their business.
          </p>
          
          <div className="flex items-center space-x-1 text-agent-600 font-medium mb-4">
            <Clock className="h-4 w-4" />
            <span className="text-sm">10 minutes until meeting</span>
          </div>
          
          <p className="text-gray-700 mb-1">Luckily, with this tool you can:</p>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1 mb-4">
            <li>Enter their name and LinkedIn URL</li>
            <li>Provide your email for delivery</li>
            <li>Receive a detailed report within minutes</li>
          </ol>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-green-50 rounded-md border border-green-100">
            <p className="font-medium text-green-800 mb-2 sm:mb-0">
              Result: <span className="text-green-600">Deal closed successfully!</span>
            </p>
            
            {!isMobile && (
              <div className="bg-white px-3 py-1 rounded-full border border-green-100 text-sm font-medium text-green-600">
                💥 BAM! 💥
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-agent-600 hover:bg-agent-700" size="lg">
            Try It Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UseCaseScenario;
