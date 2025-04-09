
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <Card className="w-full max-w-xl shadow-md border-agent-100">
      <CardContent className="pt-6">
        <div className="flex space-x-1 mb-3">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-lg italic text-gray-700 mb-4">
          "This tool saved me hours of research and helped me close a major deal. I had a surprise meeting
          with a potential client and was able to walk in fully prepared with insights about their business
          and pain points. Absolutely game-changing."
        </blockquote>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-agent-200 flex items-center justify-center text-agent-700 font-bold mr-3">
            JS
          </div>
          <div>
            <p className="font-medium">James Smith</p>
            <p className="text-sm text-gray-500">Business Development Manager</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
