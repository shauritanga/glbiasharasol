import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
}) => {
  return (
    <Card className="w-80 flex-shrink-0 mx-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{testimonial}</p>
      </CardContent>
    </Card>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      name: "John Doe",
      role: "Software Engineer",
      testimonial:
        "This platform has been instrumental in advancing my career in tech.",
    },
    {
      name: "Jane Smith",
      role: "Entrepreneur",
      testimonial:
        "The resources and network I've gained here have been crucial for my startup.",
    },
    {
      name: "Mike Johnson",
      role: "Healthcare Professional",
      testimonial:
        "I've found invaluable connections in the medical field through this site.",
    },
    {
      name: "Emily Brown",
      role: "Artist",
      testimonial:
        "The talent showcase feature has opened up new opportunities for my work.",
    },
    {
      name: "David Lee",
      role: "Financial Analyst",
      testimonial:
        "The insights shared by industry experts here have been game-changing.",
    },
    {
      name: "Sarah Wilson",
      role: "Agriculture Specialist",
      testimonial:
        "I've learned so much about sustainable farming practices from this community.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Users Say
        </h2>
        <div className="flex overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
