
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Send, MailOpen, Database } from "lucide-react";

const steps = [
  {
    icon: <Send className="h-8 w-8 text-agent-600" />,
    title: "Submit Client Details",
    description: "Enter the client's name, LinkedIn URL, and your email address"
  },
  {
    icon: <Database className="h-8 w-8 text-agent-600" />,
    title: "AI Research Begins",
    description: "Our system collects and analyzes data from multiple sources"
  },
  {
    icon: <MailOpen className="h-8 w-8 text-agent-600" />,
    title: "Receive Detailed Report",
    description: "A comprehensive report is delivered to your email within minutes"
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-agent-600" />,
    title: "Prepare and Close",
    description: "Use the insights to prepare for your meeting and close the deal"
  }
];

const HowItWorks = () => {
  return (
    <Card className="w-full max-w-3xl shadow-md">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
        
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-10 relative z-10">
              <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md border border-agent-100">
                {step.icon}
              </div>
              
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-11 w-0.5 h-10 bg-agent-200" />
              )}
            </div>
          ))}
        </div>
        
        <Separator className="my-6" />
        
        <div className="p-4 bg-agent-50 rounded-lg border border-agent-100">
          <div className="flex items-center">
            <div className="text-3xl mr-3">⚡</div>
            <div>
              <h3 className="font-semibold text-lg">Instant Intelligence</h3>
              <p className="text-gray-600">From zero knowledge to expert insights in minutes</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowItWorks;
