import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <Card className="w-full md:w-64">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Networking",
      description: "Connect with professionals across various industries",
    },
    {
      title: "Skill Development",
      description: "Access resources to enhance your talents and abilities",
    },
    {
      title: "Career Growth",
      description:
        "Explore job opportunities and build your professional profile",
    },
    {
      title: "Industry Insights",
      description: "Stay updated with the latest trends in multiple sectors",
    },
    {
      title: "Entrepreneurship",
      description: "Get support and guidance for your business ventures",
    },
    {
      title: "Community",
      description: "Join clubs and groups aligned with your interests",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
