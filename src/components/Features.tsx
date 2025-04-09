
import { 
  Brain, 
  Clock, 
  Search, 
  BarChart, 
  BookOpen, 
  Briefcase, 
  Target, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-agent-600" />,
    title: "Comprehensive Research",
    description: "Collects data from LinkedIn, Google, Trustpilot, and other sources"
  },
  {
    icon: <Brain className="h-6 w-6 text-agent-600" />,
    title: "AI Analysis",
    description: "Identifies pain points and opportunities tailored to each client"
  },
  {
    icon: <Clock className="h-6 w-6 text-agent-600" />,
    title: "Rapid Results",
    description: "Delivers detailed reports in minutes, not hours"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-agent-600" />,
    title: "Company Insights",
    description: "Deep dive into company history, structure, and challenges"
  },
  {
    icon: <Target className="h-6 w-6 text-agent-600" />,
    title: "Personalized Solutions",
    description: "Suggests approaches aligned with client needs and interests"
  },
  {
    icon: <BarChart className="h-6 w-6 text-agent-600" />,
    title: "Data-Driven Strategy",
    description: "Provides actionable intelligence for informed decisions"
  },
  {
    icon: <BookOpen className="h-6 w-6 text-agent-600" />,
    title: "Complete Background",
    description: "Education, experience, and professional accomplishments"
  },
  {
    icon: <Zap className="h-6 w-6 text-agent-600" />,
    title: "Meeting Prep",
    description: "Perfect for last-minute preparation and research"
  }
];

const Features = () => {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-8">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
