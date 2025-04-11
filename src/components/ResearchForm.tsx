
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { Clipboard, Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  linkedinUrl: string;
  email: string;
}

interface ResearchFormProps {
  webhookUrl?: string;
}

const ResearchForm = ({ webhookUrl }: ResearchFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    linkedinUrl: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.linkedinUrl.trim() || !formData.email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // LinkedIn URL validation (basic)
    if (!formData.linkedinUrl.includes("linkedin.com")) {
      toast.warning("Please enter a valid LinkedIn URL");
      return;
    }

    setIsLoading(true);

    try {
      // Send data to webhook
      const webhookEndpoint = 'https://ai.thejaspertan.com/webhook-test/client-insight';
      
      const response = await fetch(webhookEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: formData.name,
          linkedinProfileUrl: formData.linkedinUrl,
          deliveryEmail: formData.email,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }
      
      toast.success("Request submitted successfully", {
        description: "You will receive your report at the provided email shortly.",
        duration: 5000,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        linkedinUrl: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to submit data", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasteUrl = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text.includes("linkedin.com")) {
        setFormData((prev) => ({ ...prev, linkedinUrl: text }));
        toast.success("LinkedIn URL pasted");
      } else {
        toast.warning("Clipboard content doesn't appear to be a LinkedIn URL");
      }
    } catch (err) {
      toast.error("Unable to access clipboard");
    }
  };

  return (
    <Card className="w-full max-w-xl shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Profile Research Agent</CardTitle>
        <CardDescription>
          Enter client details to generate a comprehensive intelligence report
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Client Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
            <div className="flex space-x-2">
              <Input
                id="linkedinUrl"
                name="linkedinUrl"
                placeholder="https://www.linkedin.com/in/username"
                value={formData.linkedinUrl}
                onChange={handleChange}
                required
                className="flex-1"
              />
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                onClick={handlePasteUrl}
                title="Paste from clipboard"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Delivery Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-agent-600 hover:bg-agent-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Generate Report
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ResearchForm;
