
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ReportPreview = () => {
  return (
    <Card className="w-full max-w-3xl shadow-lg overflow-hidden">
      <CardHeader className="bg-agent-600 text-white">
        <CardTitle className="text-xl font-bold">Sample Report Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <img 
          src="/lovable-uploads/2eef04df-bf48-486b-9369-4866d09b375f.png" 
          alt="Sample report showing client analysis and key facts" 
          className="w-full"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Report Contents:</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Personal Profile</li>
            <li>Company Profile</li>
            <li>Interests</li>
            <li>Unique Facts</li>
            <li>Opportunities: Pain Points and Solutions</li>
            <li>Booking Page Info</li>
            <li>
              <span className="font-medium">Research Report:</span>
              <ul className="list-circle pl-6 mt-1">
                <li>Name, Headline, Location</li>
                <li>Job Title, Company Description</li>
                <li>Company Website</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Recent LinkedIn Posts</li>
              </ul>
            </li>
            <li>Google Research Analysis</li>
            <li>Trustpilot Reviews</li>
            <li>Citations</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportPreview;
