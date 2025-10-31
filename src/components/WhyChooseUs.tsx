import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "3+ Years of Dedicated Experience",
    "Skilled & Creative Team",
    "Customized Marketing Strategies",
    "Affordable Packages",
    "Result-Oriented Approach"
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why Choose <span className="text-primary">Us</span>
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-4">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-base text-foreground font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
